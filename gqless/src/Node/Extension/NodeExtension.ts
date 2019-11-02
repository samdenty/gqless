import { deepJSONEqual } from '../../utils'
import { Value } from '../../Cache'

export const REDIRECT = Symbol('Extension#redirect')
export const INDEX = Symbol('Extension#index')

export const GET_KEY = Symbol('Extension#getKey')
export const keyIsValid = (key: unknown) => key != null
export const keyIsEqual = (a: unknown, b: unknown) => deepJSONEqual(a, b)

export type RedirectHelpers = {
  instances: Set<Value>
  match(data: any): Value | undefined
  getByKey<TKey = unknown>(key: TKey): Value | undefined
}

export interface ProxyExtension<TData extends object = object> {
  [key: string]: any

  [REDIRECT]?(
    args: Record<string, any> | undefined,
    helpers: RedirectHelpers
  ): Value | undefined

  [GET_KEY]?(data: TData): any
}

export interface ArrayNodeExtension<TArray extends unknown[] = unknown[]>
  extends ProxyExtension<TArray> {
  [INDEX]?: NodeExtension<TArray[number]>
  [GET_KEY]?(data: TArray[number]): any
}

export type ObjectNodeExtension<TObject extends {} = {}> = ProxyExtension<
  TObject
> &
  { [K in keyof TObject]?: NodeExtension<TObject[K]> }

export type ScalarNodeExtension<TData extends unknown = unknown> = TData

export type UNodeExtension<TData = unknown> = TData extends object
  ? TData extends any[]
    ? ArrayNodeExtension<TData>
    : ObjectNodeExtension<TData>
  : ScalarNodeExtension<TData>

export type NodeExtension<TData = any> =
  | UNodeExtension<TData>
  | ((data: TData) => UNodeExtension<TData>)
