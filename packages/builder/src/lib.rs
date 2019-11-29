#[macro_use]
extern crate maplit;
#[macro_use]
extern crate lazy_static;

pub mod accessors;
pub mod selections;
pub mod types;
pub mod utils;

use accessors::*;
use selections::*;
use std::cell::RefCell;
use std::rc::Rc;
use types::*;
use wasm_bindgen::prelude::*;

#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub fn test2() -> JsValue {
  let query_user: Field = Field::new(
    "me",
    &ObjectType::new(
      "User",
      &hashmap! {
        "name".to_string() => Field::new(
          "me",
          &ScalarType::new("String"),
          false
        )
      },
    ),
    false,
  );
  let query: Type = ObjectType::new(
    "Query",
    &hashmap! {
      "me".to_string() => query_user.clone()
    },
  );

  let selection = Selection::new(&query, None);
  let selection2 = Selection::new(&query_user, None);
  // selection.add(&selection2, false);

  let mut accessor = Accessor::new(&selection, None, None);
  // accessor.selection.borrow_mut().add(&selection2, false);
  // let accessor2 = Accessor::new(&selection2, Some(&accessor), None);
  // console_log!("{:#?}", accessor);
  let bor = accessor.borrow();
  bor.of_type.output(accessor.clone())
  // accessor.get_data()
  //   let mut selection = Selection::new(&Query);
  //   // selection.on_unselect.on(&|data| {
  //   //     console_log!("unselect");
  //   // });
  //   // selection.on_select.on(&|data| {
  //   //     console_log!("select");
  //   // });
  //   let selection2 = Selection::new(&Query);

  //   //   console_log!("{:#?}", accessor);
  //   accessor.selection.delete(&selection2);
  //   //   console_log!("{:#?}", accessor);

  //   //   console_log!("{:#?}", Query);
}

#[wasm_bindgen]
pub fn test() -> js_sys::Proxy {
  let target = js_sys::Object::new();
  let handler = js_sys::Object::new();

  let i = "asd";
  let closure = Closure::wrap(Box::new(move || {
    console_log!("called {}", i);
  }) as Box<Fn()>);
  js_sys::Reflect::set(&handler, &"get".into(), &closure.as_ref().clone());

  closure.forget();

  js_sys::Proxy::new(&target, &handler)
}
