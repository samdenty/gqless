import { Accessor } from '../Accessor'
import { EnumNode, ScalarNode } from '../../Node'
import { createEvent } from '@gqless/utils'
import { Value } from '../../Cache'

// When value of accessor changes
// & types are different -> emit
export const onDataChange = (accessor: Accessor) => {
  const onDataChange = createEvent<(prevData: any) => void>()

  let dispose: Function | undefined

  const onValueAssociated = (
    value: Value | undefined,
    prevValue: Value | undefined
  ) => {
    dispose?.()
    dispose = undefined

    // Hook for onDataUpdate event
    const check = () => {
      const newData = value?.data
      const prevData = prevValue?.data
      if (newData === prevData) return

      if (
        prevData !== undefined ||
        newData === null ||
        accessor.node instanceof ScalarNode ||
        accessor.node instanceof EnumNode
      ) {
        onDataChange.emit(prevData)
      }
    }

    if (!value) {
      check()
      return
    }

    dispose = value.onChange.listen(check)
    check()
  }

  accessor.addDisposer(accessor.onValueChange.listen(onValueAssociated))
  onValueAssociated(undefined, accessor.value)

  return onDataChange
}
