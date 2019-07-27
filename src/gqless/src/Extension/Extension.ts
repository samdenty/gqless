import { Accessor } from '../Accessor'

export const GET_KEY = Symbol('Extension#getKey')
export const OF_NODE = Symbol('Extension#ofNode')

export type IExtension<TData> = TData extends object
  ? ({ [K in string]: any } &
      (TData extends any[]
        ? {
            [GET_KEY]?(data: TData[number]): string | number
            [OF_NODE]?: Extension<TData[number], TData>
          }
        : ({ [K in keyof TData]?: Extension<TData[K], TData> } & {
            [GET_KEY]?(data: TData): string | number
          })))
  : TData

export type Extension<TData = any, TParentData = any> =
  | IExtension<TData>
  | ((
      data: TData,
      parent: TParentData,
      accessor: Accessor
    ) => IExtension<TData>)
