import generate from '@babel/generator'
import { NodePath } from '@babel/traverse'

export const print = (path: NodePath) => generate(path.node).code
export const test = (val: any) => val instanceof NodePath
