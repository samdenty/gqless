# @gqless/logger

![Screenshot of devtools console](https://i.imgur.com/XLp10bv.png)

Logs GraphQL queries to the console, with helpful debug information

- **Cache snapshot** - current state of the cache after a query has been fetched.
- **Result** - inspect the response from the GraphQL server
- **Selections** - the selections that were used inside the query

## Usage

```ts
import { Logger } from '@gqless/logger'

new Logger(client)

// To enable verbose mode: new Logger(client, true)
```

## Verbose mode

![Devtools screenshot](https://i.imgur.com/JUF3tnn.png)

Shows additional information, useful for debugging.

- **Stack for each query** - lets you see why queries were merged into one, or seperated
