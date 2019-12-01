use crate::*;
use std::fmt;

impl fmt::Debug for Type {
  fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
    let mut fmt = |t: &dyn fmt::Debug| {
      if f.alternate() {
        write!(f, "{:#?}", t)
      } else {
        write!(f, "{:?}", t)
      }
    };

    match self {
      Type::Scalar(t) => fmt(&t),
      Type::Object(t) => fmt(&t),
      Type::Interface(t) => fmt(&t),
      Type::Array(t) => fmt(&t),
      Type::Union(t) => fmt(&t),
      Type::Input(t) => fmt(&t),
    }
  }
}

impl fmt::Debug for ScalarType {
  fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
    write!(f, "{}", self.name)
  }
}
