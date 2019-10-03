;(window as any).__DEV__ = process.env.NODE_ENV === 'development'

import '@babel/polyfill'

import { Logger } from '@gqless/logger'
import { parse, stringify } from 'flatted'
import {
  graphql,
  usePoll,
  useFragment,
  useVariable,
  Query as QueryCm,
  ofType,
} from '@gqless/react'
import { fetchSchema } from '@gqless/schema'
import * as Imports from 'gqless'
import { Suspense } from 'react'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as utils from '@gqless/utils'

import {
  client as graphqlInstance,
  fetchQuery,
  Query,
  schema as schemaFaker,
  User,
} from './graphql'
import { getAccessor } from 'gqless'

// import { useQuery, QueryProvider, graphql, Defer } from '@gqless/react'
Object.assign(window, { ...utils, ...Imports, schemaFaker, stringify, parse })

const endpoint = `http://${location.hostname}:9002/graphql`

async function bootstrap() {
  const schema = await fetchSchema(fetchQuery, { includeInfo: true })
  console.log(schema)
  // const codegen = new Codegen(schema)
  // console.log(codegen.generate())

  const query = graphqlInstance.query as Query

  Object.assign(window, { query, graphql: graphqlInstance })

  const Description = graphql(
    ({ user }: { user: User }) => {
      usePoll(user.description, 500)

      return <p>{user.description}</p>
    },
    { name: 'DescriptionComponent' }
  )

  const UserComponent = graphql(
    ({ user }: { user: User }) => {
      return (
        <div>
          <img src={user.avatarUrl({ size: 200 })!} />
          <h2>{}</h2>
          <div>age: {user.age}</div>
          {/*<Description user={user} />*/}
        </div>
      )
    },
    { name: 'UserComponent' }
  )

  const TestCmp = graphql(
    () => {
      const userFragment = useFragment(
        query.testOrUser!,
        'User',
        'userFragment'
      )

      console.log(userFragment.__typename, query.testOrUser.__typename)
      userFragment.name
      userFragment.age

      if (ofType(query.testOrUser, 'TestB')) {
        console.warn('ofType TESTB')
        return <div>TestB {query.testOrUser.b}</div>
      }

      if (ofType(query.testOrUser, 'User')) {
        console.warn('ofType USER')
        return <div>User {query.testOrUser.name}</div>
      }

      console.warn('ofType UNKNOWN')

      return <div>unknown</div>
    },
    { name: 'TestCmp' }
  )

  const Component = graphql(
    () => {
      // return null
      const [showDescription, setShowDescription] = React.useState(false)

      const userId = useVariable('asdasdasd')
      const usersLimit = useVariable(1, 'usersLimit')

      const [interval, setInterval] = React.useState(500)
      const [polling, togglePolling] = usePoll(query.me, interval, false)

      return (
        <div>
          <TestCmp />
          <button onClick={() => togglePolling()}>
            Polling: {String(polling)}
          </button>
          <input
            type="number"
            value={interval}
            onChange={({ target }) => setInterval(+target.value)}
          />
          {query.user({ id: userId })!.name}
          {/*query.stringArray.map((t, i) => (
            <div key={i}>{t!.join(',')}</div>
          ))*/}
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
          {query.users({ limit: usersLimit }).map(user => (
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
}

bootstrap()
