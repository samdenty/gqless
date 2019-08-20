import { Accessor, getAccessor } from '../Accessor'

export class Helper {
  protected accessor: Accessor

  constructor(data: any) {
    this.accessor = getAccessor(data)
  }
}
