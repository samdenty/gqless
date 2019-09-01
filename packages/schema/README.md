# @gqless/schema

Creates a `gqless` schema from a GraphQL endpoint.

- [**Codegen (typesafe)**](#Codegen) - outputs an array containing JS sourcecode, used by the CLI
- [**Runtime (not-typesafe)**](#Runtime) - creates a schema in the browser/node without codegen

## Usage

### Codegen

```js
import { Codegen, fetchSchema } from '@gqless/schema'

const schemaDefs = await fetchSchema(fetchQuery)
const codegen = new Codegen(schemaDefs, { typescript: true })

const files = codegen.generate()
// => { path: string, contents: string }[]
```

### Runtime

```ts
import { schemaNodes, fetchSchema } from '@gqless/schema'

const schemaDefs = await fetchSchema(fetchQuery)
const schema = schemaNodes(schemaDefs)

// Usage in runtime:
const graphql = new Client(schema)
```
