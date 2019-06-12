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

- Need to implement keys
- accessor->getData should be static as accessor->data
  - `query.data.user === query.data.user` should be true
- Variables
- When we get an array

  - If it's already fetched
    - Keyed
      - Merge
    - Not keyed
      - Delete all entries that start with the array key

* React `graphql()` component wrapper

  - Query batcher should provide an API for creating individual queries - and use the passed name option
  - Updates component when values change
  - Renders all the components, combining into one query
  - Extracts the React component name and uses it as the GraphQL query name

* Rename Middleware to plugins

  - LoggerMiddleware to Logger

* Babel plugin
  - Statically know all the GraphQL data accessed in a JS file
    - Automatically remove all unused fields from the schema
  * Could automatically detect components that use graphql data and wrap in graphql()
  * Adds the displayName to the graphql() fn

- Codegen

  - CLI

- MISC
  - Consider instead of using the GraphQL AST, to instead generate the query by hand. It seems it could be a bottleneck, should investigate though.
