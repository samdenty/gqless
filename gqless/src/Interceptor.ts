import { createEvent } from '@gqless/utils'
import { Accessor } from './Accessor'

export type AccessorInterceptor = (accessor: Accessor) => void
export const accessorInterceptors = new Set<AccessorInterceptor>()

export class Interceptor {
  public listening = false

  public onAccessor = createEvent<AccessorInterceptor>()

  public start() {
    accessorInterceptors.add(this.onAccessor.emit$)
    this.listening = true
  }

  public stop() {
    accessorInterceptors.delete(this.onAccessor.emit$)
    this.listening = false
  }
}
