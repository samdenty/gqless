import { getAccessor } from '../Accessor'

/**
 * Refetches an accessor
 *
 * @example
 * refetch(query.me)
 */
export const refetch = (data: any) => {
  const accessor = getAccessor(data)
  accessor.scheduler._commit._stage(accessor)
}
