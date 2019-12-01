use crate::utils::*;
use crate::*;
use derivative::Derivative;
use wasm_bindgen::JsValue;

pub type AccessorPtr<'a> = *mut Accessor<'a>;

#[derive(Derivative, Clone, Debug)]
#[derivative(PartialEq)]
pub struct Accessor<'a> {
  pub parent: Option<AccessorPtr<'a>>,
  pub of_type: Type,
  pub index: Option<u16>,
  pub selection: SelectionPtr<'a>,
  pub children: Vec<AccessorPtr<'a>>,

  pub value: Option<ValueRef<'a>>,

  #[derivative(PartialEq = "ignore")]
  pub on_value_change: Event<'a, ValueRef<'a>>,
}

impl<'a> Accessor<'a> {
  pub fn new_root(of_type: &Type, value: &ValueRef<'a>) -> &'static mut Self {
    Box::leak(Box::new(Self {
      selection: Selection::new(of_type, None),
      value: Some(value.clone()),
      of_type: of_type.clone(),
      parent: None,
      index: None,
      children: vec![],
      on_value_change: Event::new(),
    }))
  }

  pub fn new_index(
    parent: AccessorPtr<'a>,
    index: u16,
    value: Option<&ValueRef<'a>>,
  ) -> &'static mut Self {
    unsafe {
      Box::leak(Box::new(Self {
        selection: (*parent).selection,
        value: value.map(|v| v.clone()),
        of_type: match (*parent).of_type {
          Type::Array(ref arr) => *arr.of_type.clone(),
          _ => panic!(),
        },
        index: Some(index),
        parent: None,
        children: vec![],
        on_value_change: Event::new(),
      }))
    }
  }

  pub fn new_field(
    parent: AccessorPtr<'a>,
    selection: SelectionPtr<'a>,
    value: Option<&ValueRef<'a>>,
  ) -> &'static mut Self {
    unsafe {
      Box::leak(Box::new(Self {
        of_type: (*selection).of_type.clone(),
        value: value.map(|v| v.clone()),
        parent: Some(parent),
        selection,
        index: None,
        children: vec![],
        on_value_change: Event::new(),
      }))
    }
  }

  pub fn new_fragment(
    parent: AccessorPtr<'a>,
    selection: SelectionPtr<'a>,
    of_type: &Type,
    value: Option<&ValueRef<'a>>,
  ) -> &'static mut Self {
    Box::leak(Box::new(Self {
      of_type: of_type.clone(),
      value: value.map(|v| v.clone()),
      parent: Some(parent),
      selection,
      index: None,
      children: vec![],
      on_value_change: Event::new(),
    }))
  }

  pub fn get_child(&self, field: Option<&Field>, index: Option<u16>) -> Option<AccessorPtr<'a>> {
    for child in &self.children {
      unsafe {
        if (**child).index == index || (*(**child).selection).field == field.map(|f| f.clone()) {
          return Some(*child);
        }
      }
    }
    None
  }

  pub fn add_child(&mut self, accessor: AccessorPtr<'a>) {
    self.children.push(accessor);
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

  pub fn path(&mut self) -> Vec<AccessorPtr<'a>> {
    let mut path = vec![];
    if let Some(parent) = self.parent {
      unsafe { path.extend((*parent).path()) }
    }
    path.push(self as AccessorPtr);
    path
  }

  pub fn output(&'static mut self) -> JsValue {
    let of_type = self.of_type.clone();

    of_type.output(self as AccessorPtr)
  }
}
