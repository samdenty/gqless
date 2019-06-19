# graphqless

Auto-generates GraphQL queries based on the data your application consumes.

<!-- prettier-ignore -->
**Your application:**

```tsx
import { query, User } from './generated'

const User = ({ user }: { user: User }) => (
  <div>
    <h2>{user.name}</h2>
    <img src={user.avatarUrl({ size: 100 })} />
  </div>
)

const App = graphql(() => (
  <div>
    {query.users.map(user => (
      <User key={user.id} user={user} />
    ))}
  </div>
))
```

**Resulting query:**

```graphql
query App {
  users {
    id
    name
    avatarUrl(size: 100)
  }
}
```

## Features

- **No need to write queries** - auto-generated at runtime
- [**TypeScript safe**](#Typescript) - without code generation
- [**Inbuilt cache**](#Cache) - can be used without apollo-client
- [**Type extensions**](#Type-extensions) - add custom properties and functions to types (similiar to [apollo-link-state](https://www.apollographql.com/docs/link/links/state/))

## Type extensions

```js
// src/extensions/index.ts
export const User = user => ({
  sendMessage(message: string) {
    console.log({ name: user.name, message })
  },
})

// Now access the added properties on all the User types
query.users[0].sendMessage('test')
// => { name: 'bob', message: 'test' }
```

## Typescript

Simply one-time generate using the CLI, and you'll automatically get type-safety

```ts
// Error: Type 'string' is not assignable to type 'number'
query.users({ limit: 'asd' })

// Property 'something' does not exist on type ...
query.something
```

## Cache
