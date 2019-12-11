#![allow(unused_must_use)]
#![feature(arbitrary_self_types, get_mut_unchecked, option_result_contains)]
#[macro_use]
extern crate maplit;
#[macro_use]
extern crate lazy_static;

pub mod accessor;
pub mod scheduler;
pub mod selection;
pub mod types;
pub mod utils;
pub mod value;

pub use accessor::*;
use js_sys::{Object, Proxy, Reflect};
pub use scheduler::*;
pub use selection::*;
use std::rc::Rc;
pub use types::*;
pub use value::*;
use wasm_bindgen::prelude::*;

#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub fn test2() -> JsValue {
  let string = ScalarType::new("String");
  let user = ObjectType::new(
    "User",
    hashmap! {
      "name".into() => Field::new(
        "name",
        &string,
        false,
        None
      )
    },
  );
  let query = ObjectType::new(
    "Query",
    hashmap! {
      "me".into() => Field::new("me", &user, false, None),
      "users".into() => Field::new("users", &ArrayType::new(&user, false), false, None),
      "user".into() => Field::new(
        "user",
        &user,
        true,
        Some(Arguments::new(hashmap! {
          "id".into() => Field::new("id", &string, false, None)
        }))
      ),
    },
  );

  let value = Value::new(
    &query,
    Data::Object(hashmap! {
      "me".into() => Value::new(&user, Data::Object(hashmap! {
        "name".into() => Value::new(&string, Data::String("bob".into()))
      }))
    }),
  );
  let scheduler = Scheduler::new();
  let accessor = Accessor::new_root(scheduler, &query, &value.clone());

  console_log!(
    "{:#?}",
    accessor.value.clone().unwrap().borrow().get_key("me")
  );

  let obj = Object::new();

  Reflect::set(&obj, &"output".into(), &accessor.output());

  let cb = Closure::wrap(Box::new(move || unsafe {
    Rc::get_mut_unchecked(scheduler).push_stack(Query::new("asd"));
  }) as Box<FnMut()>);

  Reflect::set(&obj, &"add_stack".into(), &cb.as_ref().into());
  cb.forget();

  obj.into()

  // (accessor.output(), cb)
  // cb
}
