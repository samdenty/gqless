import { render } from 'react-testing-library'
import * as React from 'react'
import { testQuery } from '../../../test'

test('combines multiple react children into one query', done => {
  const Component = testQuery(
    ({}, query) => {
      return (
        <div>
          {query.data.user.name} {query.data.user.age}
        </div>
      )
    },
    queries => {
      expect(queries).toMatchSnapshot()
      expect(queries.length).toEqual(1)
      expect(component.asFragment()).toMatchSnapshot()

      done()
    }
  )

  const component = render(
    <React.Suspense fallback="loading">
      <Component />
    </React.Suspense>
  )
})

test('supports GraphQL arguments', done => {
  const Component = testQuery(
    ({}, query) => {
      return <div>{query.data.getUser({ id: 10 }).name}</div>
    },
    queries => {
      expect(queries).toMatchSnapshot()
      expect(component.asFragment()).toMatchSnapshot()

      done()
    }
  )

  const component = render(
    <React.Suspense fallback="loading">
      <Component />
    </React.Suspense>
  )
})

test('supports omitting GraphQL arguments', done => {
  const Component = testQuery(
    ({}, query) => {
      return <div>{query.data.getUser.name}</div>
    },
    queries => {
      expect(queries).toMatchSnapshot()
      expect(component.asFragment()).toMatchSnapshot()

      done()
    }
  )

  const component = render(
    <React.Suspense fallback="loading">
      <Component />
    </React.Suspense>
  )
})

test('supports aliases', done => {
  const Component = testQuery(
    ({}, query) => {
      const defaultWithoutArgs = query.data.getUser
      const defaultWithArgs = query.data.getUser({ id: 1 })
      const two = query.data.getUser({ id: 2 }, { alias: 'two' })

      expect(+defaultWithArgs.age).toEqual(+defaultWithoutArgs.age)
      expect(+two.age).not.toEqual(+defaultWithArgs.age)

      return null
    },
    queries => {
      expect(queries).toMatchSnapshot()
      expect(component.asFragment()).toMatchSnapshot()

      done()
    }
  )

  const component = render(
    <React.Suspense fallback="loading">
      <Component />
    </React.Suspense>
  )
})
