import { Query, IQueryOptions } from '../../Query'
import { useContext, useEffect, useState } from 'react'
import { QueryContext } from '../QueryContext'
import { ReactMiddleware } from '../ReactMiddleware'
import { useForceUpdate } from './useForceUpdate'

// TODO: https://github.com/facebook/react/issues/15137 return on first render
export const useQuery = <T>(options: Partial<IQueryOptions> = {}) => {
  const context = useContext(QueryContext)
  const [query, setQuery] = useState<ReturnType<typeof createQuery>>(null)
  const forceUpdate = useForceUpdate()

  const createQuery = () => {
    return new Query<T>({
      ...context,
      ...options,
      middleware: (middleware, query) => {
        if (context.middleware)
          middleware = context.middleware(middleware, query)
        if (options.middleware)
          middleware = options.middleware(middleware, query)

        return [...middleware, new ReactMiddleware(forceUpdate)]
      },
    } as IQueryOptions)
  }

  useEffect(() => {
    const query = createQuery()
    setQuery(query)

    return () => query.dispose()
  }, [context])

  return query
}
