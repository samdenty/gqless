use crate::utils::*;
use crate::*;
use derivative::Derivative;
use std::cell::RefCell;
use std::collections::HashMap;
use std::rc::Rc;

#[derive(Clone, PartialEq, Debug)]
pub enum Data<'a> {
  Null,
  Bool(bool),
  Number(i32),
  String(String),
  JSON(JsValue),
  Array(Vec<ValueRef<'a>>),
  Object(HashMap<String, ValueRef<'a>>),
}

pub type ValueRef<'a> = Rc<RefCell<Value<'a>>>;

#[derive(Clone, Debug, Derivative)]
#[derivative(PartialEq)]
pub struct Value<'a> {
  pub of_type: Type,
  pub data: Data<'a>,

  #[derivative(PartialEq = "ignore")]
  pub on_set_key: Event<'a, (String, ValueRef<'a>)>,

  #[derivative(PartialEq = "ignore")]
  pub on_set_index: Event<'a, (usize, ValueRef<'a>)>,
}

impl<'a> Value<'a> {
  pub fn new(of_type: &Type, data: Data<'a>) -> ValueRef<'a> {
    Rc::new(RefCell::new(Self {
      of_type: of_type.clone(),
      data,
      on_set_key: Event::new(),
      on_set_index: Event::new(),
    }))
  }

  pub fn get_key(&self, key: &str) -> Option<&ValueRef<'a>> {
    match &self.data {
      Data::Object(obj) => obj.get(key),
      _ => None,
    }
  }

  pub fn get_index(&self, key: usize) -> Option<&ValueRef<'a>> {
    match &self.data {
      Data::Array(arr) => arr.get(key),
      _ => None,
    }
  }

  pub fn set_key(&mut self, key: &str, value: &ValueRef<'a>) -> Result<(), ()> {
    match self.data {
      Data::Object(ref mut obj) => {
        obj.insert(key.into(), value.clone());
        Ok(())
      }
      _ => Err(()),
    }
  }

  pub fn set_index(&mut self, key: usize, value: &ValueRef<'a>) -> Result<(), ()> {
    match self.data {
      Data::Array(ref mut arr) => {
        arr.insert(key, value.clone());
        Ok(())
      }
      _ => Err(()),
    }
  }
}

impl<'a> Drop for Value<'a> {
  fn drop(&mut self) {
    console_log!("drop");
  }
}
