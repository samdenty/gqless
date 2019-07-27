import { render } from 'react-testing-library'
import * as React from 'react'
import { testQuery } from '../../../test'

test('correctly handles scalars inside templates', done => {
  const Component = testQuery(
    ({}, query) => {
      expect(`${query.data.user.name}`).toMatchSnapshot()
      expect(`${query.data.user.age}`).toMatchSnapshot()

      return null
    },
    queries => {
      expect(queries).toMatchSnapshot()

      done()
    }
  )

  const component = render(
    <React.Suspense fallback="loading">
      <Component />
    </React.Suspense>
  )
})

test('correctly handles .toString()', done => {
  const Component = testQuery(
    ({}, query) => {
      expect(query.data.user.age.toString()).toMatchSnapshot()
      expect(query.data.user.name.toString()).toMatchSnapshot()

      return null
    },
    queries => {
      expect(queries).toMatchSnapshot()

      done()
    }
  )

  const component = render(
    <React.Suspense fallback="loading">
      <Component />
    </React.Suspense>
  )
})

test('correctly handles concatenation', done => {
  const Component = testQuery(
    ({}, query) => {
      expect(query.data.user.name + '!').toMatchSnapshot()
      expect(query.data.user.age + 5).toMatchSnapshot()

      return null
    },
    queries => {
      expect(queries).toMatchSnapshot()

      done()
    }
  )

  const component = render(
    <React.Suspense fallback="loading">
      <Component />
    </React.Suspense>
  )
})

test('correctly replicates data schematics', done => {
  const Component = testQuery(
    ({}, query) => {
      expect(Object.keys(query.data.user)).toMatchSnapshot()

      return null
    },
    queries => {
      expect(queries).toMatchSnapshot()

      done()
    }
  )

  const component = render(
    <React.Suspense fallback="loading">
      <Component />
    </React.Suspense>
  )
})
