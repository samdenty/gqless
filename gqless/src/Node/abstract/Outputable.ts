import { Accessor, ExtensionRef } from '../../Accessor'
import { Extension } from '../Extension'
import { Value } from '../../Cache'
import { Selection } from '../../Selection'
import { Node } from '../../Node'

export const getOutputableData = (
  outputable: Outputable,
  ctx: IDataContext
) => {
  try {
    return outputable.getData(ctx)
  } catch (accessor) {
    if (accessor instanceof Accessor) return accessor.data

    throw accessor
  }
}

export interface IDataContext<TNode extends Node = Node> {
  extensions?: ExtensionRef[]
  accessor?: Accessor<Selection<TNode>>
  selection?: Selection<TNode>
  value?: Value
}

export class Outputable {
  constructor(public extension?: Extension) {}

  // @ts-ignore
  public getData(ctx: IDataContext) {}
}
