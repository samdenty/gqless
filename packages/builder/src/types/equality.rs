use crate::*;

impl PartialEq for ScalarType {
  fn eq(&self, other: &Self) -> bool {
    self.name == other.name
  }
}
impl Eq for ScalarType {}

impl PartialEq for EnumType {
  fn eq(&self, other: &Self) -> bool {
    self.name == other.name
  }
}
impl Eq for EnumType {}

impl PartialEq for ObjectType {
  fn eq(&self, other: &Self) -> bool {
    self.name == other.name
  }
}
impl Eq for ObjectType {}

impl PartialEq for InterfaceType {
  fn eq(&self, other: &Self) -> bool {
    self.name == other.name
  }
}
impl Eq for InterfaceType {}

impl PartialEq for InputType {
  fn eq(&self, other: &Self) -> bool {
    self.name == other.name
  }
}
impl Eq for InputType {}

impl PartialEq for UnionType {
  fn eq(&self, other: &Self) -> bool {
    let mut iter = self.possible_types.iter();
    let mut other_iter = other.possible_types.iter();

    loop {
      let possible_type = iter.next();
      let other_possible_type = other_iter.next();

      if possible_type != other_possible_type {
        return false;
      }

      if possible_type.is_none() && other_possible_type.is_none() {
        return true;
      }
    }
  }
}
