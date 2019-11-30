#![feature(arbitrary_self_types)]
#[macro_use]
extern crate maplit;

pub mod accessors;
pub mod selections;
pub mod types;
pub mod utils;

use accessors::*;
use selections::*;
use types::*;
use wasm_bindgen::prelude::*;

#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub fn test2() -> JsValue {
  let user = ObjectType::new(
    "User",
    &hashmap! {
      "name".into() => Field::new(
        "name",
        &ScalarType::new("String"),
        false,
        None
      )
    },
  );
  let query_me = Field::new("me", &user, false, None);
  let query: Type = ObjectType::new(
    "Query",
    &hashmap! {
      "me".into() => query_me.clone(),
      "users".into() => Field::new("users", &ArrayType::new(&user, false), false, None),
      "user".into() => Field::new(
        "user",
        &user,
        true,
        Some(&Arguments::new(&hashmap! {
          "id".into() => Field::new("id", &ScalarType::new("String"), false, None)
        }))
      ),
    },
  );

  let selection = Selection::new(&query, None);
  let accessor = Accessor::new(selection, None, None, None);

  Accessor::output(accessor)
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
