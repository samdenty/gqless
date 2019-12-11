use std::fmt;
use std::rc::Rc;

#[derive(Clone)]
pub struct Event<'a, T> {
  listeners: Vec<Rc<dyn FnMut(&T) + 'a>>,
}

impl<'a, T> Event<'a, T> {
  pub fn new() -> Self {
    Event { listeners: vec![] }
  }

  pub fn on(&'a mut self, callback: impl FnMut(&T) + 'a) -> Box<dyn FnOnce() + 'a> {
    let callback_size = &callback as *const _ as *const usize;
    self.listeners.push(Rc::new(callback));

    Box::new(move || {
      self
        .listeners
        .retain(|c| callback_size != &**c as *const _ as *const usize);
    })
  }

  // pub fn off(&mut self, callback: &'a impl FnMut(&T)) {
  //   // self.listeners.retain(|c| !(ptr::eq(*c, callback)));
  // }

  pub fn emit(&mut self, data: T) {
    for callback in &mut self.listeners {
      unsafe { Rc::get_mut_unchecked(callback)(&data) }
    }
  }
}

impl<T> fmt::Debug for Event<'_, T> {
  fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
    write!(f, "Event({})", self.listeners.len())
  }
}
