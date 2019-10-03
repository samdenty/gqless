import { File, CORE } from '../File'
import { Codegen } from '../Codegen'

export class ClientFile extends File {
  constructor(private codegen: Codegen) {
    super('client', false)
  }

  public generate() {
    this.import(CORE, 'Client', 'QueryFetcher')
    this.import('./generated', 'schema', this.codegen.schema.queryType)

    return `
      ${super.generate()}

      const endpoint = ${JSON.stringify(this.codegen.options.url || '')}

      const fetchQuery: QueryFetcher = async (query, variables) => {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query,
            variables,
          }),
          mode: 'cors',
        })

        if (!response.ok) {
          throw new Error(\`Network error, received status code $\{response.status}\`)
        }

        const json = await response.json()

        return json
      }

      export const client = new Client<${
        this.codegen.schema.queryType
      }>(schema.${this.codegen.schema.queryType}, fetchQuery)

      export const query = client.query
    `
  }
}
