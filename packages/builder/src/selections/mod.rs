use crate::types::*;
use crate::utils::*;
use derivative::Derivative;
use std::any::Any;
use std::cell::RefCell;
use std::rc::Rc;

#[derive(Derivative)]
#[derivative(PartialEq)]
#[cfg_attr(debug_assertions, derivative(Debug))]
pub struct Selection {
  pub fragment_name: Option<String>,
  pub field: Option<Field>,
  pub of_type: Type,

  pub selections: Vec<Rc<RefCell<Selection>>>,
  pub key_selections: Vec<Rc<RefCell<Selection>>>,

  #[derivative(PartialEq = "ignore")]
  #[cfg_attr(debug_assertions, derivative(Debug = "ignore"))]
  pub on_select: Event<Rc<RefCell<Selection>>>,
  #[derivative(PartialEq = "ignore")]
  #[cfg_attr(debug_assertions, derivative(Debug = "ignore"))]
  pub on_unselect: Event<Rc<RefCell<Selection>>>,
}

impl Selection {
  pub fn new(type_or_field: &dyn Any, fragment_name: Option<String>) -> Self {
    let (of_type, field) = match type_or_field.downcast_ref::<Field>() {
      Some(t) => (t.of_type.clone(), Some(t.clone())),
      None => (
        match type_or_field.downcast_ref::<Type>() {
          Some(t) => t.clone(),
          None => panic!(),
        },
        None,
      ),
    };

    Self {
      of_type,
      field,
      fragment_name,
      selections: vec![],
      key_selections: vec![],
      on_select: Event::new(),
      on_unselect: Event::new(),
    }
  }

  pub fn add(&mut self, selection: &Rc<RefCell<Selection>>, is_key: bool) {
    if is_key && !(self.key_selections.iter().any(|s| *s == *selection)) {
      self.key_selections.push(selection.clone())
    }

    if self.has(selection) {
      return;
    }

    self.selections.push(selection.clone());
    self.on_select.emit(selection.clone());
  }

  pub fn has(&self, selection: &Rc<RefCell<Selection>>) -> bool {
    self.selections.iter().any(|s| *s == *selection)
  }

  pub fn delete(&mut self, selection: &Rc<RefCell<Selection>>) {
    if !self.has(selection) {
      return;
    }

    self.key_selections.retain(|s| *s != *selection);
    self.selections.retain(|s| *s != *selection);

    self.on_unselect.emit(selection.clone());
  }

  pub fn size(&self) -> usize {
    self.selections.len()
  }
}
