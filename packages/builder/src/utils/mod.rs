use std::fmt;
use std::ptr;
use wasm_bindgen::prelude::*;

#[macro_export]
macro_rules! console_log {
    ($($t:tt)*) => {
      web_sys::console::log_1(&format_args!($($t)*).to_string().into());
    }
}

#[macro_export]
macro_rules! console_warn {
    ($($t:tt)*) => {
      web_sys::console::warn_1(&format_args!($($t)*).to_string().into());
    }
}

#[derive(Clone)]
pub struct Event<'a, T> {
  listeners: Vec<&'a dyn Fn(&T)>,
}

impl<'a, T> Event<'a, T> {
  pub fn new() -> Self {
    Event { listeners: vec![] }
  }

  pub fn on(&'a mut self, callback: &'a impl Fn(&T)) -> Box<dyn FnMut() + 'a> {
    self.listeners.push(callback);

    Box::new(move || {
      self.off(callback);
    })
  }

  pub fn off(&mut self, callback: &'a impl Fn(&T)) {
    self.listeners.retain(|c| !(ptr::eq(*c, callback)));
  }

  pub fn emit(&self, data: T) {
    for callback in &self.listeners {
      callback(&data);
    }
  }
}

impl<T> fmt::Debug for Event<'_, T> {
  fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
    write!(f, "Event({})", self.listeners.len())
  }
}

#[cfg(debug_assertions)]
#[wasm_bindgen(start)]
pub fn set_panic_hook() {
  console_error_panic_hook::set_once();
}
