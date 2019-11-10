import { getAccessor } from '../Accessor'

/**
 * Updates the Value for an accessor
 *
 * @example
 * // Update a scalar
 * update(query.me.name, 'bob')
 *
 * // Update an object
 * update(query, { me: { name: 'bob' } })
 */
export const update = (data: any, newData: any) => {
  const accessor = getAccessor(data)

  return accessor.setData$(newData)
}
