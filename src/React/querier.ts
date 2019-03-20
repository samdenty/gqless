import { startRecording, stopRecording } from './utils'

/**
 * By wrapping your component inside this function, you can
 * heavily decrease the amount of queries made by the component
 * by batching them together
 * @param component
 */
export const querier = <T extends (props: Props) => R, Props, R>(
  component: T
) => (props: Props): R => {
  startRecording()

  try {
    return component(props)
  } catch (exception) {
    throw exception
  } finally {
    stopRecording()
  }
}
