# graphql-builder

Seamlessly access GraphQL data, and the queries will be automatically generated.

```typescript
import { useQuery } from 'graphql-builder'

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
