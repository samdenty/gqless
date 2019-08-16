## Mutations

### TODO

- Add toJSON to ObjectNode (could be used for Mutations, eg. `mutation.deleteUser({ user: query.me })`)

The reason why apollo optimistic is shitty is because you have to manually update a cache entry to perform a mutation. You always have to deal with the ugly side - cache. What about instead of Mutation -> Update cache -> Result -> Update cache, we did update cache -> Mutation.

That way instead of optimism being a second-thought, it's first nature.

You'd always have the ability to fallback to a manual mutation, but with this - it could greatly reduce code duplication.

Aside from the cache advantages, it'd fit into the JS world. Libraries that mutate objects would work out the box.

Disadvantages:

- Not clear
  - It'd be harder to refactor and re-use
    - Action-based is clearer and more debuggable
  - It could result in unintended mutations
  - The above could be alleviated by requiring that mutations could only occur inside a `mutation()` call, and the rest would just update the cache. But this could actually be awesome
    - If you want to perform UI changes, that eventually turn into mutations this would be a great use
      - You'd be able to mockup an interactive UI before you need to implement actions to go along with it

### Using setters

```js
export const User = user => ({
  // If only a setter is provided, then it will be called when nickname is set.
  // If you do `query.me = { id: 'bob' }` and `set me(user)`
  // user will be a dataProxy.
  set nickname(newValue) {
    mutation.data.updateNickname(user.id, newValue)
  },
  set username(newValue) {
    mutation.data.updateUsername(user.id, newValue)
  },
  set age(newValue) {
    mutation.data.updateAge(user.id, newValue)
  },
})

export const User = user => {
  // CommitStorage accepts an optional default value, which #data is set to on each new commit cycle
  // When you do `.nickname = 'bob'`, it's added to the data
  // Once the current commit is about to be completed, onBeforeCommit is called
  // and create a new mutation, adding to the current commit, then it's fetched
  //
  // Scheduler API should be exposed possibly in Recorder
  const storage = new CommitStorage({})

  storage.onBeforeCommit(() => {
    mutation.data.updateUser(storage.data)
  })

  return {
    set nickname(newValue) {
      storage.data.nickname = newValue
    },
    set username(newValue) {
      storage.data.username = newValue
    },
    set age(newValue) {
      storage.data.age = newValue
    },
  }
}

const FeedData = ({ match }) => {
  const todo = useState({})
  const todos = query.data.me.todos

  return (
    <button
      onClick={() => {
        todos.push(todo)
      }}
    />
  )
}

const FeedData = ({ match }) => {
  const me = query.data.user.me

  return (
    <button
      onClick={() => {
        // Could return a promise on the variable setter, but it's against the ES spec.
        // But it'll work with typescript, plus we could return Promise<boolean>.
        // Once the mutation is performed, we could read the new value and check against the set value and return true / false
        await (me.nickname = Math.random())

        // Or could use mutation to batch into one mutation
        await mutation(() => {
          me.nickname = Math.random()
          me.username = Math.random()

          // yes!
          me.age++
        })
      }}
    />
  )
}
```

## Extensions

Extensions are additions to a Node's proxy.

They are pluggable, composable and statically typed.
Similiar to GraphQL resolvers that you use in Apollo, they let you extend your schema.

But they're just javascript objects

---

Could expose the proxy get / set, but I want to eventually move away from proxies. With the data field, means we dont need to expose them.

- Default extensions such as Keyable, should be statically defined in the schema, instead of in runtime.
- If an ArrayNode contains Keyable, could expose `getByKey()`
- Export a `composeExtensions` function, that respect combining proxies and overloads getKey

```ts
type User = {
  id: string
  name: string
  father?: User

  email?: string
}

type Query = {
  me?: User
  users: User[]
}

export const User = {
  [GET_KEY]: (data: User) => data.id,
}

export const Query: Extension<Query> = {
  isQuery: true,
  me: {
    father: {
      hasChild: true,
    },
  },
  users: data => ({
    asd: data.length,
    [GET_KEY](data) {
      return data.id
    },
    [INDEX]: {
      name: 'asd',
    },
  }),
  [GET_KEY]() {
    return 1
  },
}
```

