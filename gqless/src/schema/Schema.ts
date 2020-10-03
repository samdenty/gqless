export type TypeName = string
export type TypeNameWithArguments<
  name extends TypeName = TypeName,
  args extends InputFields = InputFields
> = readonly [name, args]

export type Union<
  PossibleTypes extends TypeName = TypeName
> = readonly PossibleTypes[]

export type Interface<Implementations extends TypeName = TypeName> = readonly [
  Fields,
  ...Implementations[]
]
export interface InputFields {
  [K: string]: TypeName
}

export type Field = TypeName | TypeNameWithArguments
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
