import { Accessor } from '../../Accessor'

export type IAccessorRecorder = (accessor: Accessor) => void
export const accessorRecorders = new Set<IAccessorRecorder>()

export class Outputable {
  public getData(accessor: Accessor): any {
    if (accessorRecorders.size) {
      accessorRecorders.forEach(record => record(accessor))
    }
  }
}
