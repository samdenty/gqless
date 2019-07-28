# gqless (work in progress)

Auto-generates GraphQL queries based on the data your application consumes.

## Features

- **No need to write queries** - auto-generated at runtime
- [**TypeScript safe**](#Typescript) - without running code-generation on each change
- [**Inbuilt cache**](#Cache) - can be used without apollo-client
- [**Type extensions**](#Type-extensions) - add custom properties and functions to types (similiar to [apollo-link-state](https://www.apollographql.com/docs/link/links/state/))
- [**React integration**](#React) - uses suspense out the box, and updates components when data changes

## Example

<!-- prettier-ignore -->
**Your application:**

```tsx
import { query, User } from './generated'

const User = graphql(({ user }: { user: User }) => (
  <div>
    <h2>{user.name}</h2>
    <img src={user.avatarUrl({ size: 100 })} />
  </div>
))

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

## React

### Individual queries

By default, all the fields are merged into one query. With `Query` component, you can seperate them

```tsx
const Description = graphql(({ user }) => <p>{user.description}</p>)

const App = graphql(() => (
  <div>
    <h1>{query.me.name}</h1>
    <Query>
      <Description user={query.me} />
    </Query>
  </div>
))
```

<!-- prettier-ignore -->
```graphql
query App { me { name } }
query Description { me { description } }
```

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

Apollo encourages you to manually update the cache, which leads to loads of boilerplate.

gqless's cache is inspired by [`mobx`](https://github.com/mobxjs/mobx). You use normal JS methods/assignments, and the cache is auto-updated.

```ts
// Increment my age
query.me.age += 1

// Use pattern-matching to find an existing node
query.me.following.push({ username: 'bob' })

// Or you can pass the node
query.me.following.push(query.users[0])
```

Combined with [Type extensions](#Type-extensions), you can automatically dispatch mutations when the cache is updated

```ts
// src/extensions/index
export const User = user => ({
  set age(age: number) {
    mutation.updateAge({ id: user.id, age })
  },
})
```

---

## Credits

- Inspired by [babel-blade](https://github.com/sw-yx/babel-blade), but with the idea of being entirely runtime-based
