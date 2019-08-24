# Matchers

## Global matchers

Can be used with all matchable nodes

```ts
// Callback that returns a boolean
match(me.name, name => name === 'Bob')
// => String

// Callback that returns a nested Value
match(query.users, users => users[0].data.name)
// => String
```

## Custom matchers

Some nodes provide additional ways that they can be matched against

### Object

```ts
// Ensure properties match
match(query.me, { name: 'Bob' })
// => User
```

### Scalar

```ts
// Match against a regex
match(me.name, /Bob/)
// => String
```

### Array

```ts
// Find an element in the array
match(query.users, { id: 'bob' })
// => User

// Or make sure all elements match
match(query.users, [{ id: 'bob' }])
// => User[]
```
