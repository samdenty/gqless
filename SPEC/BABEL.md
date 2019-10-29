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

# Adding debug-names

```js
const limit = useVariable(1)
// =>
const limit = useVariable(1, 'limit')

const nameFragment = useFragment(user)
// =>
const nameFragment = useFragment(user, 'NameFragment')

const User = graphql(() => {})
// =>
const User = graphql(() => {}, { name: 'User' })
```

```js
import { query } from 'generated'

const Component = ({ user }) => {
  return (
    <div>
      Following: {query.me.following.includes(user)}
      <img src={user.avatar({ size: 100 })} />
      {user.name}
    </div>
  )
}

// Babel plugin
Component.graph = {
  [query]: {
    me: {
      following: null,
    },
  },

  props: {
    user: {
      avatar: { size: 100 },
      name: null,
    },
  },
}

const globalGraph = {
  [query]: {
    Query: {
      me: {
        following: {},
      },
    },
    User: { avatar: true },
  },
}
```

- Able to provide a graph for component data
- Generates a global graph of all the fields your app uses
  - uses that to optimize the codegenerated schema, removing unused fields / types

## Static extractor

Extracts selections at compile time instead of runtime

### JS

```ts
const Fragment = staticFragment()
await Fragment(query.me)

query.me.name
```

### React

```ts
export const UserFragment = staticFragment()

function User({ user }) {
  UserFragment.is(user)

  user.name
}

// Somewhere else in app
UserFragment(query.user)
```

### React-specific

```ts
function User2({ user }) {
  user.name
}

// All props are auto-converted into fragments
User2.fragments.user(query.me)
```
