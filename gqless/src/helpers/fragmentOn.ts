import { Fragment } from '../Selection'
import { getAccessor, FieldAccessor } from '../Accessor'

export const fragmentOn = (data: any, fragment: Fragment) => {
  const accessor = getAccessor(data)

  let fragmentAccessor = accessor.getChild(
    ({ selection }) => selection === fragment
  )

  if (!fragmentAccessor) {
    // fragmentAccessor = new FieldAccessor
  }
}
