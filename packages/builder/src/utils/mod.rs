mod event;
mod timer;
pub use event::*;
pub use timer::*;
use wasm_bindgen::prelude::*;

#[macro_export]
macro_rules! console_log {
  ($($t:tt)*) => {
    web_sys::console::log_1(&format_args!($($t)*).to_string().into());
  };
}

#[macro_export]
macro_rules! console_warn {
    ($($t:tt)*) => {
      web_sys::console::warn_1(&format_args!($($t)*).to_string().into());
    }
}

#[cfg(debug_assertions)]
#[wasm_bindgen(start)]
pub fn set_panic_hook() {
  console_error_panic_hook::set_once();
}
