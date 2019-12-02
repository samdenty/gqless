#[macro_use]
use crate::*;
use js_sys::{Object, Proxy, Reflect};
use std::rc::Rc;
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsValue;

#[wasm_bindgen]
extern "C" {
  fn testing(test: &dyn Fn(String)) -> String;
}

pub trait Outputable {
  fn output(&'static self, accessor: AccessorRef<'static>) -> JsValue;
}

impl Type {
  pub fn output(&'static self, accessor: AccessorRef<'static>) -> JsValue {
    match self {
      Type::Array(ref t) => t.output(accessor),
      Type::Scalar(ref t) => t.output(accessor),
      Type::Object(ref t) => t.output(accessor),
      _ => JsValue::UNDEFINED,
    }
  }
}

impl Outputable for ScalarType {
  fn output(&'static self, accessor: AccessorRef<'static>) -> JsValue {
    JsValue::NULL
  }
}

impl Outputable for ArrayType {
  fn output(&'static self, accessor: AccessorRef<'static>) -> JsValue {
    let target = Object::new();
    let handler = Object::new();

    let get: Box<dyn FnMut(JsValue, String) -> JsValue> = Box::new(move |_obj, prop| {
      let index = prop.parse::<u16>();

      match index {
        Ok(index) => unsafe {
          let existing_accessor = accessor.get_child(None, Some(index));

          if let Some(existing_accessor) = existing_accessor {
            Box::leak(Box::new(existing_accessor)).output()
          } else {
            let index_accessor = Box::leak(Box::new(Accessor::new_index(
              &accessor.clone(),
              index,
              None,
            )));
            let mut accessor_cp = accessor.clone();
            Rc::get_mut_unchecked(&mut accessor_cp).add_child(index_accessor);
            index_accessor.output()
          }
        },
        _ => JsValue::UNDEFINED,
      }
    });

    let get_cl = Closure::wrap(get);
    Reflect::set(&handler, &"get".into(), &get_cl.as_ref().into());
    get_cl.forget();

    Proxy::new(&target, &handler).into()
  }
}

impl Outputable for ObjectType {
  fn output(&'static self, accessor: AccessorRef<'static>) -> JsValue {
    let target = Object::new();
    let handler = Object::new();

    let get: Box<dyn FnMut(JsValue, String) -> JsValue> =
      Box::new(move |_obj, prop| match self.fields.get(&prop) {
        Some(field) => field.output(accessor.clone()),
        None => {
          // console_log!("unknown key {}", prop);
          JsValue::UNDEFINED
        }
      });

    let get_cl = Closure::wrap(get);
    Reflect::set(&handler, &"get".into(), &get_cl.as_ref().into());
    get_cl.forget();

    Proxy::new(&target, &handler).into()
  }
}

impl Field {
  pub fn output(&'static self, parent_accessor: AccessorRef<'static>) -> JsValue {
    let get_output =
      move |mut parent_accessor: AccessorRef<'static>, args: Option<Object>| -> JsValue {
        unsafe {
          let existing_accessor = parent_accessor.get_child(Some(self), None);

          if let Some(existing_accessor) = existing_accessor {
            Box::leak(Box::new(existing_accessor)).output()
          } else {
            let selection = Selection::new_field(self);
            let field_accessor = Box::leak(Box::new(Accessor::new_field(
              &parent_accessor,
              &selection,
              None,
            )));
            Rc::get_mut_unchecked(&mut parent_accessor).add_child(field_accessor);
            field_accessor.output()
          }
        }
      };

    match &self.arguments {
      Some(arguments) => {
        let handler = Object::new();

        let parent_accessor_cp = parent_accessor.clone();
        let args: Box<dyn FnMut(Option<Object>) -> JsValue> =
          Box::new(move |args| get_output(parent_accessor_cp.clone(), args));

        let mut argumentless_output = None;
        let get: Box<dyn FnMut(JsValue, String) -> JsValue> = Box::new(move |_obj, prop| {
          if argumentless_output.is_none() {
            argumentless_output = Some(get_output(parent_accessor.clone(), None));
          }
          let output = argumentless_output.clone().unwrap();

          Reflect::get(&output, &prop.into()).expect("Cannot read property on null")
        });

        let get_cl = Closure::wrap(get);
        Reflect::set(&handler, &"get".into(), &get_cl.as_ref().into()).unwrap();
        get_cl.forget();

        let args_cl = Closure::wrap(args);
        let args_fn: JsValue = args_cl.as_ref().into();
        args_cl.forget();

        Proxy::new(&args_fn, &handler).into()
      }
      None => get_output(parent_accessor, None),
    }
  }
}
