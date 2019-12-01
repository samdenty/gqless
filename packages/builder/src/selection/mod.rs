use crate::utils::*;
use crate::*;
use derivative::Derivative;
use std::rc::Rc;

pub type SelectionPtr<'a> = Rc<Selection<'a>>;

#[derive(Clone, Debug, Derivative)]
#[derivative(PartialEq)]
pub struct Selection<'a> {
  pub fragment_name: Option<String>,
  pub field: Option<Field>,
  pub of_type: Type,

  pub selections: Vec<SelectionPtr<'a>>,
  pub key_selections: Vec<SelectionPtr<'a>>,

  #[derivative(PartialEq = "ignore")]
  pub on_select: Event<'a, SelectionPtr<'a>>,
  #[derivative(PartialEq = "ignore")]
  pub on_unselect: Event<'a, SelectionPtr<'a>>,
}

impl<'a> Selection<'a> {
  pub fn new(of_type: &Type, fragment_name: Option<String>) -> SelectionPtr<'a> {
    Rc::new(Self {
      of_type: of_type.clone(),
      field: None,
      fragment_name,
      selections: vec![],
      key_selections: vec![],
      on_select: Event::new(),
      on_unselect: Event::new(),
    })
  }

  pub fn new_field(field: &Field) -> SelectionPtr<'a> {
    Rc::new(Self {
      of_type: field.of_type.clone(),
      field: Some(field.clone()),
      fragment_name: None,
      selections: vec![],
      key_selections: vec![],
      on_select: Event::new(),
      on_unselect: Event::new(),
    })
  }

  pub fn add(&mut self, selection: &SelectionPtr<'a>, is_key: bool) {
    if is_key && !(self.key_selections.iter().any(|s| *s == *selection)) {
      self.key_selections.push(selection.clone())
    }
    if self.has(selection) {
      return;
    }
    (*self).selections.push(selection.clone());
    (*self).on_select.emit(selection.clone());
  }

  pub fn has(&self, selection: &SelectionPtr<'a>) -> bool {
    self.selections.iter().any(|s| *s == *selection)
  }

  pub fn delete(&mut self, selection: &SelectionPtr<'a>) {
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
