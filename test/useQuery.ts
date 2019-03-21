import { print } from 'graphql'
import { IMockedSchema } from '.'
import { useQuery } from '../src/React'
import { IQueryOptions, Schema } from '../src'
import { executeQuery } from './graphql-faker'
import { schema } from './query'

export const useTestQuery = (options: Partial<IQueryOptions> = {}) => {
  const query = useQuery<IMockedSchema>({
    schema,
    ...options,
  })

  return query
}

let unresolvedNodes = []

export const testQuery = <T, T2>(
  component: (props: T, query: ReturnType<typeof useTestQuery>) => T2,
  complete: (queries: string[]) => void
) => {
  let queries: string[] = []

  return (props: T): T2 => {
    const query = useTestQuery({
      fetchQuery(query) {
        queries.push(print(query))

        return executeQuery(query)
      },
      middleware: m => [
        ...m,
        {
          onUnresolvedNode(node) {
            unresolvedNodes.push(node)
          },
        },
      ],
    })

    if (!query) return null

    unresolvedNodes = []
    const value = component(props, query)

    if (unresolvedNodes.length === 0) {
      setTimeout(() => {
        complete(queries)

        query.dispose()
      }, 0)
    }

    return value
  }
}
