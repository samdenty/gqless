import { Selection } from '../Selection'

export interface RecorderRecord {
  selections: Selection<any>[]
}
let record: RecorderRecord = null
export const recordSelection = (selection: Selection<any>) => {
  if (!isRecording) return

  record.selections.push(selection)
}

export let isRecording = false
export const startRecording = () => {
  record = { selections: [] }
  isRecording = true
}
export const stopRecording = () => {
  isRecording = false
  return record
}
