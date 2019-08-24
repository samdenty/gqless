# TODO

- Make Object.set default to `match` instead of setData
- Make ArrayNode memoized

# Why do keys do?

To express two different paths, leading to the same cache entry.

They should be fetched with each request, so we always have keys for each Cache Value

# Redirects

A cache redirect is essentially a function which is used to prevent network calls.

It is only called when the accessor doesn't have a value

```ts
query.user({ id: 'bob' }) // fetched
query.me // Would have no way of getting match from previous iteration, so we'd resolve by id

query.me.name // fetched
query.user({ id: 'bob' }) // Redirect would now find correct match
```

# Cache

```ts
var bobUser = { id: 'bob'}

data = {
  me: bobUser,
  'user({id:"bob"})': bobUser
  users: [bobUser]
}
```

- Need to be able to list all instances of a specified Node
  - ie. cache.types.get('Query')

```ts
cache = {
  keys: {
    User: {
      '"bob"': {},
      '{"a":"bob"}': {},
    },
  },
}
```

# Keys

```ts
// Extensions:

export const User = {
  // Uses default key (id field)
}

export const User = {
  [GET_KEY](user) {
    return user.id
  },
}

// Returning an Object
export const User = {
  [GET_KEY](user) {
    // Should call JSON.stringify() / toString etc.
    // It can't use a strict equal, as it wouldn't work for ssr
    return { a: user.id }
  },
}

// Cache redirects:

export const Query = {
  getUser: {
    [REDIRECT](args, valueFinder) {
      if (args.id) return valueFinder.byKey(args.id)
    },
  },
}

export const Query = {
  getUser: {
    [REDIRECT](args, valueFinder) {
      if (args.id) return valueFinder.match({ id: args.id })
    },
  },
}

export const Query = {
  getUser: {
    [REDIRECT](args, valueFinder) {
      return valueFinder.byPath(`Query.users[0]`)
    },
  },
}
```
