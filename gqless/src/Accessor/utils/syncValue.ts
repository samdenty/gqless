import { Accessor } from '../Accessor'
import { Value } from '../../Cache'

export const syncValue = (
  accessor: Accessor,

  getValue: (accessorValue: Value) => Value | undefined,
  withAccessor = accessor.parent
) => {
  if (!withAccessor) return

  let dispose: Function | undefined
  const associateValue = () => {
    if (dispose) {
      accessor.deleteDiposer(dispose)
      dispose()
      dispose = undefined
    }

    if (withAccessor.value) {
      accessor.value = getValue(withAccessor.value!)

      dispose = withAccessor.value!.onChange(() => {
        accessor.value = getValue(withAccessor.value!)
      })
      accessor.addDisposer(dispose)
    } else {
      accessor.value = undefined
    }
  }

  accessor.addDisposer(withAccessor.onValueChange(associateValue))
  associateValue()
}
