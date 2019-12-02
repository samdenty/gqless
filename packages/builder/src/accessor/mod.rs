use crate::utils::*;
use crate::*;
use derivative::Derivative;
use std::rc::Rc;
use wasm_bindgen::JsValue;

pub type AccessorRef<'a> = Rc<Accessor<'a>>;

#[derive(Derivative, Clone, Debug)]
#[derivative(PartialEq)]
pub struct Accessor<'a> {
  pub parent: Option<AccessorRef<'a>>,
  pub of_type: Box<Type>,
  pub index: Option<u16>,
  pub selection: SelectionRef<'a>,
  pub children: Vec<AccessorRef<'a>>,

  pub value: Option<ValueRef<'a>>,

  #[derivative(PartialEq = "ignore")]
  pub on_value_change: Event<'a, ValueRef<'a>>,
}

impl<'a> Accessor<'a> {
  pub fn new_root(of_type: &Box<Type>, value: &ValueRef<'a>) -> AccessorRef<'a> {
    Rc::new(Self {
      selection: Selection::new(of_type, None),
      value: Some(value.clone()),
      of_type: of_type.clone(),
      parent: None,
      index: None,
      children: vec![],
      on_value_change: Event::new(),
    })
  }

  pub fn new_index(
    parent: &AccessorRef<'a>,
    index: u16,
    value: Option<&ValueRef<'a>>,
  ) -> AccessorRef<'a> {
    Rc::new(Self {
      selection: parent.selection.clone(),
      value: value.map(|v| v.clone()),
      of_type: match *parent.of_type {
        Type::Array(ref arr) => arr.of_type.clone(),
        _ => panic!(),
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
      of_type: selection.of_type.clone(),
      value: value.map(|v| v.clone()),
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
      of_type: of_type.clone(),
      value: value.map(|v| v.clone()),
      parent: Some(parent),
      selection,
      index: None,
      children: vec![],
      on_value_change: Event::new(),
    })
  }

  pub fn get_child(&self, field: Option<&Field>, index: Option<u16>) -> Option<AccessorRef<'a>> {
    for child in &self.children {
      if child.index == index || child.selection.field == field.map(|f| f.clone()) {
        return Some(child.clone());
      }
    }
    None
  }

  pub fn add_child(&mut self, accessor: &AccessorRef<'a>) {
    self.children.push(accessor.clone());
  }

  pub fn set_value(&mut self, value: Option<&ValueRef<'a>>) {
    self.value = value.map(|v| v.clone());
  }
  // pub fn find_child_selection(&self, selection: &SelectionRef) -> Option<&Accessor> {
  //   for child in &self.children {
  //     if child.borrow().selection == *selection {
  //       return Some(child);
  //     }
  //   }
  //   None
  // }

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
