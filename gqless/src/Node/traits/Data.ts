import { StaticExtension, ComputableExtension, Extension } from '../Extension'
import { Accessor } from '../../Accessor'
import { Selection } from '../../Selection'
import { Value } from '../../Cache'
import { accessorInterceptors } from '../../Interceptor'

export type DataContext = {
  accessor?: Accessor
  selection?: Selection
  extensions?: Extension[]
  value?: Value
}

export const interceptAccessor = (ctx: DataContext) => {
  if (!ctx.accessor) return

  accessorInterceptors.forEach(intercept => intercept(ctx.accessor!))
}

export const getExtensions = (ctx: DataContext) => {
  if (ctx.extensions) return ctx.extensions
  if (ctx.accessor) return ctx.accessor.extensions

  return []
}

export const getSelection = (ctx: DataContext) => {
  if (ctx.selection) return ctx.selection
  if (ctx.accessor) return ctx.accessor.selection

  return
}

export const getValue = (ctx: DataContext) => {
  if (ctx.value) return ctx.value
  if (ctx.accessor) return ctx.accessor.value

  return
}

export interface DataTrait {
  extension?: StaticExtension | ComputableExtension
  getData(ctx: DataContext): any
}
