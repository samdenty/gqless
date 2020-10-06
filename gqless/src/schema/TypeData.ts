import { Variable } from '../Variable'
import {
  Schema,
  Field,
  Fields,
  InputFields,
  TypeNameWithArguments,
  Enum,
  Interface,
  Union,
} from './Schema'

type ArgsRequired<TFields extends Fields> = {
  [K in keyof TFields]: TFields[K] extends `${string}!` ? true : never
}[keyof TFields] extends never
  ? false
  : true

type NullableKeys<T> = {
  [K in keyof T]: null extends T[K] ? K : never
}[keyof T]
type NullableOptional<T> = Pick<T, Exclude<keyof T, NullableKeys<T>>> &
  Partial<Pick<T, NullableKeys<T>>>

type MaybeVar<T> =
  | WithVariables<T>
  | Variable<WithVariables<Exclude<T, undefined>>>
type WithVariables<T> = T extends object
  ? {
      [K in keyof T]: T[K] extends MaybeVar<infer U>
        ? MaybeVar<U>
        : MaybeVar<T[K]>
    }
  : T

export type NamedInputData<
  TSchema extends Schema,
  Name extends string,
  Cache extends Record<string, any> = {},
  Cached = true
> = TSchema[Name] extends InputFields
  ? Cached extends true
    ? Name extends keyof Cache
      ? Cache[Name]
      : InputFieldsData<TSchema, Cache, TSchema[Name]>
    : InputFieldsData<TSchema, Cache, TSchema[Name]>
  : TSchema[Name] extends Enum<infer Value, infer Aliases>
  // Check if the value has become a generic string type
  ? 'a' extends Value & 'a'
    ? Value
    : Value | Aliases
  : ScalarData<Name>

export type InputData<
  TSchema extends Schema,
  Name extends string,
  Cache extends Record<string, any> = {},
  Cached = true
> = Name extends `${infer Name}!`
  ? NonNullable<InputData<TSchema, Name, Cache, Cached>>
  : Name extends `[${infer Name}]`
  ? InputData<TSchema, Name, Cache, Cached>[]
  : NamedInputData<TSchema, Name, Cache, Cached> | null

type InputFieldsData<
  TSchema extends Schema,
  Cache extends Record<string, any>,
  Field extends InputFields
> = WithVariables<
  NullableOptional<
    {
      -readonly [K in keyof Field]: InputData<TSchema, Field[K], Cache>
    }
  >
>

type FieldData<
  TSchema extends Schema,
  Cache extends Record<string, any>,
  Name extends Field
> = Name extends TypeNameWithArguments<infer Name, infer Args>
  ? ArgsRequired<Args> extends true
    ? (
        args: InputFieldsData<TSchema, Cache, Args>
      ) => TypeData<TSchema, Name, Cache>
    : TypeData<TSchema, Name, Cache> &
        ((
          args?: InputFieldsData<TSchema, Cache, Args>
        ) => TypeData<TSchema, Name, Cache>)
  : Name extends string
  ? TypeData<TSchema, Name, Cache>
  : never

type ScalarData<Name extends string> = Name extends 'String' | 'ID'
  ? string
  : Name extends 'Float' | 'Int'
  ? number
  : Name extends 'Boolean'
  ? boolean
  : any

type ComputeData<
  TSchema extends Schema,
  Cache extends Record<string, any>,
  Name extends string
> = TSchema[Name] extends Fields
  ? {
      readonly __typename: Name
    } & {
      -readonly [K in keyof TSchema[Name]]: FieldData<
        TSchema,
        Cache,
        TSchema[Name][K]
      >
    }
  : TSchema[Name] extends Enum<infer Value>
  ? Value
  : never

export type NamedTypeData<
  TSchema extends Schema,
  Name extends string,
  Cache extends Record<string, any> = {},
  Cached = true
> = Name extends keyof TSchema
  ? TSchema[Name] extends Interface<infer Name> | Union<infer Name>
    ? NamedTypeData<TSchema, Name, Cache, Cached>
    : Cached extends true
    ? Name extends keyof Cache
      ? Cache[Name]
      : ComputeData<TSchema, Cache, Name>
    : ComputeData<TSchema, Cache, Name>
  : ScalarData<Name>

export type TypeData<
  TSchema extends Schema,
  Name extends string,
  Cache extends Record<string, any> = {},
  Cached = true
> = Name extends `${infer Name}!`
  ? NonNullable<TypeData<TSchema, Name, Cache, Cached>>
  :
      | (Name extends `[${infer Name}]`
          ? TypeData<TSchema, Name, Cache, Cached>[]
          : NamedTypeData<TSchema, Name, Cache, Cached>)
      | null
