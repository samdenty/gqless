import { Accessor } from '../../Accessor'
import { Value } from '../../Cache'
import { Selection } from '../../Selection'
import { Node } from '../../Node'
import { DataTrait } from '../traits'
import { Extension } from '../Extension'

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

export type IDataContext<TNode extends Node & DataTrait = Node & DataTrait> = {
  accessor?: Accessor<Selection<TNode>>
  selection?: Selection<TNode>
  extensions?: Extension[]
  value?: Value
}

export const getExtensions = (ctx: IDataContext) => {
  if (ctx.extensions) return ctx.extensions
  if (ctx.accessor) return ctx.accessor.extensions

  return []
}

export const getSelection = (ctx: IDataContext) => {
  if (ctx.selection) return ctx.selection
  if (ctx.accessor) return ctx.accessor.selection

  return
}

export const getValue = (ctx: IDataContext) => {
  if (ctx.value) return ctx.value
  if (ctx.accessor) return ctx.accessor.value

  return
}

export class Outputable {
  // @ts-ignore
  public getData(ctx: IDataContext) {}
}
