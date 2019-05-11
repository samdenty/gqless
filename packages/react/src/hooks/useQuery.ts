import { Query } from '../../Query'
import { useContext, useEffect, useState } from 'react'
import { QueryContext } from '../QueryContext'
import { ReactMiddleware } from '../ReactMiddleware'
import { useForceUpdate } from './useForceUpdate'
import { ObjectNode } from '../../Node'

// TODO: https://github.com/facebook/react/issues/15137 return on first render
export const useQuery = <TNode extends ObjectNode<any, any, any>>(
  name: string = null,
  onCreated?: (query: Query<TNode>) => void
) => {
  const context = useContext(QueryContext)
  const [query, setQuery] = useState<ReturnType<typeof createQuery>>(null)
  const forceUpdate = useForceUpdate()

  const createQuery = () => {
    const query = new Query(context.Query as TNode, context.fetchQuery, {
      name,
    })
    query.middleware.add(new ReactMiddleware(forceUpdate))

    if (onCreated) onCreated(query)

    return query
  }

  useEffect(
    () => {
      const query = createQuery()
      setQuery(query)

      return () => query.dispose()
    },
    [context]
  )

  return query
}
