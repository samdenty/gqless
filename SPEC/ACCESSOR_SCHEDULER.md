# Accessor scheduler

Commit contains a set of accessors.

Commit Accessors may point to same selections:

```ts
query.users[0]
query.users[0].name
query.users[1].name
query.users[2].name
```

event(accessor.status).emit(1, 2)
event(accessor.status).then(() => {

})
`Accessor#status` and `Accessor#onStatusChange`

## Status

```ts
// query.status = idle

query.users.status = loading
// query.status = loading

query.me.status = refetch
// query.status kept as loading

// FETCHED users

query.users.status = idle
// query.status = refetch

query.me.status = idle
// query.status = idle

query.me.status = loading
// query.status = refetch, because it's already been fetched
```
