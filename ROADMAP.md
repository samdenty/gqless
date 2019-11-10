## Static analysis

Currently gqless supports React's `render-then-fetch` pattern. Eventually I want to support the `fetch-as-render` pattern.

This will happen through the *gqless compiler*. It will take your Typescript (or JSDOC annotated) project in, and will:

1. Utilize the Typescript Compiler API to locate wherabouts you access GraphQL data

2. Use this information to output "preload" functions into your bundle. Calling these functions, will pre-fetch the data (without actually rendering)

```ts
MyComponent.preload()
UserComponent.preload({ user: query.me })
```

## Mutations

Mutations will be supported using the same style as queries:

```ts
await mutation.updateName({ userId: 'test' })
```

The fields selected on the mutation will be automatically inferred by default, but you'll also be able to only select a specific fragment:

```ts
mutation.updateName({ userId: 'test' }, MyFragment)
```

## Subscriptions

Subscriptions support will follow the same pattern as mutations
