import { Accessor } from '../../Accessor'
import { Extension } from '../../Extension'

export type IAccessorRecorder = (accessor: Accessor) => void
export const accessorRecorders = new Set<IAccessorRecorder>()

export class Outputable {
  constructor(public extension?: Extension) {}

  public getData(accessor: Accessor) {
    if (accessorRecorders.size) {
      accessorRecorders.forEach(record => record(accessor))
    }
  }
}
