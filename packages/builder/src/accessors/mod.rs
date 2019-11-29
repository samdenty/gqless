use crate::console_log;
use crate::selections::*;
use crate::types::*;
use derivative::Derivative;
use std::cell::RefCell;
use std::rc::Rc;
use wasm_bindgen::JsValue;

#[derive(PartialEq, Derivative)]
#[cfg_attr(debug_assertions, derivative(Debug))]
pub struct Accessor {
  #[cfg_attr(debug_assertions, derivative(Debug = "ignore"))]
  pub parent: Option<Rc<RefCell<Accessor>>>,
  pub of_type: Type,
  pub index: Option<u16>,
  pub selection: Rc<RefCell<Selection>>,

  pub children: Vec<Rc<RefCell<Accessor>>>,
}

impl Accessor {
  pub fn new(
    selection: &Rc<RefCell<Selection>>,
    parent: Option<&Rc<RefCell<Accessor>>>,
    of_type: Option<&Type>,
    index: Option<u16>,
  ) -> Rc<RefCell<Self>> {
    Rc::new(RefCell::new(Accessor {
      index,
      of_type: of_type
        .and_then(|t| Some(t.clone()))
        .or_else(|| Some(selection.borrow().of_type.clone()))
        .unwrap(),
      parent: parent.and_then(|p| Some(p.clone())),
      selection: selection.clone(),
      children: vec![],
    }))
  }

  pub fn get_child(
    &self,
    field: Option<&Field>,
    index: Option<u16>,
  ) -> Option<&Rc<RefCell<Accessor>>> {
    for child in &self.children {
      let child_br = child.borrow();

      if child_br.index == index
        && child_br.selection.borrow().field == field.and_then(|f| Some(f.clone()))
      {
        return Some(child);
      }
    }
    None
  }

  pub fn add_child(&mut self, accessor: &Rc<RefCell<Accessor>>) {
    self.children.push(accessor.clone())
  }
  // pub fn find_child_selection(&self, selection: &Rc<RefCell<Selection>>) -> Option<&Accessor> {
  //   for child in &self.children {
  //     if child.borrow().selection == *selection {
  //       return Some(child);
  //     }
  //   }
  //   None
  // }

  // pub fn path(&self) -> Vec<&Accessor> {

  //   if let Some(parent) = &self.parent {
  //     let mut parent_path = parent.borrow().path();
  //     parent_path.push(self);
  //     parent_path
  //   } else {
  //     vec![self]
  //   }
  // }

  pub fn output(accessor: &Rc<RefCell<Accessor>>) -> JsValue {
    let accessor_br = accessor.borrow();
    let selection_br = accessor_br.selection.borrow();

    if let Some(field) = &selection_br.field {
      if field.of_type == accessor_br.of_type {
        return Box::leak(Box::new(field.clone())).output(accessor.clone());
      }
    }

    accessor_br.of_type.output(accessor.clone())
  }
}
