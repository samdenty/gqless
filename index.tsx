import ApolloClient from 'apollo-boost'
import { Query, introspectionQuery, introspectionToSchema } from './src'
import { QueryNode, QueryRoot, QueryField } from './src/QueryNode'
import { isPrimitiveSomething, isPrimitiveType, isIndexType } from './src/utils'
import { print, parse } from 'graphql'

class IncompleteQuery {
  constructor(public node: QueryNode) {}
}

type user = { name: string; age: number; b: string; c: string; d: string }

const querier = <Component extends Function>(
  component: Component
): Component => {
  return ((...args) => {
    const retry = () => component(...args)

    try {
      var result = component(...args)
    } catch (exception) {
      if (exception instanceof IncompleteQuery) {
        const { node }: IncompleteQuery = exception

        // retry()

        console.log('waiting for', node)
        return null
      } else {
        throw exception
      }
    }

    return result
  }) as any
}

const client = new ApolloClient({
  uri: 'http://localhost:9002/graphql',
})
async function bootstrap() {
  const r = await client.query<any>({
    query: introspectionQuery,
  })

  const introspection = r.data.__schema

  const schema = introspectionToSchema(introspection)

  const query = new Query<{
    user: user
    users: user[]
    a: { b: { c: 1; d: number } }
    number: 1
  }>({
    schema,
    queryName: 'TEST',
    // synchronous: false,
    async fetchQuery(query) {
      const resp = await client.query({
        query,
      })

      return { data: resp.data, errors: resp.errors }
    },
    // This function ensures that if you try and access a value which has already been fetched,
    // you get a primitive value.
    proxyHandler(node, path, { calledAsFunction }) {
      const { value, unresolvedNode } = node.resolve()

      // TODO: If we can get the schema here, we can optimise this
      // function from a blacklist to whitelist
      const isPrimitive = node.kind === 'SCALAR' || isPrimitiveSomething(path)
      const isValue = isPrimitive || isIndexType(path)

      const possibleToReturnValue = calledAsFunction === node.beenUsedAsFunc

      console.log({ path, possibleToReturnValue })
      if (isValue) {
        if (unresolvedNode) throw new IncompleteQuery(unresolvedNode)
      }

      if (possibleToReturnValue) {
        let data = value && value[path]

        if (typeof data === 'string' || typeof data === 'number') {
          return data
        }
      }

      if (isPrimitive) {
        return () => (typeof value === 'object' ? String(value) : value)
      }
    },
  })

  const Component = querier(() => {
    query.data.user.age
    query.data.user.b
    query.data.user.name

    // query.data.a.b(null, { alias: 'test' }).c

    // const users = query.data.users({ where: { following: ['example'] } })

    // // users could be an array, or it could be null.
    // // We could either pretend it's already resolved and give it a length of one,
    // // which would allow us to get subfield types or fetch the users array

    // // const age = users[0].age
    // // console.log(1, 'age ->', typeof age, age, `${age}`, +age)

    // users.forEach(user => {
    //   console.log('users forEach ->', user) // This should be a proxy
    // })

    // users.map
    // users.forEach
    // users.reduce

    // return (
    //   <div>
    //     {users.map(user => (
    //       <div key={Math.random()}>
    //         {user.name}
    //         {user.age}
    //       </div>
    //     ))}
    //   </div>
    // )
  })

  Component()
  // query.batcher.stageNode(query.root.fields[0])
  ;(window as any).query = query
}

// async function promise() {
//   const users = await query.data.users({ where: { following: ['example'] } })
// }

bootstrap()
// ReactDOM.render(<Component />, document.getElementById('root'))
