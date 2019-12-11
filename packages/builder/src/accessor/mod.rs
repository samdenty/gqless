use crate::utils::*;
use crate::*;
use derivative::Derivative;
use std::rc::Rc;
use wasm_bindgen::JsValue;

pub type AccessorRef<'a> = Rc<Accessor<'a>>;

#[derive(Derivative, Clone)]
#[derivative(Hash, Debug, PartialEq)]
pub struct Accessor<'a> {
  #[derivative(Debug = "ignore")]
  pub parent: Option<AccessorRef<'a>>,
  #[derivative(Hash = "ignore", PartialEq = "ignore")]
  pub scheduler: TScheduler<'a>,
  pub of_type: Box<Type>,
  pub index: Option<usize>,
  pub selection: SelectionRef<'a>,
  #[derivative(Hash = "ignore")]
  pub children: Vec<AccessorRef<'a>>,
  #[derivative(Hash = "ignore")]
  pub value: Option<ValueRef<'a>>,

  #[derivative(PartialEq = "ignore", Hash = "ignore")]
  pub on_value_change: Event<'a, ValueRef<'a>>,
}

impl<'a> Accessor<'a> {
  pub fn new_root(
    scheduler: &TScheduler<'a>,
    of_type: &Box<Type>,
    value: &ValueRef<'a>,
  ) -> &'static mut AccessorRef<'a> {
    Box::leak(Box::new(Rc::new(Self {
      scheduler: scheduler.clone(),
      selection: Selection::new(of_type, None),
      value: Some(value.clone()),
      of_type: of_type.clone(),
      parent: None,
      index: None,
      children: vec![],
      on_value_change: Event::new(),
    })))
  }

  pub fn new_index(
    parent: &AccessorRef<'a>,
    index: usize,
    value: Option<&ValueRef<'a>>,
  ) -> AccessorRef<'a> {
    Rc::new(Self {
      scheduler: parent.scheduler.clone(),
      selection: parent.selection.clone(),
      value: value.cloned(),
      of_type: match *parent.of_type {
        Type::Array(ref arr) => arr.of_type.clone(),
        _ => std::process::abort(),
      },
      index: Some(index),
      parent: None,
      children: vec![],
      on_value_change: Event::new(),
    })
  }

  pub fn new_field(
    parent: &AccessorRef<'a>,
    selection: &SelectionRef<'a>,
    value: Option<&ValueRef<'a>>,
  ) -> AccessorRef<'a> {
    Rc::new(Self {
      scheduler: parent.scheduler.clone(),
      of_type: selection.of_type.clone(),
      value: value.cloned(),
      parent: Some(parent.clone()),
      selection: selection.clone(),
      index: None,
      children: vec![],
      on_value_change: Event::new(),
    })
  }

  pub fn new_fragment(
    parent: AccessorRef<'a>,
    selection: SelectionRef<'a>,
    of_type: &Box<Type>,
    value: Option<&ValueRef<'a>>,
  ) -> AccessorRef<'a> {
    Rc::new(Self {
      scheduler: parent.scheduler.clone(),
      of_type: of_type.clone(),
      value: value.cloned(),
      parent: Some(parent),
      selection,
      index: None,
      children: vec![],
      on_value_change: Event::new(),
    })
  }

  pub fn get_index(&self, index: usize) -> Option<AccessorRef<'a>> {
    self
      .children
      .iter()
      .find(|c| c.index.contains(&index))
      .cloned()
  }

  pub fn get_field(&self, field: &Field) -> Option<AccessorRef<'a>> {
    self
      .children
      .iter()
      .find(|c| c.selection.field.contains(field))
      .cloned()
  }

  pub fn add_child(&mut self, accessor: &AccessorRef<'a>) {
    self.children.push(accessor.clone());
  }

  pub fn set_value(&mut self, value: Option<&ValueRef<'a>>) {
    self.value = value.cloned();

    if let Some(value) = value {
      self.on_value_change.emit(value.clone())
    }
  }

  pub fn selection_path(&self) -> Vec<SelectionRef<'a>> {
    let mut path = vec![];
    if let Some(parent) = &self.parent {
      path.extend(parent.selection_path());

      if path.last().contains(&&self.selection) {
        return path;
      }
    }
    path.push(self.selection.clone());
    path
  }

  pub fn path(self: &AccessorRef<'a>) -> Vec<AccessorRef<'a>> {
    let mut path = vec![];
    if let Some(parent) = &self.parent {
      path.extend(parent.path())
    }
    path.push(self.clone());
    path
  }

  pub fn output(self: &'static mut AccessorRef<'a>) -> JsValue {
    self.of_type.output(self.clone())
  }
}

impl<'a> Eq for Accessor<'a> {}
