import { Accessor } from '../Accessor'
import { ScalarNode } from '../../Node'
import { createEvent } from '@gqless/utils'

// When value of accessor changes
// & types are different -> emit
export const onDataChange = (accessor: Accessor) => {
  const onDataChange = createEvent<(prevData: any) => void>()

  let dispose: Function | undefined
  let prevData: any

  const onValueAssociated = () => {
    const value = accessor.value
    if (dispose) {
      dispose()
      dispose = undefined
    }

    // Hook for onDataUpdate event
    const check = () => {
      const newData = value ? value.data : undefined
      if (prevData === newData) return

      if (
        prevData !== undefined ||
        newData === null ||
        accessor.node instanceof ScalarNode
      ) {
        onDataChange.emit(prevData)
      }

      prevData = newData
    }

    if (!value) {
      check()
      return
    }

    dispose = value.onChange(check)
    check()
  }

  accessor.addDisposer(accessor.onValueChange(onValueAssociated))
  onValueAssociated()

  return onDataChange
}
