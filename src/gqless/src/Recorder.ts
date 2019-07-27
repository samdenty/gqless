import { Accessor } from './Accessor'
import { IAccessorRecorder, accessorRecorders } from './Node'
import { createEvent } from '@gqless/utils'

export class Recorder {
  public accessors = new Set<Accessor>()
  public isRecording = false

  private recordAccessor: IAccessorRecorder = accessor => {
    this.onAccessor.emit(accessor)
    this.accessors.add(accessor)
  }

  public onAccessor = createEvent<(accessor: Accessor) => void>()

  public start() {
    accessorRecorders.add(this.recordAccessor)
    this.isRecording = true
  }

  public stop() {
    accessorRecorders.delete(this.recordAccessor)
    this.isRecording = false
  }
}
