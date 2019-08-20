import { createEvent } from '@gqless/utils'

import { Accessor } from '../../Accessor'
import { Value } from '../Value'
import { mergeUpdate } from './mergeUpdate'

export class Cache {
  public store = new Map<string, Value>()
  constructor() {}

  public toJSON() {
    const obj: any = {}

    this.store.forEach((value, key) => {
      obj[key] = value.toJSON()
    })

    return obj
  }

  public onUpdate = createEvent()

  public merge(accessor: Accessor, data: any) {
    mergeUpdate(accessor, data)
  }
}
