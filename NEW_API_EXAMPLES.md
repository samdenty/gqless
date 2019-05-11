## Type options

Would it be cleaner to use classes?

```js

export class UserResolver {
  get fullName() {
    constructor(private user: User) {}

    get fullName() {
      return this.user.data.firstName + this.user.data.lastName
    }
  }
}
export class User {
  public resolver = new UserResolver(this)

  getKey() {
    return this.data.id
  }
}

export * from './User'
```

## Mutations

The reason why apollo optimistic is shit is because you have to manually update a cache entry to perform a mutation. You always have to deal with the ugly side - cache. What about instead of Mutation -> Update cache -> Result -> Update cache, we did update cache -> Mutation.

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
const typeOptions = {
  User: {
    setters(user: DataProxy)  {
      const data = {}

      return {
        set(key: string, user: DataProxy, accessor: Accessor) {
          data[key] = user[key]
        },
        finish() {
          mutation.data.updateUser({ connect: { id: user.id }}, data)
        }
      }
    },

    setters: {
      set: {
        nickname: (user: DataProxy) => mutation.data.updateNickName(user.id, user.nickname),
        username: (user: DataProxy) => mutation.data.updateUsername(user.id, user.nickname),
        age: (user: DataProxy) => mutation.data.updateAge(user.id, user.age)
      },
      set(key: string, user: DataProxy, accessor: Accessor) {
        if (key === 'nickname') {
          mutation.data.updateNickname(user.id, user.nickname)
        }

        if (key === 'username') {
          mutation.data.updateUsername(user.id, user.username)
        }

        if (key === 'age') {
          mutation.data.updateAge(user.id, user.username)
        }
      }
    }

    getKey(user) {
      return user.id
    },
  },
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
```

```js
const typeOptions = {
  User: {
    setters(user: DataProxy)  {
      const data = {}

      return {
        set(key: string, user: DataProxy, accessor: Accessor) {
          data[key] = user[key]
        },
        finish() {
          mutation.data.updateUser({ connect: { id: user.id }}, data)
        }
      }
    },

    setters: {
      set: {
        nickname: (user: DataProxy) => mutation.data.updateNickName(user.id, user.nickname),
        username: (user: DataProxy) => mutation.data.updateUsername(user.id, user.nickname),
        age: (user: DataProxy) => mutation.data.updateAge(user.id, user.age)
      },
      set(key: string, user: DataProxy, accessor: Accessor) {
        if (key === 'nickname') {
          mutation.data.updateNickname(user.id, user.nickname)
        }

        if (key === 'username') {
          mutation.data.updateUsername(user.id, user.username)
        }

        if (key === 'age') {
          mutation.data.updateAge(user.id, user.username)
        }
      }
    }

    getKey(user) {
      return user.id
    },
  },
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

```js

class User extends types.User {
  constructor(private user: types.User, private accessor: Accessor) {}

  get fullName() {
    return this.user.firstName + this.user.lastName
  }
}

const typeOptions = {
  User: {
    extend: {
      // Like mobx.computed
      get fullName() {
        return user.firstName + user.lastName
      },
      setNickname(user: DataProxy, nickname: string)  {
        user.nickname = nickname
        return mutation.data.updateUser({ connect: { id: user.id }}, { nickname })
      },
      setUsername(user: DataProxy, username: string)  {
        user.username = username
        return mutation.data.updateUser({ connect: { id: user.id }}, { nickname })
      },
    },
    getKey(user) {
      return user.id
    },
  },
}

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
