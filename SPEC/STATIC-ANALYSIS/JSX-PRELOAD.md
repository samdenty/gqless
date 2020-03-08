# Preloading JSX

By default we will support:

```ts
preload(UserComponent, props)
```

But we could also support JSX:

```ts
preload(<UserComponent {...props} />)
```

We could allow basic Context Providing, but this would be tricky to implement properly:

```tsx
preload(
  <MyContext.Provider value={x}>
    <UserComponent {...props} />
  </MyContext.Provider>
)
```
