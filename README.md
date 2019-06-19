# graphqless

Auto-generates GraphQL queries based on the data your application consumes.

```tsx
const User = graphql(({ user }) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <img src={user.avatarUrl({ size: 100 })} />
    </div>
  )
})

const App = graphql(() => {
  return (
    <div>
      {query.users.map(user => (
        <User key={user.id} user={user} />
      ))}
    </div>
  )
})
```

```graphql
query App {
  users {
    id
    name
    avatarUrl(size: 100)
  }
}
```
