import { Accessor } from '../../Accessor'
import { Value } from '../../Cache'

export const REDIRECT = Symbol('Extension#redirect')
export const GET_KEY = Symbol('Extension#getKey')
export const INDEX = Symbol('Extension#index')

export interface ProxyExtension<TData extends object = object> {
  [key: string]: any

  [REDIRECT]?(
    args: Record<string, any> | undefined,
    helpers: {
      match: (data: any) => Value | undefined
    }
  ): Value | undefined

  [GET_KEY]?(data: TData): any
}

export interface ArrayExtension<TArray extends object[] = object[]>
  extends ProxyExtension<TArray> {
  [INDEX]?: Extension<TArray[number]>
  [GET_KEY]?(data: TArray[number]): any
}

export type ObjectExtension<TObject extends {} = {}> = ProxyExtension<TObject> &
  { [K in keyof TObject]?: Extension<TObject[K]> }

export type ScalarExtension<TData extends unknown = unknown> = TData

export type UExtension<TData = unknown> = TData extends object
  ? TData extends any[]
    ? ArrayExtension<TData>
    : ObjectExtension<TData>
  : ScalarExtension<TData>

export type Extension<TData = any> =
  | UExtension<TData>
  | ((data: TData) => UExtension<TData>)
