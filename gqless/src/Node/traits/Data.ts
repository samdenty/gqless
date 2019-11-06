import { IDataContext } from '../abstract'
import { StaticExtension, ComputableExtension } from '../Extension'

export interface DataTrait {
  extension?: StaticExtension | ComputableExtension
  getData(ctx: IDataContext): any
}

export const hasDataTrait = (obj: any): obj is DataTrait => {
  return (obj as DataTrait)?.getData !== undefined
}
