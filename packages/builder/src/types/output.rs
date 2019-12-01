#[macro_use]
use crate::*;
use js_sys::{Object, Proxy, Reflect};
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsValue;

#[wasm_bindgen]
extern "C" {
  fn testing(test: &dyn Fn(String)) -> String;
}

pub trait Outputable {
  fn output(&'static self, accessor: AccessorPtr<'static>) -> JsValue;
}

impl Type {
  pub fn output(&self, accessor: AccessorPtr<'static>) -> JsValue {
    match self {
      Type::Array(t) => Box::leak(Box::new(t.clone())).output(accessor),
      Type::Scalar(t) => Box::leak(Box::new(t.clone())).output(accessor),
      Type::Object(t) => Box::leak(Box::new(t.clone())).output(accessor),
      _ => JsValue::UNDEFINED,
    }
  }
}

impl Outputable for ScalarType {
  fn output(&'static self, accessor: AccessorPtr<'static>) -> JsValue {
    JsValue::NULL
  }
}

impl Outputable for ArrayType {
  fn output(&'static self, accessor: AccessorPtr<'static>) -> JsValue {
    let target = Object::new();
    let handler = Object::new();

    let get: Box<dyn FnMut(JsValue, String) -> JsValue> = Box::new(move |_obj, prop| {
      let index = prop.parse::<u16>();

      match index {
        Ok(index) => unsafe {
          let existing_accessor = (*accessor).get_child(None, Some(index));

          let index_accessor = existing_accessor
            .or_else(|| {
              let index_accessor = Accessor::new_index(accessor, index, None);
              (*accessor).add_child(index_accessor);
              Some(index_accessor)
            })
            .unwrap();

          (*index_accessor).output()
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
  fn output(&'static self, accessor: AccessorPtr<'static>) -> JsValue {
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
  pub fn output(&'static self, parent_accessor: AccessorPtr<'static>) -> JsValue {
    let get_output = move |args: Option<Object>| -> JsValue {
      unsafe {
        let existing_accessor = (*parent_accessor).get_child(Some(self), None);

        let field_accessor = existing_accessor
          .or_else(|| {
            let selection = Selection::new_field(self);
            let field_accessor =
              Accessor::new_field(parent_accessor, selection, None) as AccessorPtr;
            (*parent_accessor).add_child(field_accessor);
            Some(field_accessor)
          })
          .unwrap();
        console_log!("get output on {}", self.name);

        (*field_accessor).output()
      }
    };

    match &self.arguments {
      Some(arguments) => {
        let handler = Object::new();

        let mut argumentless_output = None;
        let get: Box<dyn FnMut(JsValue, String) -> JsValue> = Box::new(move |_obj, prop| {
          if argumentless_output.is_none() {
            argumentless_output = Some(get_output(None));
          }
          let output = argumentless_output.clone().unwrap();

          Reflect::get(&output, &prop.into()).expect("Cannot read property on null")
        });

        let args: Box<dyn Fn(Option<Object>) -> JsValue> = Box::new(get_output);

        let get_cl = Closure::wrap(get);
        Reflect::set(&handler, &"get".into(), &get_cl.as_ref().into()).unwrap();
        get_cl.forget();

        let args_cl = Closure::wrap(args);
        let args_fn: JsValue = args_cl.as_ref().into();
        args_cl.forget();

        Proxy::new(&args_fn, &handler).into()
      }
      None => get_output(None),
    }
  }
}
