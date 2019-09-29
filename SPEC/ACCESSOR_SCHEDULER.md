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

## Should it be based on network or accessors

### Network

```ts
refetch(query.me.name)
// query -> updating
// query.me -> updating
// query.me.name -> updating
```

### Accessors

```ts
refetch(query.me.name)
// query.me.name -> updating
```

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
