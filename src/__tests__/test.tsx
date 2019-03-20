import { render } from 'react-testing-library'
import * as React from 'react'
import { print } from 'graphql'
import { useTestQuery, queryComponent, executeQuery } from '../../test'

test('adds 1 + 2 to equal 3', async done => {
  let queries: string[] = []
  const Component = queryComponent(
    () => {
      const query = useTestQuery({
        fetchQuery(query) {
          queries.push(print(query))

          return executeQuery(query)
        },
      })

      if (!query) return null

      return (
        <div>
          {'' + query.data.user.name}
          {'' + query.data.user.age}
        </div>
      )
    },
    () => {
      expect(queries).toMatchSnapshot()
      done()
    }
  )

  render(
    <React.Suspense fallback="loading">
      <Component />
    </React.Suspense>
  )
})
