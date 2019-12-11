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
    match &accessor.value {
      Some(value) => match &value.borrow().data {
        Data::String(string) => string.into(),
        Data::Number(number) => (*number).into(),
        Data::JSON(json) => json.clone(),
        Data::Null => JsValue::NULL,
        _ => JsValue::UNDEFINED,
      },
      None => JsValue::NULL,
    }
  }
}

impl Outputable for ArrayType {
  fn output(&'static self, accessor: AccessorRef<'static>) -> JsValue {
    let target = Object::new();
    let handler = Object::new();

    let get: Box<dyn FnMut(JsValue, String) -> JsValue> = Box::new(move |_obj, prop| {
      let index = prop.parse::<usize>();

      match index {
        Ok(index) => unsafe {
          let index_accessor = accessor.get_index(index);

          if let Some(index_accessor) = index_accessor {
            Box::leak(Box::new(index_accessor)).output()
          } else {
            let get_value =
              move |value: &ValueRef<'static>| value.borrow().get_index(index).cloned();

            let index_accessor = Box::leak(Box::new(Accessor::new_index(
              &mut accessor.clone(),
              index,
              accessor.value.as_ref().and_then(get_value).as_ref(),
            )));

            let accessor_mut = Rc::get_mut_unchecked(Box::leak(Box::new(accessor.clone())));
            accessor_mut.add_child(index_accessor);

            let accessor_mut2 = Rc::get_mut_unchecked(Box::leak(Box::new(accessor.clone())));

            accessor_mut.on_value_change.on(move |value| {
              accessor_mut2.set_value(get_value(value).as_ref());
              console_log!("changed!");
            });

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
          console_log!("unknown key {} on {:#?}", prop, accessor);
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
          let field_accessor = parent_accessor.get_field(self);

          if let Some(field_accessor) = field_accessor {
            Box::leak(Box::new(field_accessor)).output()
          } else {
            let get_value =
              move |value: &ValueRef<'static>| value.borrow().get_key(&self.name).cloned();

            let field_accessor = Box::leak(Box::new(Accessor::new_field(
              &parent_accessor,
              &Selection::new_field(self),
              parent_accessor.value.as_ref().and_then(get_value).as_ref(),
            )));

            let accessor_mut = Rc::get_mut_unchecked(Box::leak(Box::new(parent_accessor.clone())));
            Rc::get_mut_unchecked(&mut parent_accessor).add_child(field_accessor);

            let accessor_mut2 = Rc::get_mut_unchecked(Box::leak(Box::new(parent_accessor.clone())));

            accessor_mut.on_value_change.on(move |value| {
              accessor_mut2.set_value(get_value(value).as_ref());
            });
            field_accessor.output()
          }
        }
      };

    match &self.arguments {
      Some(arguments) => {
        let parent_accessor_cp = parent_accessor.clone();
        let args: Box<dyn FnMut(Option<Object>) -> JsValue> =
          Box::new(move |args| get_output(parent_accessor_cp.clone(), args));

        let args_cl = Closure::wrap(args);
        let args_fn: JsValue = args_cl.as_ref().into();
        args_cl.forget();

        if arguments.no_nullable_field() {
          return args_fn;
        };

        let mut argumentless_output = None;
        let get: Box<dyn FnMut(JsValue, String) -> JsValue> = Box::new(move |_, prop| {
          if argumentless_output.is_none() {
            argumentless_output = Some(get_output(parent_accessor.clone(), None));
          }
          let output = argumentless_output.clone().unwrap();

          Reflect::get(&output, &prop.into()).expect("Cannot read property on null")
        });

        let handler = Object::new();
        let get_cl = Closure::wrap(get);
        Reflect::set(&handler, &"get".into(), &get_cl.as_ref().into()).unwrap();
        get_cl.forget();

        Proxy::new(&args_fn, &handler).into()
      }
      None => get_output(parent_accessor, None),
    }
  }
}
