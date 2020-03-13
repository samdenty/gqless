# Tracking

`preload(myFunc, GRAPHQL_DATA)`

In order to `preload` a function, call information is required.

```ts
preload(
  _0 => {
    _0.a.name
    _0.b.name
  },
  // Value of the call arguments, is used to 'refine' output
  { a: data }
)

// =>
const preloadFunc = _0 => {
  const _0a = _0.a
  if (_0a) {
    _0a.name
  }
}
```

```ts
preload(_0 => {
  _0.a.name
  _0.b.name
}, {})

// =>
const preloadFunc = _0 => {}
```

## Preload arguments

Arguments can be either inline objects, or references:

```js
{ user },
{ user: { followers: [user] }}
```

When inline objects/arrays are used, output will be refined.

When references are used, the entire function's output will be produced.
