use crate::utils::*;
use crate::*;
use derivative::Derivative;
use std::collections::HashMap;
use std::rc::Rc;

pub type TCommit<'a> = Commit<'a>;

#[derive(Derivative)]
#[derivative(Debug)]
pub struct Commit<'a> {
  pub accessors: HashMap<AccessorRef<'a>, Vec<Query>>,
  pub stack: QueryStack,

  #[derivative(Debug = "ignore")]
  pub on_active: Event<'a, ()>,
  #[derivative(Debug = "ignore")]
  pub on_idle: Event<'a, ()>,
}

impl<'a> Commit<'a> {
  pub fn new(stack: &QueryStack) -> TCommit<'a> {
    Self {
      stack: stack.clone(),
      accessors: HashMap::new(),
      on_active: Event::new(),
      on_idle: Event::new(),
    }
  }

  pub fn stage(&mut self, accessor: &AccessorRef<'a>) {
    self
      .accessors
      .insert(accessor.clone(), self.stack.borrow().to_vec());
  }

  pub fn ustage(&mut self, accessor: &AccessorRef<'a>) {
    self.accessors.remove(accessor);
  }

  pub fn fetch(&self) {
    console_log!("fetch {:?}", self.stack)
  }
}
