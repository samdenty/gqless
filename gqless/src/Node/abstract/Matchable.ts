import { Value } from '../../Cache'

export class Matchable {
  public match(value: Value, data: any): Value | null | void {
    // Direct equal
    if (value.data === data) return value

    // Support for callback-style
    if (typeof data === 'function') {
      const isAMatch = data(value.data)

      return isAMatch ? (isAMatch instanceof Value ? isAMatch : value) : null
    }
    // Can only be a match with null
    // if both equal null
    if (value.data === null || data === null) return null
  }
}
