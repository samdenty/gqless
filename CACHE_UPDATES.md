# Cache updates

```ts
// Update a Scalar, should perform a fast-deep-equal
query.me.name = 'Bob'

// Should un-cache a Value
delete query.me.name

// Updating an ObjectNode, uses pattern matching to find a matching cache entry
// Would first search current Value, then find the first `User` Value that matches
// If none were found, it would initialize a new Value
query.me = { id: 'asd' }

// Update with a Proxy, and it will use the current Value
query.me = query.users[0]
// Use a reference, and it will auto-update when query.users[0] changes
query.me = valueRef(query.users[0])

// If age hasn't been fetched, setting age should make
// sure it doesn't need to be fetched
query.me.age = 100

// Array mutations should be tracked
delete query.users[0]
query.users.push()
query.users.pop()
query.users[0] = query.me
```
