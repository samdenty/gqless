use crate::selections::*;
use crate::types::*;
use derivative::Derivative;
use std::cell::RefCell;
use std::rc::Rc;
use wasm_bindgen::JsValue;

#[derive(Derivative)]
#[cfg_attr(debug_assertions, derivative(Debug))]
pub struct Accessor {
  #[cfg_attr(debug_assertions, derivative(Debug = "ignore"))]
  pub parent: Option<Rc<RefCell<Accessor>>>,
  pub of_type: Type,
  pub selection: Rc<RefCell<Selection>>,

  pub children: Vec<Rc<RefCell<Accessor>>>,
}

impl Accessor {
  pub fn new(
    selection: &Rc<RefCell<Selection>>,
    parent: Option<&Rc<RefCell<Accessor>>>,
    of_type: Option<&Type>,
  ) -> Self {
    Accessor {
      of_type: if let Some(of_type) = of_type {
        of_type.clone()
      } else {
        selection.borrow().of_type.clone()
      },
      parent: if let Some(parent) = parent {
        Some(parent.clone())
      } else {
        None
      },
      selection: selection.clone(),
      children: vec![],
    }
  }

  // pub fn find_child_selection(&self, selection: &Rc<RefCell<Selection>>) -> Option<&Accessor> {
  //   for child in &self.children {
  //     if child.borrow().selection == *selection {
  //       return Some(child);
  //     }
  //   }
  //   None
  // }

  pub fn add_accessor(&mut self, accessor: &Rc<RefCell<Accessor>>) {
    self.children.push(accessor.clone());
  }

  // pub fn path(&self) -> Vec<&Accessor> {
  //   let mut path = vec![];

  //   if let Some(parent) = &self.parent {
  //     path.extend(parent.borrow().path());
  //   }

  //   path.push(self);

  //   path
  // }

  // pub fn get_data(self) -> JsValue {
  //   self.of_type.output(&self)
  // }
}
