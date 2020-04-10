import { ObjectV } from '../types'
import { NodePath } from '@babel/core'

export class BooleanV extends ObjectV<boolean> {
  constructor(path: NodePath, value: boolean) {
    super(path, value)
  }
}
