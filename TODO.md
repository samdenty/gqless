- Make SelectionIndex->selections a pointer to other selectionIndexes
- Ensure aliases work
- GraphQL variables
- When you change the arguments, the value should be reset (currently returns last value)
- Should add lazyGetters to Codegen

- The component should only re-render, when dependencies change

  - Currently re-renders on each query

- Selection graph persistance:
  use QueryName as the key
  add option to queryOptions to load root from JSON
  types:
  each time a new node is added, serialize tree
  each time a new node is added, serialize the tree and merge with previous tree