```ts
type Extension = {
  [newData: string]: any
  [existingField: string]: Extension

  [ofNode]: Extension
  [getKey]: Function
}
const AddTest = {
  test: true
}

const indexedArray = (fieldKey?: Function) => ({
  get() {},
})

export const Query = {
  ...AddTest,

  QueryType: true,
  users: {
    ...indexedArray<types.User>(data => data.id),
    path: 'Query.users',

    [ofNode]: accessor => ({
      path: 'Query.users[index]',
    }),

    [getKey]: accessor => {
      // Key query.users by index, instead of `User.id`
      return accessor.index
    }
  },
}

export const User = ((user) => ({
  get fullName() {
    return user.firstName + user.lastName
  },
  setNickname() {},

  [getKey]: {
    return data.id
  }
})

const FeedData = ({ match }) => {
  const me = query.data.user.me

  return (
    <button
      onClick={() => {
        me.setUsername(Math.random())

        await mutation(() => {
          me.setNickname(Math.random())
          me.setUsername(Math.random())

          me.setAge(age + 1)
        })
      }}
    />
  )
}
```

## Subscriptions

```js
const FeedData = ({ match }) => {
  const me = query.data.user.me
  const messages = query.data.messages({ limit: 100 })

  subscribe(me.followersCount, subscription => {
    return subscription.user({ id: me.id }).followersCount
  })

  subscribe(messages, subscription => {
    return subscription.message({ guild: 'asdsadsda' }).message
  })

  messages.subscribe(subscription => {
    const { message, guild } = subscription.message({ guild: 'asdsadsda' })
    return message
  })

  useSubscription(data => {
    const { message, guild } = data.message({ guild: 'asdsadsda' })
    messages.push(message)
  })

  useSubscription(
    data => {
      const { message, guild } = data.message({ guild: 'asdsadsda' })
      withSelections(message, messages)
      return message
    },
    message => {
      messages.push(message)
    }
  )
}

const FeedData2 = ({ match }) => {
  const type = useVariable(match.params.type.toUpperCase() || 'TOP')
  const feed = query.data.feed({ type, offset: 0, limit: 100 })

  return (
    <div>
      <button
        onClick={async () => {
          await feed.fetchMore({ offset: feed.length }, (prev, result) => {
            return [...prev, ...result]
          })

          const newFeed = await withSelections(
            query.data.feed({ type, offset: feed.length }),
            feed
          )

          feed.push(...newFeed)
        }}
      />
      {feed.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  )
}
```

## Polling / cache

```js
const FeedData2 = ({ match }) => {
  const me = query.data.me

  return <div>{poll(me.followersCount, 1000)}</div>
}

const FeedData2 = ({ match }) => {
  const me = query.data.me

  return (
    <button
      onClick={async () => {
        const me = await selectAll(me)

        // All fields have been fetched
      }}
    >
      test
    </button>
  )
}

const FeedData2 = ({ match }) => {
  const me = from('cache-and-network', query.data.me)
  const me = from('network', query.data.me)
  const me = from('cache', query.data.me) // default

  return <div>{me.name}</div>
}

const FeedData2 = ({ match }) => {
  const me = query.data.me

  const deferredFollowing = defer(me.following)

  return (
    <div>
      {me.name}
      {deferredFollowing
        ? deferredFollowing.map(f => <div>{f.name}</div>)
        : 'loading users'}
    </div>
  )
}

const FeedData2 = ({ match }) => {
  const me = query.data.me

  return (
    <button
      onClick={async () => {
        const me = await selectFragment(
          me,
          `
            fragment MeFragment on User {
              name
              login
            }
          `
        )
      }}
    >
      test
    </button>
  )
}
```
