use crate::types::*;
use crate::utils::*;
use derivative::Derivative;
use std::any::Any;
use std::rc::Rc;

pub type SelectionRef = *mut Selection;

#[derive(Clone, Derivative)]
#[derivative(PartialEq)]
#[cfg_attr(debug_assertions, derivative(Debug))]
pub struct Selection {
  pub fragment_name: Option<String>,
  pub field: Option<Field>,
  pub of_type: Type,

  pub selections: Vec<SelectionRef>,
  pub key_selections: Vec<SelectionRef>,

  #[derivative(PartialEq = "ignore")]
  #[cfg_attr(debug_assertions, derivative(Debug = "ignore"))]
  pub on_select: Event<SelectionRef>,
  #[derivative(PartialEq = "ignore")]
  #[cfg_attr(debug_assertions, derivative(Debug = "ignore"))]
  pub on_unselect: Event<SelectionRef>,
}

impl Selection {
  pub fn new(type_or_field: &dyn Any, fragment_name: Option<String>) -> SelectionRef {
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

    Box::leak(Box::new(Self {
      of_type,
      field,
      fragment_name,
      selections: vec![],
      key_selections: vec![],
      on_select: Event::new(),
      on_unselect: Event::new(),
    })) as SelectionRef
  }

  pub fn add(self: SelectionRef, selection: SelectionRef, is_key: bool) {
    unsafe {
      if is_key && !((*self).key_selections.iter().any(|s| *s == selection)) {
        (*self).key_selections.push(selection)
      }
      if self.has(selection) {
        return;
      }
      (*self).selections.push(selection.clone());
      (*self).on_select.emit(selection.clone());
    }
  }

  pub fn has(self: SelectionRef, selection: SelectionRef) -> bool {
    unsafe { (*self).selections.iter().any(|s| *s == selection) }
  }

  pub fn delete(self: SelectionRef, selection: SelectionRef) {
    unsafe {
      if !self.has(selection) {
        return;
      }

      (*self).key_selections.retain(|s| *s != selection);
      (*self).selections.retain(|s| *s != selection);

      (*self).on_unselect.emit(selection.clone());
    }
  }

  pub fn size(&self) -> usize {
    self.selections.len()
  }
}
