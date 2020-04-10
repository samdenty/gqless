import { V } from '../V'
import { NodePath } from '@babel/core'
import { Context } from '../../Context'

export class NullV extends V<null> {
  constructor(path: NodePath) {
    super(path, null)
  }
}
