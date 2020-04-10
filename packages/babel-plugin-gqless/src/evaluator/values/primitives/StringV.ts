import { ObjectV } from '../types'
import { NodePath } from '@babel/core'

export class StringV extends ObjectV<string> {
  constructor(path: NodePath, value: string) {
    super(path, value)
  }
}
