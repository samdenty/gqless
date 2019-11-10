import { Accessor } from '../Accessor'
import { Value } from '../../Cache'

export const syncValue = (
  accessor: Accessor,

  getFromValue: ((accessorValue: Value) => Value | undefined) | string,
  withAccessor = accessor.parent$
) => {
  if (!withAccessor) return

  const isFn = typeof getFromValue === 'function'

  const getValue = (value: Value): Value | undefined => {
    if (isFn) return (getFromValue as Function)(value)

    return value.get$(getFromValue as string)
  }

  let dispose: Function | undefined
  const associateValue = () => {
    if (dispose) {
      accessor.deleteDiposer$(dispose)
      dispose()
      dispose = undefined
    }

    if (withAccessor.value$) {
      accessor.value$ = getValue(withAccessor.value$)

      const onChange = isFn
        ? withAccessor.value$.onChange$
        : withAccessor.value$.onSet$.filter$(k => k === getFromValue)

      dispose = onChange(() => {
        accessor.value$ = getValue(withAccessor.value$!)
      })
      accessor.addDisposer$(dispose)

      return
    }

    accessor.value$ = undefined
  }

  accessor.addDisposer$(withAccessor.onValueChange$(associateValue))
  associateValue()
}
