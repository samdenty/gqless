import '@babel/polyfill'

import * as React from 'react'
import { Suspense } from 'react'
import * as ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
// import { useQuery, QueryProvider, graphql, Defer } from '@graphql-builder/react'
import { GraphQL } from 'graphql-builder'
import { LoggerMiddleware } from '@graphql-builder/logger'
import { print } from 'graphql'
import { types as typesFaker, User } from './graphql'
import * as Imports from 'graphql-builder'
import { graphql, ReactMiddleware, Query } from '@graphql-builder/react'
import { Codegen, fetchSchema } from '@graphql-builder/schema'

Object.assign(window, { ...Imports, typesFaker })

const endpoint = `http://${location.hostname}:9002/graphql`
const client = new ApolloClient({
  uri: endpoint,
})

async function bootstrap() {
  const fetchQuery = async query => {
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
      throw new Error(`Network error, received status code ${response.status}`)
    }

    const json = await response.json()

    // if (json.data.user) {
    //   if (Object.keys(json.data.user).length === 1) {
    //     json.data.user = null
    //   }
    // }

    return json

    // const resp = await client.query({ query })

    // return { data: resp.data, errors: resp.errors }
  }

  // const schema = await fetchSchema(fetchQuery, { includeInfo: true })
  // const codegen = new Codegen(schema)
  // console.log(codegen.generate())

  const graphqlInstance = new GraphQL(typesFaker.Query, fetchQuery)
  graphqlInstance.middleware.add(
    new LoggerMiddleware(graphqlInstance, true),
    new ReactMiddleware(),
    {
      // async onFetch(_, response) {
      //   await response
      //   getUsers({ limit: 1 })[1].age
      //   getUsers({ limit: 1 })[1].avatarUrl
      //   const user = query.query.user()
      //   if (user) {
      //     user.following![0]!.name
      //   }
      //   query.query.users[1].following![0]!.age
      //   query.query.users[1].avatarUrl
      //   query.query.users[1].avatarUrl({ size: 100 }) /
      // },
    }
  )

  // const getUsers = query.query.users
  // getUsers({ limit: 10 })[1].age
  // query.query.users[1].age

  // graphql.query.user.name
  // graphql.query.users[0].name

  const { query } = graphqlInstance

  Object.assign(window, { query, graphql: graphqlInstance })
  // return

  // test(typesFaker, fetchQuery)

  const Description = graphql(
    ({ user }: { user: User }) => {
      return <p>{user.description}</p>
    },
    { name: 'DescriptionComponent' }
  )

  const UserComponent = graphql(
    ({ user }: { user: User }) => {
      return (
        <div>
          <img src={user.avatarUrl({ size: 200 })!} />
          <h2>{user.name}</h2>
          <div>age: {user.age}</div>
          {/*<Description user={user} />*/}
        </div>
      )
    },
    { name: 'UserComponent' }
  )

  const Component = graphql(
    () => {
      const [showDescription, setShowDescription] = React.useState(false)

      query.me.following[0].name

      return (
        <div>
          <b>My name:</b> {query.me!.name}
          <br />
          <b>My description:</b>
          <button onClick={() => setShowDescription(!showDescription)}>
            {showDescription ? 'Hide' : 'Show'} description
          </button>
          <Suspense fallback={<>Loading description</>}>
            {showDescription && <Description user={query.me!} />}
          </Suspense>
          {/*<Defer fallback="Loading">

          </Defer>
      <div>*/}
          <b>Other users:</b>
          {query.users.map(user => (
            <UserComponent key={user.id} user={user} />
          ))}
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
    },
    { name: 'Component' }
  )

  const App = () => {
    return (
      <Suspense fallback={<div>FALLBACK</div>}>
        <Component />
      </Suspense>
    )
  }

  ReactDOM.render(<App />, document.getElementById('root'))

  // query.batcher.stageNode(query.root.fields[0])
}

bootstrap()
