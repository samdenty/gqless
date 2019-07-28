# SchemaFile

- Fix types : get() { ObjectNode } => get(): ObjectNode<>

# Scalar extensions

```js
export const Date = value => new Date(value)
```

- Support for interfaces + unions

  - In a react component, you will check for the `typename` property.

  ```js
  // Babel plugin compiles this
  if (person.__typename === 'Man') {
  }
  // to
  if (isOfType(person, 'Man')) {
  }

  // Component will be rendered X amount of isOfType calls
  ```

- Extensions

  - No default key
    - Default key logic, should instead be moved to codegen. More explicit and no magic happening

- !!Need to implement keys
  - Extensions

* If a fieldNode is a pointer to a ScalarNode, don't create the argumentlessData

  - Scalarnodes always need to be called, so argumentlessData is never used

* accessor->getData should be static as accessor->data

  - `query.data.user === query.data.user` should be true
  - getData calls should be cached
    - WeakMap Accessor, Value => proxy

* Variables
* When we get an array

  - If it's already fetched
    - Keyed
      - Merge
    - Not keyed
      - Delete all entries that start with the array key

- Rename Middleware to plugins

  - LoggerMiddleware to Logger

- Babel plugin
  - Statically know all the GraphQL data accessed in a JS file
    - Automatically remove all unused fields from the schema
  * Could automatically detect components that use graphql data and wrap in graphql()
  * Adds the displayName to the graphql() fn

* Codegen

  - CLI

* MISC
  - Consider instead of using the GraphQL AST, to instead generate the query by hand. It seems it could be a bottleneck, should investigate though.
