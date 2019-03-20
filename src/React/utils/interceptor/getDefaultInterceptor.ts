import { QueryNode } from '../../../QueryNode'
import { interceptFunction } from './interceptFunction'

export const getDefaultInterceptor = <T>(
  node: QueryNode<T>,
  prop: string | Symbol
) => {
  switch (prop) {
    case Symbol.toPrimitive:
      return interceptFunction(node, prop, ({ value }, hint) => {
        if (typeof value === 'string' || typeof value === 'number') {
          return value
        }

        return hint === 'number' ? Number(value) : String(value)
      })

    case 'toJSON':
      return interceptFunction(node, prop, ({ value }) => value)

    case 'toString':
      return interceptFunction(node, prop, ({ value }) => String(value))
  }
}
