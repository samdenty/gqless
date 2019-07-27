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
