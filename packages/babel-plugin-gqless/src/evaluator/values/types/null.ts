import { V } from '../V'
import { NodePath } from '@babel/core'

export class NullV extends V<null> {
  constructor(path: NodePath | null) {
    super(path, null)
  }
}
