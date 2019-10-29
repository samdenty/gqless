import { deepJSONEqual } from '../../utils'
import { Value } from '../../Cache'

export const REDIRECT = Symbol('Extension#redirect')
export const INDEX = Symbol('Extension#index')

export const GET_KEY = Symbol('Extension#getKey')
export const keyIsValid = (key: unknown) => key != null
export const keyIsEqual = (a: unknown, b: unknown) => deepJSONEqual(a, b)

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

export interface ArrayExtension<TArray extends unknown[] = unknown[]>
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
