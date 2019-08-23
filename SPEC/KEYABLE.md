# TODO

- Make ArrayNode memoized
- Make ObjectNode matchable

# Why do keys do?

To express two different paths, leading to the same cache entry.

They should be fetched with each request, so we always have keys for each Cache Value

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

interface ValueFinder {
  new(cache, node: Node) {}

  byKey() {}
  // !(node instanceof Matchable) throw
  match() {}
  byPath() {}
}

// ValueFinder.match is used when you do:
// If match not found, it updates the cache
query.me = { name: 'asd' }

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
