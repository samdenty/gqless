import { Accessor } from './Accessor'
import { IAccessorRecorder, accessorRecorders } from './Node'

export class Recorder {
  public accessors = new Set<Accessor>()
  public isRecording = false

  private recordAccessor: IAccessorRecorder = accessor => {
    this.accessors.add(accessor)
  }

  public start() {
    accessorRecorders.add(this.recordAccessor)
    this.isRecording = true
  }

  public stop() {
    accessorRecorders.delete(this.recordAccessor)
    this.isRecording = false
  }
}
