type RequiredKeys<T> = {
  [K in keyof T]-?: ({} extends { [P in K]: T[K] } ? never : K)
}[keyof T]

export type ArgsMap = '$args'

type RecurseDataNode<T extends any> = {
  [key in Exclude<keyof T, ArgsMap>]: DataProxy<T[key], T[ArgsMap][key]>
}

interface DataNodeCallbackOptions {
  alias?: string
}

type DataNodeCallback<T, Args> = RequiredKeys<Args> extends never
  ? (args?: Args, options?: DataNodeCallbackOptions) => DataProxy<T>
  : (args: Args, options?: DataNodeCallbackOptions) => DataProxy<T>

interface DataNodeValuePromise<T>
  extends Pick<
    Promise<
      T extends any[] ? RecurseDataNode<T> : T extends object ? DataProxy<T> : T
    >,
    'then' | 'catch'
  > {}

type DataNodeValue<T> = T

export type DataProxy<T = any, Args = unknown> = (T extends object
  ? RecurseDataNode<T>
  : unknown) &
  (Args extends object ? DataNodeCallback<T, Args> : unknown) &
  (T extends object ? {} : DataNodeValue<T>)
