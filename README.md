# graphql-builder

Seamlessly access GraphQL data, and the queries will be automatically generated.

## React

```typescript
export const GithubUser = () => {
  const { data } = useQuery()
  const user = data.user({ login: 'torvalds' })

  return (
    <div>
      <h1>
        {user.login} ({user.followers.totalCount} followers)
      </h1>
      <p>{user.bio}</p>

      <h2>Following:</h2>
      {user.following.nodes.map(user => (
        <a href={user.url} key={user.id}>
          {user.login}
        </a>
      ))}
    </div>
  )
}
```

### optimistic(component)

Greatly reduces the amount of queries made

All scalar values will return `null` before loaded, the component will then suspend at the end of the return statement (instead of when scalar methods ie. toString are called)

```jsx
// Without optimistic, two seperate queries will be made
// one for name, then age.
const Component = () => {
  return <div>{`${query.data.me.name} ${query.data.me.age}`}</div>
  // First render:                 ^ suspends when `toString` is called
}

// With optimistic, one query will be made
const Component = optimistic(() => {
  return <div>{`${query.data.me.name} ${query.data.me.age}`}</div>
  // First render: `null null`, suspends after the return statement
})
```

### <Defer />

The <Defer /> component is the same as React.Suspense, but it defers the queries for a component. For example:

```jsx
// A single query will be requested with the `name` and `description` fields
<div>
  {query.data.me.name}
  <Description user={query.data.me} />
</div>

// The `description` field will be requested after the `name` field has been fetched
<div>
  {query.data.me.name}
  <Defer fallback="Loading description">
    <Description user={query.data.me} />
  </Defer>
</div>
```

# Features

- Uses react suspense
- 100% type-safe using TypeScript

## Similiar projects

- https://github.com/sw-yx/babel-blade

## Rules

If a field on a type is nullable and optionally accepts arguments, you should always call it as a function regardless of if you need to pass arguments.
