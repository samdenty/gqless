# TODO

- Propagate variable updates through Selection -> Accessor

# Selection.args

- Should be represented as a plain JS object
- Variables state are all on the same selection

# Variables

- How should variable updates be propagated?

  - #1 propagated by react state updates
  - #2 propagated internally

- A variable creates a single selection
  -Change the variables and it update the selections args

- Each variable state is tied to different cache entries
- Variables **can't** be used as arguments
- Once a variable's node has been decided, it can't be changed

  - ArrayNode constructor could be cached depending on nullable + ofNode, as they're guaranteed to be the same

- A variable will default to nullable
  - Once it's been used on a non-nullable node, it'll become non-nullable

```js
/*********** INVALID *************/
query.user(useVariable({ name: 'bob' }))

const variable = useVariable('bob')
query.user({ name: variable, age: variable }) // Different scalar nodes = error


/************ VALID **************/

// Scalar
query.user({ name: useVariable('bob') })

// Input
query.users({ filter: useVariable({ limit: 10 }) })

// Scalar inside input
query.users({ filter: { limit: useVariable(10) })

// Array
query.users({ filters: useVariable([{ limit: 10 }]))

//

// Manually specify whether a variable is not-nullable
query.users({ filter: { limit: useVariable(10, false) })

// Manually specify the type for the variable
query.users({ filter: { limit: useVariable(10, schema.Int, false) })
```
