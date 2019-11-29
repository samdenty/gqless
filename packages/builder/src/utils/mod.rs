use std::ptr;
use std::rc::Rc;

#[macro_export]
macro_rules! console_log {
    ($($t:tt)*) => {
      let array = js_sys::Array::new();
      array.push(&JsValue::from(&format_args!($($t)*).to_string()));
      web_sys::console::log(&array);
    }
}

#[derive(Clone)]
pub struct Event<T> {
  listeners: Vec<Rc<dyn Fn(&T)>>,
}

impl<T> Event<T> {
  pub fn new() -> Self {
    Event { listeners: vec![] }
  }

  pub fn on(&mut self, callback: &Rc<dyn Fn(&T)>) {
    self.listeners.push(callback.clone());

    // Box::new(move || {
    //     self.off(callback);
    // })
  }

  pub fn a(&self) {}

  pub fn off(&mut self, callback: &Box<dyn Fn(&T)>) {
    self
      .listeners
      .retain(|c| !(ptr::eq(c.as_ref(), callback.as_ref())));
  }

  pub fn emit(&self, data: T) {
    for callback in &self.listeners {
      callback(&data);
    }
  }
}

pub fn set_panic_hook() {
  #[cfg(feature = "console_error_panic_hook")]
  console_error_panic_hook::set_once();
}
