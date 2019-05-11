import { render } from 'react-testing-library'
import * as React from 'react'
import { useTestQuery } from '../../../../test'
import { QueryProvider } from '../../QueryContext'

test('supports providing options using context', () => {
  const name = 'exampleQuery'

  const Component = () => {
    const query = useTestQuery()
    if (!query) return null

    expect(query.options.queryName).toEqual(name)

    return null
  }

  render(
    <React.Suspense fallback="loading">
      <QueryProvider value={{ name: name }}>
        <Component />
      </QueryProvider>
    </React.Suspense>
  )
})
