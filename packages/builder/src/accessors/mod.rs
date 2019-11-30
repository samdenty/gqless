use crate::console_log;
use crate::selections::*;
use crate::types::*;
use derivative::Derivative;
use std::cell::RefCell;
use std::rc::Rc;
use wasm_bindgen::JsValue;

pub type AccessorRef = *mut Accessor;

#[derive(Clone, PartialEq, Derivative)]
#[cfg_attr(debug_assertions, derivative(Debug))]
pub struct Accessor {
  #[cfg_attr(debug_assertions, derivative(Debug = "ignore"))]
  pub parent: Option<*mut Accessor>,
  pub of_type: Type,
  pub index: Option<u16>,
  pub selection: *mut Selection,

  pub children: Vec<*mut Accessor>,
}

impl Accessor {
  pub fn new(
    selection: SelectionRef,
    parent: Option<AccessorRef>,
    of_type: Option<&Type>,
    index: Option<u16>,
  ) -> AccessorRef {
    unsafe {
      Box::leak(Box::new(Self {
        index,
        of_type: of_type
          .map(|t| t.clone())
          .or_else(|| Some((*selection).of_type.clone()))
          .unwrap(),
        parent,
        selection,
        children: vec![],
      })) as AccessorRef
    }
  }

  pub fn get_child(&self, field: Option<&Field>, index: Option<u16>) -> Option<AccessorRef> {
    console_log!("called {}", (*self).children.len());

    unsafe {
      for child in &self.children {
        let child = { *child };
        let fe = (*(*child).selection).field == field.map(|f| f.clone());

        if (*child).index == index && fe {
          return Some(child);
        }
      }
      None
    }
  }

  pub fn add_child(&mut self, accessor: &AccessorRef) {
    self.children.push(accessor.clone());
    console_log!("pushed,now:{}", self.children.len());
  }
  // pub fn find_child_selection(&self, selection: &SelectionRef) -> Option<&Accessor> {
  //   for child in &self.children {
  //     if child.borrow().selection == *selection {
  //       return Some(child);
  //     }
  //   }
  //   None
  // }

  pub fn path(self: AccessorRef) -> Vec<AccessorRef> {
    unsafe {
      let mut path = vec![];
      if let Some(parent) = (*self).parent {
        path.extend(parent.path())
      }
      path.push(self);
      path
    }
  }

  pub fn output(self: AccessorRef) -> JsValue {
    unsafe { (*self).of_type.output(self) }
  }
}
