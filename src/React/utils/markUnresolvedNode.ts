import { QueryNode } from '../../QueryNode'
import { throwException } from './interceptor'

let recording = false
let unresolvedNodes: QueryNode[] = []

export const startRecording = () => {
  unresolvedNodes = []
  recording = true
}

export const stopRecording = () => {
  recording = false

  if (unresolvedNodes.length) {
    throwException(unresolvedNodes[0])
  }
}

export const markUnresolvedNode = (node: QueryNode) => {
  if (!recording) throwException(node)

  unresolvedNodes.push(node)
}
