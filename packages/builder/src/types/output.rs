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

trait Outputable {
  fn output(self, accessor: Rc<RefCell<Accessor>>) -> JsValue;
}

impl Type {
  pub fn output(&self, accessor: Rc<RefCell<Accessor>>) -> JsValue {
    match self {
      // Type::Scalar(t) => t.clone().output(accessor),
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

impl ObjectType {
  fn output(self, accessor: Rc<RefCell<Accessor>>) -> JsValue {
    let target = Object::new();
    let handler = Object::new();

    let b: Box<dyn Fn(JsValue, String)> = Box::new(move |obj, prop| {
      // let field = Rc::new(RefCell::new(self.fields.get(&prop).unwrap()));
      // let field_accessor = Accessor::new(field, Some(accessor), None);

      // console_log!(" {:#?}", selection);
      match self.fields.get(&prop) {
        Some(field) => {
          let selection = Selection::new(field, None);
          let field_accessor = Accessor::new(&selection, Some(&accessor), None);

          accessor.borrow_mut().add_accessor(&field_accessor);

          // accessor.borrow();

          console_log!(" {:#?}", accessor);
        }
        None => {
          console_log!("no {}", prop);
        }
      };
    });

    let cb = Closure::wrap(b);

    Reflect::set(&handler, &"get".into(), &cb.as_ref().into());

    cb.forget();

    Proxy::new(&target, &handler).into()
  }
}

// #[derive(Clone)]
// struct A {
//   parent: Box<A>,
//   b: Option<B>,
// }

// impl A {
//   pub fn new(parent: A, string: &String) -> Self {
//     Self {
//       parent: Box::new(parent.clone()),
//       b: None,
//     }
//   }
// }

// struct C {
//   a: A
// }
// impl C {
//   pub fn new(a: A) -> Self {
//     C { a }
//   }
// }

// #[derive(Clone)]
// struct B {
//   s: HashMap<String, String>,
// }
// impl B {
//   fn c(self, a: A) {
//     let b: Box<dyn Fn(String)> = Box::new(move |string| {
//       // self.a;
//       match self.s.get(&string) {
//         Some(string) => {
//           let a = A::new(a.clone(), string);
//           let c = C::new(a);
//         },
//         _ => {}
//       }
//     });

//     Closure::wrap(b);
//   }
// }
