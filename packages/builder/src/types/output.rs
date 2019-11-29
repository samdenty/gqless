#[macro_use]
use crate::console_log;
use crate::accessors::*;
use crate::selections::*;
use crate::types::*;
use js_sys::{Object, Proxy, Reflect};
use std::cell::RefCell;
use std::rc::Rc;
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use wasm_bindgen::JsValue;

#[wasm_bindgen]
extern "C" {
  fn testing(test: &dyn Fn(String)) -> String;
}

pub trait Outputable {
  fn output(self, accessor: Rc<RefCell<Accessor>>) -> JsValue;
}

impl Type {
  pub fn output(&self, accessor: Rc<RefCell<Accessor>>) -> JsValue {
    match self {
      Type::Array(t) => t.clone().output(accessor),
      Type::Scalar(t) => t.clone().output(accessor),
      Type::Object(t) => t.clone().output(accessor),
      _ => JsValue::UNDEFINED,
    }
  }
}

impl Outputable for ScalarType {
  fn output(self, accessor: Rc<RefCell<Accessor>>) -> JsValue {
    JsValue::NULL
  }
}

impl Outputable for ArrayType {
  fn output(self, accessor: Rc<RefCell<Accessor>>) -> JsValue {
    let target = Object::new();
    let handler = Object::new();

    let get: Box<dyn Fn(JsValue, String) -> JsValue> = Box::new(move |_obj, prop| {
      let index = prop.parse::<u16>();

      match index {
        Ok(index) => {
          let mut accessor_br = accessor.borrow_mut();
          let existing_accessor = accessor_br.get_child(None, Some(index));

          let index_accessor = if let Some(existing_accessor) = existing_accessor {
            existing_accessor.clone()
          } else {
            let index_accessor = Accessor::new(
              &accessor_br.selection,
              Some(&accessor),
              match &accessor_br.of_type {
                Type::Array(array_type) => Some(&*array_type.of_type),
                _ => panic!(),
              },
              Some(index),
            );
            accessor_br.add_child(&index_accessor);
            index_accessor
          };

          Accessor::output(&index_accessor.clone())
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

impl Outputable for ObjectType {
  fn output(self, accessor: Rc<RefCell<Accessor>>) -> JsValue {
    let target = Object::new();
    let handler = Object::new();

    let get: Box<dyn Fn(JsValue, String) -> JsValue> =
      Box::new(move |_obj, prop| match self.fields.get(&prop) {
        Some(field) => Box::leak(Box::new(field.clone())).output(accessor.clone()),
        None => {
          console_log!("unknown key {}", prop);
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
  pub fn output(&'static self, accessor: Rc<RefCell<Accessor>>) -> JsValue {
    let get_output = move || -> JsValue {
      let mut accessor_br = accessor.borrow_mut();
      let existing_accessor = accessor_br.get_child(Some(self), None);

      let field_accessor = if let Some(existing_accessor) = existing_accessor {
        existing_accessor.clone()
      } else {
        let selection = Selection::new(self, None);
        let field_accessor = Accessor::new(&selection, Some(&accessor), None, None);
        accessor_br.add_child(&field_accessor);
        field_accessor
      };

      Accessor::output(&field_accessor.clone())
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
          console_log!("called");
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
