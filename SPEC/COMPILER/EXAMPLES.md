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
  _0.a?.name
}
```
