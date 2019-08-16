import { Accessor } from '../../Accessor'
import { Extension } from '../Extension'

export type AccessorInterceptor = (accessor: Accessor) => void
export const accessorInterceptors = new Set<AccessorInterceptor>()

export class Outputable {
  constructor(public extension?: Extension) {}

  public getData(accessor: Accessor) {
    if (accessorInterceptors.size) {
      accessorInterceptors.forEach(intercept => intercept(accessor))
    }
  }
}
