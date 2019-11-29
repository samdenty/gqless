import { types as t } from '@babel/core'
import { NodePath } from '@babel/traverse'

export const path = (node: t.Node) => {
  const path = new NodePath(undefined!, undefined!)
  path.node = node
  return path
}
