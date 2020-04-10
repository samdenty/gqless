import { types as t, NodePath } from '@babel/core'
import { V } from '../V'

export class BinaryExpression<T> extends V<T> {
  constructor(
    path: NodePath,
    public operator: t.BinaryExpression['operator'],
    public left: V<T>,
    public right: V<T>
  ) {
    super(
      path,
      () => {
        throw new Error()
      },
      left.runtime || right.runtime
    )
  }
}
