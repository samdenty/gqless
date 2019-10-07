# MVP

- Warn when \_\_typename is accessed for React, without an ofType call
- Make `gqless` bin alias to `@gqless/cli`, so only need to install 1 set of deps
- Make codegen default to typescript, add --js option
- Need to implement keys

* Extensions

  - No default key
    - Default key logic, should instead be moved to codegen. More explicit and no magic happening

- When we get an array

  - If it's already fetched
    - Keyed
      - Merge
    - Not keyed
      - Delete all entries that start with the array key

- Make FieldAccessor#data static, instead of a getter

# Improvements

- Custom formatters

  - Format ObjectNode / ScalarNode etc. to GraphQL schema `type User` etc.

- Tests:

  - Setup with lerna workspace
  - React x amount of renders
  - Extensions x amount of calls per update

- FieldNode with arguments, ensure can be called twice
- Codegen, auto add ts-ignore to all errors in schema.ts
- ScalarNode consider returning undefined instead of null

  - Make more sense
  - Need to find fix for react throwing error for key
    - Check if it's a valid error, and possibly need to provide key
      - if it ain't consider just overriding console

- In ASTBuilder, selection names should not need to be globally unique.

  - Instead they should only be unique per query
    - This will require some changes in the cache fulfillment logic

- `getAccessor` helpers:

  - `autorun`
  - `skipCache()`

- Create something similiar to @apollo/link

# Roadmap

## Optimizations

- Tree could remove duplicated fields from inline fragments

## Config file

Could create a config file, like apollo client. Or use https://github.com/prisma/graphql-config

## Babel plugin

- Add default query name to `graphql()` wrapper
- Add variable definition name to `useVariable` hook

### Macro

Macro could be typed inside the codegen, preventing '../../..' etc.

```ts
import { graphql, query, User, useVariable } from 'gqless/macro'

export const component = graphql(() => {})
```

- Could support passing arguments to function by order, instead of an object

  - ie. `query.user('bob')`, `mutation.createUser('John', 'Doe')` instead of `{ name: 'bob' }`, `{ firstName: 'John', lastName: 'Doe' }`
  - Based on the order of the GraphQL schema
    - Would be very brittle + hard to debug if schema changed
