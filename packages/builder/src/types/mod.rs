mod debug;
mod equality;
pub mod output;

use derivative::Derivative;
use std::collections::*;

#[derive(Clone)]
#[cfg_attr(debug_assertions, derive(Debug))]
pub struct ScalarType {
  pub name: String,
}

#[derive(Clone)]
#[cfg_attr(debug_assertions, derive(Debug))]
pub struct EnumType {
  pub name: String,
}

#[derive(Clone, PartialEq)]
pub enum Type {
  Scalar(ScalarType),
  Object(ObjectType),
  Interface(InterfaceType),
  Array(ArrayType),
  Union(UnionType),

  Input(InputType),
}

#[derive(Derivative, Clone)]
#[cfg_attr(debug_assertions, derive(Debug))]
pub struct ObjectType {
  pub name: String,
  pub fields: HashMap<String, Field>,
}

#[derive(Derivative, Clone)]
#[cfg_attr(debug_assertions, derivative(Debug))]
pub struct InterfaceType {
  pub name: String,
  pub fields: HashMap<String, Field>,
  #[cfg_attr(debug_assertions, derivative(Debug = "ignore"))]
  pub possible_types: HashSet<ObjectType>,
}

#[derive(Derivative, Clone)]
#[cfg_attr(debug_assertions, derive(Debug))]
pub struct InputType {
  pub name: String,
  pub fields: HashMap<String, Field>,
}

#[derive(Derivative, Clone)]
#[cfg_attr(debug_assertions, derive(Debug))]
pub struct ArrayType {
  pub nullable: bool,
  pub of_type: Box<Type>,
}

#[derive(Derivative, Clone)]
#[cfg_attr(debug_assertions, derivative(Debug))]
pub struct UnionType {
  #[cfg_attr(debug_assertions, derivative(Debug = "ignore"))]
  pub possible_types: HashSet<Type>,
}

#[derive(PartialEq, Clone)]
#[cfg_attr(debug_assertions, derive(Debug))]
pub struct Arguments {
  pub inputs: HashMap<String, Field>,
}

#[derive(PartialEq, Clone)]
#[cfg_attr(debug_assertions, derive(Debug))]
pub struct Field {
  pub name: String,
  pub nullable: bool,
  pub of_type: Type,

  pub arguments: Option<Arguments>,
}

impl ScalarType {
  pub fn new(name: &str) -> Type {
    Type::Scalar(Self { name: name.into() })
  }
}

impl ObjectType {
  pub fn new(name: &str, fields: &HashMap<String, Field>) -> Type {
    Type::Object(Self {
      name: name.into(),
      fields: fields.clone(),
    })
  }
}

impl InterfaceType {
  pub fn new(
    name: &str,
    fields: &HashMap<String, Field>,
    possible_types: &HashSet<ObjectType>,
  ) -> Type {
    Type::Interface(Self {
      name: name.into(),
      fields: fields.clone(),
      possible_types: possible_types.clone(),
    })
  }
}

impl InputType {
  pub fn new(name: &str, fields: &HashMap<String, Field>) -> Type {
    Type::Input(Self {
      name: name.into(),
      fields: fields.clone(),
    })
  }
}

impl ArrayType {
  pub fn new(of_type: &Type, nullable: bool) -> Type {
    Type::Array(Self {
      of_type: Box::new(of_type.clone()),
      nullable,
    })
  }
}

impl UnionType {
  pub fn new(possible_types: &HashSet<Type>) -> Type {
    Type::Union(Self {
      possible_types: possible_types.clone(),
    })
  }
}

impl Arguments {
  pub fn new(inputs: &HashMap<String, Field>) -> Self {
    Self {
      inputs: inputs.clone(),
    }
  }
}

impl Field {
  pub fn new(name: &str, of_type: &Type, nullable: bool, arguments: Option<&Arguments>) -> Self {
    Self {
      name: name.into(),
      nullable,
      of_type: of_type.clone(),
      arguments: arguments.map(|a| a.clone()),
    }
  }
}
