import { QueryField } from './QueryField'
import { QueryRoot } from './QueryRoot'

export * from './QueryField'
export * from './QueryNode'
export * from './QueryRoot'

export const nodes: (typeof QueryField | typeof QueryRoot)[] = [
  QueryField,
  QueryRoot,
]
