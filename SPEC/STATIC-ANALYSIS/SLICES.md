# Slices

Slices are variables that are inferred to at some point contain reactive objects.

They can be attached to a Function, File

They can be inferred from common patterns:

```ts
function Test() {
  const [user, setUser] = useState('')
  setUser(query.me) // user is detected to be a slice

  /*
  Slices = {
    user
  }
  */
}
```

They can be declared manually:

```ts
function Test() {
  const user = x()
  declareSlice(user, 'sliceName')

  /*
  Slices = {
    sliceName
  }
  */
}
```

They can have default values:

```ts
function A(arg) {
  const [user, setUser] = useState(query.me)
  const x = {}
  declareSlice(x, arg)
}
/*
Slices = {
  user ( values = [query.me] )
  x ( values = [arg] )
}
*/
```

# Slice preloading

Slices with default values should be automatically preloaded.

For slices that we can't statically determine the value of,
we support the user to provide their values using `preload.with({ [sliceName]: value })`

```ts
preload.with({ user: query.me })(App, ...args)
```

# Example

```tsx
function UserSearch({}) {
  const [user, setUser] = useState(null)

  return (
    <div>
      {user.name}

      <input
        onSubmit={value => {
          setUser(query.user({ value }))

          dynamic_track(user)
        }}
      />
    </div>
  )
}

// Creates a new pre-loader:
function UserSearch__user(user) {
  if (user) {
    user.name
  }
}

function UserSearch({}) {
  const [user, setUser] = useState(null)

  UserSearch__user(user)
  // ...
}
```
