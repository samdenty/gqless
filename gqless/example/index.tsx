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
  useTracked,
} from '@gqless/react'
import { fetchSchema } from '@gqless/schema'
import * as Imports from 'gqless'
import { Suspense, useTransition } from 'react'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as utils from '@gqless/utils'

import {
  query,
  client as graphqlInstance,
  fetchQuery,
  Query,
  schema as schemaFaker,
  User,
} from './graphql'
import { getAccessor, refetch } from 'gqless'

// import { useQuery, QueryProvider, graphql, Defer } from '@gqless/react'
Object.assign(window, { ...utils, ...Imports, schemaFaker, stringify, parse })

const endpoint = `http://${location.hostname}:9002/graphql`

async function bootstrap() {
  const schema = await fetchSchema(fetchQuery, { includeInfo: true })
  console.log(schema)
  // const codegen = new Codegen(schema)
  // console.log(codegen.generate())

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

      // console.log(userFragment.__typename, query.testOrUser.__typename)
      userFragment.name
      userFragment.age

      if (ofType(query.testOrUser, 'TestB')) {
        // console.log('ofType TESTB')
        return <div>TestB {query.testOrUser.b}</div>
      }

      if (ofType(query.testOrUser, 'User')) {
        // console.log('ofType USER')
        return <div>User {query.testOrUser.name}</div>
      }

      // console.log('ofType UNKNOWN')

      return <div>unknown</div>
    },
    { name: 'TestCmp' }
  )

  const Component = graphql(
    () => {
      // return <div>{query.me!.name}</div>

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
          {query.users({ limit: usersLimit }).map(user => {
            return <UserComponent key={user.id} user={user} />
          })}
        </div>
      )
    },
    { name: 'Component' }
  )

  const App = () => {
    const [startTransition, isPending] = useTransition({
      timeoutMs: 3000,
    })

    return (
      <>
        {isPending ? 'loading' : null}

        <button
          onClick={() => {
            query.me!.age
          }}
        >
          trigger KeyedRefetch
        </button>
        <button
          onClick={() => {
            // startTransition(() => {

            console.group('start transition')
            refetch(query.me)
            console.groupEnd()
            // })
          }}
        >
          trigger Refetch
        </button>

        <Suspense fallback="loading Component">
          <Component />
        </Suspense>
      </>
    )
  }

  ReactDOM.createRoot(document.getElementById('root')).render(
    <Suspense fallback="loading app">
      <App />
    </Suspense>
  )
}

bootstrap()
