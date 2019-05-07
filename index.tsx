import { test } from './index2'
import * as React from 'react'
import { Suspense } from 'react'
import ReactDOM from 'react-dom'

import ApolloClient from 'apollo-boost'

import { useQuery, QueryProvider, graphql, Defer } from './src/new/React'
import { LoggerMiddleware, Query } from './src/new'
import { fetchSchema } from './src/new/Schema'
import { Codegen } from './src/new/Codegen'
import { types as typesFaker, User } from './typesFaker'

const client = new ApolloClient({
  uri: 'http://localhost:9002/graphql',
})
async function bootstrap() {
  const fetchQuery = async query => {
    const resp = await client.query({ query })

    return { data: resp.data, errors: resp.errors }
  }

  const schema = await fetchSchema(fetchQuery)
  const codegen = new Codegen(schema)
  console.log(codegen.generate())

  const query = new Query(typesFaker.Query, fetchQuery, { name: 'TestQuery' })
  query.middleware.add(new LoggerMiddleware(query))

  const getUsers = query.data.users
  getUsers({ limit: 10 })[1].age
  getUsers({ limit: 1 })[1].age
  getUsers({ limit: 1 })[1].avatarUrl

  query.data.user.following[0].name

  query.data.users[1].following[0].age
  query.data.users[1].avatarUrl
  query.data.users[1].avatarUrl({ size: 100 })
  query.data.users[1].age

  window.typesFaker = typesFaker
  window.query = query

  return

  test(typesFaker, fetchQuery)

  const Description = graphql(({ user }: { user: User }) => {
    return <p>{user.description}</p>
  })

  Description.displayName = 'Description'

  const UserComponent = graphql(({ user }: { user: User }) => {
    return (
      <div>
        <img src={user.avatarUrl({ size: 200 })} />
        <h2>{user.name}</h2>
        <div>age: {user.age}</div>
        <Description user={user} />
      </div>
    )
  })
  UserComponent.displayName = 'UserComponent'

  const Component = graphql(() => {
    console.count('Component render')
    const query = useQuery<typeof typesFaker.Query>('TestQuery', query => {
      query.middleware.add(new LoggerMiddleware(query))
    })

    if (!query) return null
    ;(window as any).query = query

    return (
      <div>
        <b>My name:</b> {query.data.me.name}
        <br />
        <b>My description:</b>
        <Defer fallback="Loading">
          <Description user={query.data.me} />
        </Defer>
        <div>
          <b>Other users:</b>
          {query.data.users.map(user => (
            <UserComponent key={user.id} user={user} />
          ))}
        </div>
      </div>
    )
    // return (
    //   <>
    //     <div>
    //       <Suspense fallback="Users loading">
    //         {query.data.users.map(user => (
    //           <UserComponent key={user.id} user={user} />
    //         ))}
    //       </Suspense>
    //     </div>
    //     <button onClick={() => setClicks(clicks + 1)}>{clicks}</button>
    //     <table>
    //       <tbody>
    //         <tr>
    //           <td>combined</td>
    //           <td>{`${query.data.user.name} (${query.data.user.age})`}</td>
    //         </tr>
    //         <tr>
    //           <td>name</td>
    //           <td>{query.data.user.name}</td>
    //         </tr>
    //         <tr>
    //           <td>age</td>
    //           <td>{query.data.user.age}</td>
    //         </tr>
    //         <tr>
    //           <td>getUser -> name</td>
    //           <td>{query.data.getUser({ id: '10' }).name}</td>
    //         </tr>
    //         <tr>
    //           <td>getUser -> age</td>
    //           <td>{query.data.getUser({ id: '10' }).age}</td>
    //         </tr>
    //       </tbody>
    //     </table>
    //   </>
    // )

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
  })

  Component.displayName = 'Component'

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
        Query: typesFaker.Query,
        fetchQuery,
      }}
    >
      <App />
    </QueryProvider>,
    document.getElementById('root')
  )

  // query.batcher.stageNode(query.root.fields[0])
}

bootstrap()
