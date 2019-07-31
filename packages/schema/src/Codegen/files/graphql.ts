import { File, CORE } from '../File'
import { Codegen } from '../Codegen'

export class GraphQLFile extends File {
  constructor(private codegen: Codegen) {
    super('graphql', false)
  }

  public generate() {
    this.import(CORE, 'GraphQL', 'QueryFetcher')
    this.import('./generated', 'schema', this.codegen.schema.queryType)
    this.import('graphql/language/printer', 'print')

    return `
      ${super.generate()}

      const endpoint = ${JSON.stringify(this.codegen.options.url || '')}

      const fetchQuery: QueryFetcher = async query => {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: print(query),
          }),
          mode: 'cors',
        })

        if (!response.ok) {
          throw new Error(\`Network error, received status code $\{response.status}\`)
        }

        const json = await response.json()

        return json
      }

      export const graphql = new GraphQL<${
        this.codegen.schema.queryType
      }>(schema.${this.codegen.schema.queryType}, fetchQuery)

      export const query = graphql.query
    `
  }
}
