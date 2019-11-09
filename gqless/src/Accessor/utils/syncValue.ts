import { Accessor } from '../Accessor'
import { Value } from '../../Cache'

export const syncValue = (
  accessor: Accessor,

  getFromValue: ((accessorValue: Value) => Value | undefined) | string,
  withAccessor = accessor._parent
) => {
  if (!withAccessor) return

  const isFn = typeof getFromValue === 'function'

  const getValue = (value: Value): Value | undefined => {
    if (isFn) return (getFromValue as Function)(value)

    return value.get(getFromValue as string)
  }

  let dispose: Function | undefined
  const associateValue = () => {
    if (dispose) {
      accessor._deleteDiposer(dispose)
      dispose()
      dispose = undefined
    }

    if (withAccessor._value) {
      accessor._value = getValue(withAccessor._value)

      const onChange = isFn
        ? withAccessor._value._onChange
        : withAccessor._value._onSet.filter(k => k === getFromValue)

      dispose = onChange(() => {
        accessor._value = getValue(withAccessor._value!)
      })
      accessor._addDisposer(dispose)

      return
    }

    accessor._value = undefined
  }

  accessor._addDisposer(withAccessor._onValueChange(associateValue))
  associateValue()
}
