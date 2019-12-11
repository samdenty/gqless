use crate::*;
use std::hash::{Hash, Hasher};

impl Hash for ObjectType {
  fn hash<H: Hasher>(&self, state: &mut H) {
    self.name.hash(state)
  }
}

impl Hash for InterfaceType {
  fn hash<H: Hasher>(&self, state: &mut H) {
    self.name.hash(state)
  }
}

impl Hash for InputType {
  fn hash<H: Hasher>(&self, state: &mut H) {
    self.name.hash(state)
  }
}

impl Hash for EnumType {
  fn hash<H: Hasher>(&self, state: &mut H) {
    self.name.hash(state)
  }
}

impl Hash for ScalarType {
  fn hash<H: Hasher>(&self, state: &mut H) {
    self.name.hash(state)
  }
}

impl Hash for UnionType {
  fn hash<H: Hasher>(&self, state: &mut H) {
    for possible_type in &self.possible_types {
      possible_type.hash(state)
    }
  }
}

impl Hash for Arguments {
  fn hash<H: Hasher>(&self, state: &mut H) {
    for field in self.fields.values() {
      field.hash(state)
    }
  }
}
