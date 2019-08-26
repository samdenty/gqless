import * as React from 'react'
import { Query as QueryCl } from 'gqless'

export interface StackContext {
  frames: QueryCl[]
  inheritance: boolean
}

export const StackContext = React.createContext<StackContext>({
  frames: [],
  inheritance: true,
})

type QueryFrame = QueryCl | string | undefined

export const Query: React.SFC<{
  value?: QueryFrame[] | QueryFrame | null
  /**
   * Whether or not child components can use their own queries.
   *
   * true  | child components can use their own queries
   * false | (default) all queries will be merged into this components query
   * null  | inherited with React context
   */
  allowInheritance?: boolean | null
  children: any
}> = ({
  value = null,

  allowInheritance = false,
  children,
}) => {
  const parentStack = React.useContext(StackContext)

  const stack: StackContext = React.useMemo(() => {
    const frames =
      value === null
        ? parentStack.frames
        : value instanceof QueryCl
        ? [value]
        : (Array.isArray(value) ? value : [value]).map(
            value => new QueryCl(typeof value === 'string' ? value : undefined)
          )

    return {
      frames,
      inheritance:
        allowInheritance === null ? parentStack.inheritance : allowInheritance,
    }
  }, [value, allowInheritance])

  return <StackContext.Provider value={stack}>{children}</StackContext.Provider>
}
