type RequiredKeys<T> = {
  [K in keyof T]-?: ({} extends { [P in K]: T[K] } ? never : K)
}[keyof T]

export type ArgsMap = '$args'

type RecurseDataNode<T extends any> = {
  [key in Exclude<keyof T, ArgsMap>]: DataNode<T[key], T[ArgsMap][key]>
}

interface DataNodeCallbackOptions {
  alias?: string
}

type DataNodeCallback<T, Args> = RequiredKeys<Args> extends never
  ? (args?: Args, options?: DataNodeCallbackOptions) => DataNode<T>
  : (args: Args, options?: DataNodeCallbackOptions) => DataNode<T>

interface DataNodeValuePromise<T>
  extends Pick<
    Promise<
      T extends any[] ? RecurseDataNode<T> : T extends object ? DataNode<T> : T
    >,
    'then' | 'catch'
  > {}

export type DataNode<T = any, Args = unknown> = (T extends object
  ? RecurseDataNode<T>
  : unknown) &
  (Args extends object ? DataNodeCallback<T, Args> : unknown) &
  (T extends object ? {} : DataNodeValuePromise<T>)
