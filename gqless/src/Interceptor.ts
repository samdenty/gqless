import { createEvent } from '@gqless/utils'

import { AccessorInterceptor, accessorInterceptors } from './Node/abstract/Outputable'

export class Interceptor {
  public listening = false

  public onAccessor = createEvent<AccessorInterceptor>()

  public start() {
    accessorInterceptors.add(this.onAccessor.emit)
    this.listening = true
  }

  public stop() {
    accessorInterceptors.delete(this.onAccessor.emit)
    this.listening = false
  }
}
