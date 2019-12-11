use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
  fn setTimeout(closure: &Closure<dyn FnMut()>, time: u16) -> i32;
// fn clearTimeout(id: i32);
}

#[wasm_bindgen]
pub struct Timer {
  // id: i32,
}

impl Timer {
  pub fn new(callback: impl FnOnce() + 'static, interval: u16) -> Self {
    let cb = Closure::once(callback);
    let id = setTimeout(&cb, interval);
    cb.forget();
    Self {}
  }
}

// impl Drop for Timer {
//   fn drop(&mut self) {
//     clearTimeout(self.id);
//   }
// }
