#![feature(arbitrary_self_types, get_mut_unchecked)]
#[macro_use]
extern crate maplit;

pub mod accessor;
pub mod selection;
pub mod types;
pub mod utils;
pub mod value;

pub use accessor::*;
pub use selection::*;
use serde_json::json;
pub use types::*;
pub use value::*;
use wasm_bindgen::prelude::*;

#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub fn test2() -> JsValue {
  let user = ObjectType::new(
    "User",
    hashmap! {
      "name".into() => Field::new(
        "name",
        &ScalarType::new("String"),
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
          "id".into() => Field::new("id", &ScalarType::new("String"), false, None)
        }))
      ),
    },
  );

  let value = Value::new(&query, Data::Object(hashmap! {}));
  let accessor = Box::leak(Box::new(Accessor::new_root(&query, &value.clone())));

  {
    let mut val_mut = value.borrow_mut();
    console_log!("{:#?}", val_mut.get_key("me"));
    val_mut.set_key("me", &Value::new(&user, Data::Null));
    console_log!("{:#?}", val_mut.get_key("me"));
  }
  console_log!(
    "{:#?}",
    accessor.value.clone().unwrap().borrow().get_key("me")
  );
  // value.borrow_mut().a = 1;
  // console_log!("{}", value.borrow().a);
  // console_log!("{}", accessor.value.as_ref().unwrap().borrow().a);
  accessor.output()
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
