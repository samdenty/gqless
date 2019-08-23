import { Value } from '../../Cache'

export class Matchable {
  constructor() {}

  public match(value: Value, data: any): Value | null | void {
    if (value.data === data) return value
    if (value.data === null || data === null) return null
  }
}
