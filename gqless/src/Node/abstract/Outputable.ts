import { Accessor } from '../../Accessor'
import { Extension } from '../Extension'
import { accessorInterceptors } from '../../Interceptor'

export const getOutputableData = (
  outputable: Outputable,
  accessor: Accessor
) => {
  try {
    return outputable.getData(accessor)
  } catch (accessor) {
    if (accessor instanceof Accessor) return accessor.data

    throw accessor
  }
}

export class Outputable {
  constructor(public extension?: Extension) {}

  public getData(accessor: Accessor) {
    if (accessor.fragmentToResolve) {
      throw accessor.fragmentToResolve
    }

    if (accessorInterceptors.size) {
      accessorInterceptors.forEach(intercept => intercept(accessor))
    }
  }
}
