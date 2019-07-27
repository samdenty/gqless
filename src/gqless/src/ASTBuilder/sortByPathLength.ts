import { Selection } from '../Selection'

export const sortByPathLength = (
  a: Selection<any, any>,
  b: Selection<any, any>
) => a.path.length - b.path.length
