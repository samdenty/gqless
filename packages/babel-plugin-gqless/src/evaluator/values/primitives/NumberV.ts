import { ObjectV } from '../types'
import { NodePath } from '@babel/core'

export class NumberV extends ObjectV<number> {
  constructor(path: NodePath, value: number) {
    super(path, value)
  }
}
