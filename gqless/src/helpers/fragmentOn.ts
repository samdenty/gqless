import { Fragment } from '../Selection'
import { getAccessor, FragmentAccessor } from '../Accessor'

/**
 * Attaches a fragment to an accessor, and returns the data
 *
 * @example
 * fragmentOn(query.me, new Fragment(schema.User))
 */
export const fragmentOn = (data: any, fragment: Fragment) => {
  const accessor = getAccessor(data)

  let fragmentAccessor = (accessor instanceof FragmentAccessor
    ? accessor._parent
    : accessor
  )._get(fragment)

  if (!fragmentAccessor) {
    accessor._selection.add(fragment)
    fragmentAccessor = new FragmentAccessor(accessor, fragment)
  }

  return fragmentAccessor._data
}
