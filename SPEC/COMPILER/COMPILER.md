# gqless compiler

## What is does

It takes your sourcecode, and generates a Graph from it.#

## Options

Due to the single-file nature of babel, cross-file data references will be tricky to implement.

### Static analysis IR

Outputs `[file].data.json` files from your sourcecode. These files will be read by the babel-plugin, to transform the code.

Limitations:

- Requires a separate "extraction" step & files.

See [data/index.data.json](./data/index.data.json)

### Single-file static analysis

Works as a babel-plugin.

Has a static graph of your app.

Limitations:

- All graphql-data references should be local to the file, as imports can't be resolved.

```ts
const useFullName = user => user.firstName + user.lastName

const User = graphql(({ user }) => {
  const fullName = useFullName(user)
  return <div>{fullName}</div>
})

// =>
const App = graphql(({ user }) => {
  const fullName = useFullName(user)
  return <div>{fullName}</div>
})

App[Symbol.preload] = props => {
  props.user.firstName
  props.user.lastName
}
```

### "Dynamic" analysis

Works as a babel-plugin.
Doesn't actually have a static graph of your app. Relies upon the runtime to generate it.

Require all functions to have a `Symbol.preload` method on them:

Limitations:

- Dead-code removal would be infeasible

```tsx
const useFullName = user => user.firstName + user.lastName

const User = graphql(({ user }) => {
  const fullName = useFullName(user)
  return <div>{fullName}</div>
})

// =>

const useFullName = user => {
  user.firstName
  user.lastName
}
useFullName[Symbol.preload] = user => {
  user.firstName
  user.lastName
}

const App = graphql(({ user }) => {
  const fullName = useFullName(user)>
  return <div>{fullName}</div>
})

App[Symbol.preload] = props => {
  useFullName[Symbol.preload]?.(props.user)
}
```

## Method

Find all import references to `query` from `./graphql`.

Iterate over references

- If referenced inside a function

## Preloaders

In order for dead code elimination and lazy-loading to work, a file named `preloaders.js` will be created in the client directory.

It will take `preload(Component, {})` and convert it into `preloadComponent` (inserting an import from preloaders.js).

**preloaders.js:**

```js
export function preloadUserComponent() {}
export function preloadAppComponent() {
  preloadUserComponent({})
}
```
