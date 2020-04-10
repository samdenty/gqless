import { V } from './V'
import { invariant } from '@gqless/utils'
import { NodePath } from '@babel/core'

export class RuntimeV extends V<never> {
  constructor(path: NodePath) {
    super(
      path,
      () => {
        invariant(false, `runtime values can't be known statically`)
      },
      true
    )
  }
}
