import { test } from './index2'
import * as React from 'react'
import { Suspense } from 'react'
import ReactDOM from 'react-dom'

import ApolloClient from 'apollo-boost'
import {
  introspectionQuery,
  introspectionToSchema,
  LoggerMiddleware,
} from './src'

import { useQuery, QueryProvider } from './src/React'

type user = {
  name: string
  age: number
  b: string
  c: string
  d: string
  id: string
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

  type Data = {
    getUser: user
    user: user
    users: user[]
    a: {
      b: {
        c: 1
        d: number
        __argmap: {
          c: { test: number }
        }
      }
    }
    number: 1

    __args: {
      getUser: { id: number }
    }
  }

  test(schema)
  return

  const Component = () => {
    const [clicks, setClicks] = React.useState(0)
    const query = useQuery<Data>({
      queryName: 'TestQuery',
      middleware: (m, q) => [new LoggerMiddleware(q), ...m],
    })

    if (!query) return null
    ;(window as any).query = query

    return <div>{query.data.users[0].name}</div>

    // const defaultWithoutArgs = query.data.getUser
    // const defaultWithArgs = query.data.getUser({ id: 1 })
    // const two = query.data.getUser({ id: 2 }, { alias: 'two' })

    return (
      <>
        {/*<div>
          {defaultWithArgs.age} {defaultWithoutArgs.age} {two.age}
    </div>*/}
        <button onClick={() => setClicks(clicks + 1)}>{clicks}</button>
        <table>
          <tbody>
            <tr>
              <td>combined</td>
              <td>{`${query.data.user.name} (${query.data.user.age})`}</td>
            </tr>
            <tr>
              <td>name</td>
              <td>{query.data.user.name}</td>
            </tr>
            <tr>
              <td>age</td>
              <td>{query.data.user.age}</td>
            </tr>
            <tr>
              <td>getUser -> name</td>
              <td>{query.data.getUser({ id: 10 }).name}</td>
            </tr>
            <tr>
              <td>getUser -> age</td>
              <td>{query.data.getUser({ id: 10 }).age}</td>
            </tr>
          </tbody>
        </table>
      </>
    )

    // return <div>Name: {query.data.user.name}</div>
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
  }

  const App = () => {
    return (
      <Suspense fallback={<div>FALLBACK</div>}>
        <Component />
      </Suspense>
    )
  }

  ReactDOM.render(
    <QueryProvider
      value={{
        schema,
        async fetchQuery(query) {
          const resp = await client.query({ query })

          return { data: resp.data, errors: resp.errors }
        },
      }}
    >
      <App />
    </QueryProvider>,
    document.getElementById('root')
  )

  // query.batcher.stageNode(query.root.fields[0])
}

bootstrap()
