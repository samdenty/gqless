# Fragments

A fragment is an isolated set of selections. It's a type of RootSelection, and can be used in multiple places within a query.

```ts
RootSelection > Fragment, Selection
```

It can be used in place of any FieldSelection

## useFragment

By using `useFragment`, you can share selections across instances of a component. Saving memory + optimizing queries

For example:

```ts
const User = ({ user }) => {
  const userFragment = useFragment(user)
  if (user.something) return null

  return userFragment.name
}
```

Each time a component renders the User component, it will attach the `User` fragment.

Lets say 50% of components `something` is true. Once all fetched, if you add another ->

`name` will be automatically selected even if something is false

## Generated queries

```graphql
# Consider for example:
fragment UserName on User {
  name
}

query App {
  me {
    # If the fragment is used once on the query, it'll be inlined (only if inlinedFragments is enabled)
    name
  }

  users {
    # Multiple occurences of fragment within query will be extracted
    ...UserName
  }

  something {
    # If on an interface, it'll do a ...
    ... on User {
      name
    }
  }

  # If multiple times, on an interface it'll extract
  something {
    ...UserName
  }
}
```

## FragmentAccessor

A fragment will be treated as a child of an existing accessor. It'll be the exact same as the parent, except it will be on a Fragment instead.
