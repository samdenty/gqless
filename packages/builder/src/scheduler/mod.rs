mod commit;
use crate::utils::*;
use crate::*;
pub use commit::*;
use derivative::*;
use std::cell::RefCell;
use std::rc::Rc;
use wasm_bindgen::prelude::*;

const INTERVAL: u16 = 500;

#[wasm_bindgen]
extern "C" {
  fn setTimeout(closure: &Closure<dyn FnMut()>, time: u16) -> i32;
  fn clearTimeout(id: i32);
}

pub type QueryStack = Rc<RefCell<Vec<Query>>>;

#[derive(Debug, Clone)]
pub struct Query {
  pub name: Option<String>,
}

impl Query {
  pub fn new(name: &str) -> Self {
    Query {
      name: Some(name.into()),
    }
  }
}

pub type TScheduler<'a> = Rc<Scheduler<'a>>;

#[derive(Derivative)]
#[derivative(Debug)]
pub struct Scheduler<'a> {
  pub stack: QueryStack,
  pub commit: TCommit<'a>,
  // #[derivative(Debug = "ignore")]
  // timer: Option<Timer>,
}

impl<'a> Scheduler<'a> {
  pub fn new() -> &'static mut TScheduler<'a> {
    let stack = Rc::new(RefCell::new(vec![]));

    let scheduler = Box::new(Rc::new(Self {
      commit: Commit::new(&stack.clone()),
      stack,
    }));

    unsafe {
      Rc::get_mut_unchecked(Box::leak(scheduler.clone())).start();
    }

    Box::leak(scheduler)
  }

  pub fn push_stack(&mut self, query: Query) {
    self.stack.borrow_mut().push(query)
  }

  pub fn pop_stack(&mut self, query: Query) {}

  pub fn start(&'static mut self) {
    // Don't re-create if prev commit unused
    if !self.commit.accessors.is_empty() {
      self.commit = Commit::new(&self.stack);
    };

    Timer::new(
      move || {
        self.commit.fetch();
        self.start();
      },
      INTERVAL,
    );
  }
}
