- Tests:

  - Setup with lerna workspace
  - React x amount of renders
  - Test accessor extensions
  - Extensions x amount of calls per update

- ScalarNode consider returning undefined instead of null

  - Make more sense
  - Need to find fix for react throwing error for key
    - Check if it's a valid error, and possibly need to provide key
      - if it ain't consider just overriding console

- In ASTBuilder, selection names should not need to be globally unique.

  - Instead they should only be unique per query
    - This will require some changes in the cache fulfillment logic

- Support for updating cache

- `getAccessor` primitive
  - Usage:
    - `skipCache()`
    - `update()` - Updates an accessor's value, merging in values.
    - `patternMatch()` - Updates an accessor's value, by finding & referencing another `Value`
      - `patternMatch(query.me.name, 'uniqueStringAvailableElsewhereInSchema')`
      - `patternMatch(query.me, { username: 'bob' })`
      - `patternMatch(query.me, query.users[0])`

* Need to implement keys
* Add tests
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

  // Component will be rendered O(isOfType^2) times
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

- Could support passing arguments to function by order, instead of an object

  - ie. `query.user('bob')`, `mutation.createUser('John', 'Doe')` instead of `{ name: 'bob' }`, `{ firstName: 'John', lastName: 'Doe' }`
  - Based on the order of the GraphQL schema
    - Would be very brittle + hard to debug if schema changed

- Consider instead of using the GraphQL AST, to instead generate the query manually (with built-in formatter / minifier).

  - Reduce bundle size (should investigate gain)

    - We don't need Fragments, Schema-related stuff etc., which is bundled with `graphql/print`

  - Could be a performance improvement (should investigate)
  - Simplify ASTBuilder logic
  - Remove GraphQL dependency

- Babel: Static graph of all the GraphQL data accessed in a JS file
  - Automatically remove all unused fields from the schema, resulting in a smaller bundle size
  - Automatically detect components that use graphql data and wrap in `graphql()`
