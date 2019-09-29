import { Fragment } from '../Selection'
import { getAccessor, FragmentAccessor } from '../Accessor'

export const fragmentOn = (data: any, fragment: Fragment) => {
  const accessor = getAccessor(data)

  let fragmentAccessor = accessor.get(({ selection }) => selection === fragment)

  if (!fragmentAccessor) {
    fragmentAccessor = new FragmentAccessor(accessor, fragment)
  }

  return fragmentAccessor
}
