# MVP

- Handle errors returned from server

  - Errors can make non-nullable fields return null

- Make `gqless` bin alias to `@gqless/cli`, so only need to install 1 set of deps
- Make codegen default to typescript, add --js option
- Make variable updates re-fetch & update component
- Default key logic should instead be moved to codegen. More explicit and no magic happening

- When we get an array

  - If it's already fetched
    - Keyed
      - Merge
    - Not keyed
      - Delete all entries that start with the array key

# Improvements

- Warn when \_\_typename is accessed for React, without an ofType call
- Make toTree output deterministicly
- Prevent duplication in buildSelections
- Make Object.set default to `match` instead of setData

- Prevent Poller from creating extra queries, either:

  - Poller "tick"
    - Guarantees stuff is fetched every x ms, but the syncing between polls is computed internally
  - Custom scheduler commit fetching priorities
    - "important" (every 20ms) for new data
    - "non-important"

- Custom formatters

  - Format ObjectNode / ScalarNode etc. to GraphQL schema `type User` etc.

- FieldNode with arguments, ensure can be called twice
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

## Config file

Could create a config file, like apollo client. Or use https://github.com/prisma/graphql-config
