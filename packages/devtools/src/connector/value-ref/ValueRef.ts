import { Type } from '../types'

export class ValueRef<TType extends Type = Type> {
  constructor(public type: TType, public nullable: boolean) {}
}
