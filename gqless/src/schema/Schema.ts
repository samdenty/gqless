export type TypeNameWithArguments<
  Name extends string = string,
  Args extends InputFields = InputFields
> = readonly [Name, Args]

export type Union<
  PossibleTypes extends string = string
> = readonly PossibleTypes[]

export type Interface<Implementations extends string = string> = readonly [
  Fields,
  ...Implementations[]
]
export interface InputFields {
  [K: string]: string
}

export type Field = string | TypeNameWithArguments
export interface Fields {
  [K: string]: Field
}

export type Enum<
  TValue extends string = string,
  TAliases extends number | string = string | number
> = 'enum' | Record<TValue, TAliases>

type Type = Fields | Union | Interface | Enum
export type Schema<
  QueryType extends string = string,
  MutationType extends string = string
> = {
  $query: QueryType
  $mutation?: MutationType
} & {
  [K: string]: Type | string
}
