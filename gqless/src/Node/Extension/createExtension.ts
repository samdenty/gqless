import { DataTrait } from '../traits'
import { StaticExtension, ComputableExtension } from '.'
import { Extension } from './Extension'

export const createExtension = (
  node: DataTrait,
  extension: any,
  parent?: Extension,
  keyedBy?: any
): ComputableExtension | StaticExtension =>
  new (typeof extension === 'function' ? ComputableExtension : StaticExtension)(
    parent,
    node,
    extension,
    keyedBy
  )
