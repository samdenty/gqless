- Make SelectionIndex->selections a pointer to other selectionIndexes
- Ensure aliases work
- If a selection is an objectNode, only fetch typename if it's the only sub-selection
- GraphQL variables
- When you change the arguments, the value should be reset (currently returns last value)
- Should add lazyGetters to Codegen
- UnresolvedSelection in reactMiddleware should throw a promise that resolves once all unresolvedSelections resolve
- Selection value's should not be related to the actual Query result
  - instead they should be based off a cache
  - see apollo cache
- .then resolver on Scalar / ObjectNode / ArrayNode data
- The component should only re-render, when dependencies change

  - Currently re-renders on each query

- Selection graph persistance:
  use QueryName as the key
  add option to queryOptions to load root from JSON
  types:
  each time a new node is added, serialize tree
  each time a new node is added, serialize the tree and merge with previous tree

```jsx
// Re-fetch followersCount every 1000ms
// Poll gets the selection by checking for the last accessed selection
return <div>{poll(query.data.user.followersCount, 1000)}</div>

// Poll gets the selection by using a weakmap -> proxy
const { user } = query.data
return <div>{poll(user, 1000)}</div>
```
