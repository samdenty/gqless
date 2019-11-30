#[macro_use]
use crate::console_log;
use crate::accessors::*;
use crate::selections::*;
use crate::types::*;
use js_sys::{Object, Proxy, Reflect};
use std::rc::Rc;
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsValue;

#[wasm_bindgen]
extern "C" {
  fn testing(test: &dyn Fn(String)) -> String;
}

pub trait Outputable {
  fn output(&'static self, accessor: AccessorRef) -> JsValue;
}

impl Type {
  pub fn output(&self, accessor: AccessorRef) -> JsValue {
    match self {
      Type::Array(t) => Box::leak(Box::new(t.clone())).output(accessor),
      Type::Scalar(t) => Box::leak(Box::new(t.clone())).output(accessor),
      Type::Object(t) => Box::leak(Box::new(t.clone())).output(accessor),
      _ => JsValue::UNDEFINED,
    }
  }
}

impl Outputable for ScalarType {
  fn output(&'static self, accessor: AccessorRef) -> JsValue {
    JsValue::NULL
  }
}

impl Outputable for ArrayType {
  fn output(&'static self, accessor: AccessorRef) -> JsValue {
    unsafe {
      let target = Object::new();
      let handler = Object::new();

      let get: Box<dyn FnMut(JsValue, String) -> JsValue> = Box::new(move |_obj, prop| {
        let index = prop.parse::<u16>();

        match index {
          Ok(index) => {
            let existing_accessor = (*accessor).get_child(None, Some(index));

            let index_accessor = existing_accessor
              .or_else(|| {
                let index_accessor = Accessor::new(
                  (*accessor).selection,
                  Some(accessor),
                  match &(*accessor).of_type {
                    Type::Array(array_type) => Some(&*array_type.of_type),
                    _ => panic!(),
                  },
                  Some(index),
                );
                (*accessor).add_child(&index_accessor);
                Some(index_accessor)
              })
              .unwrap();

            Accessor::output(index_accessor)
          }
          _ => JsValue::UNDEFINED,
        }
      });

      let get_cl = Closure::wrap(get);
      Reflect::set(&handler, &"get".into(), &get_cl.as_ref().into());
      get_cl.forget();

      Proxy::new(&target, &handler).into()
    }
  }
}

impl Outputable for ObjectType {
  fn output(&'static self, accessor: AccessorRef) -> JsValue {
    let target = Object::new();
    let handler = Object::new();

    let get: Box<dyn FnMut(JsValue, String) -> JsValue> =
      Box::new(move |_obj, prop| match self.fields.get(&prop) {
        Some(field) => Box::leak(Box::new(field.clone())).output(accessor),
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
  pub fn output(&'static self, parent_accessor: AccessorRef) -> JsValue {
    unsafe {
      let mut get_output = move || -> JsValue {
        let existing_accessor = (*parent_accessor).get_child(Some(self), None);

        let mut field_accessor = existing_accessor
          .or_else(|| {
            let selection = Selection::new(self, None);
            let field_accessor = Accessor::new(selection, Some(parent_accessor), None, None);
            (*parent_accessor).add_child(&field_accessor);
            Some(field_accessor)
          })
          .unwrap();
        console_log!("get output on {}", self.name);

        field_accessor.output()
      };

      match &self.arguments {
        Some(arguments) => {
          let handler = Object::new();

          let mut argumentless_output = None;
          let get: Box<dyn FnMut(JsValue, String) -> JsValue> = Box::new(move |_obj, prop| {
            if argumentless_output.is_none() {
              argumentless_output = Some(get_output());
            }
            let output = argumentless_output.clone().unwrap();

            Reflect::get(&output, &prop.into()).expect("Cannot read property on null")
          });

          let args: Box<dyn Fn()> = Box::new(move || {
            // console_log!("called");
          });

          let get_cl = Closure::wrap(get);
          Reflect::set(&handler, &"get".into(), &get_cl.as_ref().into()).unwrap();
          get_cl.forget();

          let args_cl = Closure::wrap(args);
          let args_fn: JsValue = args_cl.as_ref().into();
          args_cl.forget();

          Proxy::new(&args_fn, &handler).into()
        }
        None => get_output(),
      }
    }
  }
}
