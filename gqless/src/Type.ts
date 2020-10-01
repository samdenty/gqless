import { Variable } from './Variable'

type TypeName = string
type TypeNameWithArguments<
  TName extends TypeName = TypeName,
  TArgs extends InputFields = InputFields
> = readonly [TName, TArgs]

type Union<PossibleTypes extends TypeName = TypeName> = readonly PossibleTypes[]

type Interface<Implementations extends TypeName = TypeName> = readonly [
  Fields,
  ...Implementations[]
]
interface InputFields {
  [K: string]: TypeName
}

type Field = TypeName | TypeNameWithArguments
interface Fields {
  [K: string]: Field
}

type Enum<TValue extends string = string,TAliases extends number | string = string | number> = 'enum' | Record<TValue, TAliases>

type Type = Fields | Union | Interface | Enum
interface Schema {
  [K: string]: Type
}


type EvaluateType<T> = T extends Function
  ? T
  : 0 extends 1 & T
  ? T
  : T extends infer U
  ? { [K in keyof U]: U[K] }
  : never

type IfArgsRequired<TFields extends Fields, Y, N> = {
  [K in keyof TFields]: TFields[K] extends `${string}!` ? true : never
}[keyof TFields] extends never
  ? N
  : Y

type NullableKeys<T> = { [K in keyof T]: null extends T[K] ? K : never }[keyof T];
type NullableOptional<T> = Pick<T, Exclude<keyof T, NullableKeys<T>>> & Partial<Pick<T, NullableKeys<T>>>;

type WithVariables<T> = T extends object
  ? {
      [K in keyof T]:
        | WithVariables<T[K]>
        | Variable<WithVariables<Exclude<T[K], undefined>>>
    }
  : T

type InputData<
  TSchema extends Schema,
  TName extends string
> = TName extends `${infer TName}!` ? NonNullable<InputData<TSchema,TName>>: (TSchema[TName] extends InputFields
  ? InputFieldsData<TSchema, TSchema[TName]>
  : TSchema[TName] extends Enum<infer TValue, infer TAliases> ?
  'a' extends (TValue & 'a') ? string: TValue|TAliases
  : ScalarData<TName>) | null

type InputFieldsData<
  TSchema extends Schema,
  TField extends InputFields
> = WithVariables<NullableOptional<
  {
    -readonly [K in keyof TField]: InputData<TSchema, TField[K]>
  }
>>

type FieldData<TSchema extends Schema, TName extends Field> = EvaluateType<
  TName extends TypeNameWithArguments<infer TName, infer TArgs>
    ? IfArgsRequired<
        TArgs,
        (args: InputFieldsData<TSchema, TArgs>) => TypeData<TSchema, TName>,
        (args?: InputFieldsData<TSchema, TArgs>) => TypeData<TSchema, TName>
      >
    : TName extends TypeName
    ? TypeData<TSchema, TName>
    : never
>

type FieldsData<
  TSchema extends Schema,
  TName extends string
> = TSchema[TName] extends Fields
  ? EvaluateType<
      {
        readonly __typename: TName
      } & {
        -readonly [K in keyof TSchema[TName]]: FieldData<
          TSchema,
          TSchema[TName][K]
        >
      }
    >
  : never

type ScalarData<TName extends string> = TName extends 'String' | 'ID'
  ? string
  : TName extends 'Float' | 'Int'
  ? number
  : TName extends 'Boolean'
  ? boolean
  : any

export type TypeData<
  TSchema extends Schema,
  TName extends string
> = TName extends `${infer TName}!`
  ? NonNullable<TypeData<TSchema, TName>>
  :
      | (TName extends `[${infer TName}]`
          ? TypeData<TSchema, TName>[]
          : TName extends keyof TSchema
          ? TSchema[TName] extends (Interface<infer TName> | Union<infer TName>)
            ? TypeData<TSchema, TName>
            : TSchema[TName] extends Fields
            ? FieldsData<TSchema, TName>
            : TSchema[TName] extends Enum<infer TValue>
            ? TValue
            : never
          : ScalarData<TName>)
      | null

export function createSchema<T extends Schema>(schema: T) {
  return schema
}
