- In ASTBuilder, selection names should not need to be globally unique.
  - Instead they should only be unique per query
    - This will require some changes in the `GraphQL` cache fulfillment logic

* Add tests
* Need to implement keys
* Create something similiar to @apollo/link

- Support for interfaces + unions

  - In a react component, you will check for the `typename` property.

  ```js
  // Babel plugin compiles this
  if (person.__typename === 'Man') {
  }
  // to
  if (isOfType(person, 'Man')) {
  }

  // Component will be rendered X amount of isOfType calls
  ```

* Rename `GraphQL` to gqless (conflicts with react plugin)

- Extensions

  - No default key
    - Default key logic, should instead be moved to codegen. More explicit and no magic happening

* When we get an array

  - If it's already fetched
    - Keyed
      - Merge
    - Not keyed
      - Delete all entries that start with the array key

* Make FieldAccessor#data static, instead of a getter

# Config file

Could create a config file, like apollo client. Or use https://github.com/prisma/graphql-config

# Babel plugin

- Add default query name to `graphql()` wrapper
- Add variable definition name to `useVariable` hook

## Macro

Macro could be typed inside the codegen, preventing '../../..' etc.

```ts
import { graphql, query, User, useVariable } from 'gqless/macro'

export const component = graphql(() => {})
```

# Future

- Consider instead of using the GraphQL AST, to instead generate the query by hand.

  - Reduce bundle size (should investigate gain)
  - Could be a performance improvement (should investigate)
  - Simplify ASTBuilder logic
  - Remove GraphQL dependency

- Babel: Static graph of all the GraphQL data accessed in a JS file
  - Automatically remove all unused fields from the schema, resulting in a smaller bundle size
  - Automatically detect components that use graphql data and wrap in `graphql()`
