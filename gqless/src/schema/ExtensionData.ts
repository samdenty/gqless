import {
  Field,
  Fields,
  Interface,
  Schema,
  TypeNameWithArguments,
  Union,
} from './Schema'
import { TypeData } from './TypeData'

interface Extension<Args, Data> {
  $redirect?(args: Args extends object ? Args : void): any
  $key?(data: Data): any
}

interface ArrayExtension<Args, Data, IndexExtension>
  extends Extension<Args, Data> {
  $i?: IndexExtension
}

type ExtensionField<
  TSchema extends Schema,
  Cache extends Record<string, any>,
  Name extends Field
> = Name extends TypeNameWithArguments<infer Name, infer Args>
  ? ExtensionData<TSchema, Name, Cache, Args>
  : Name extends string
  ? ExtensionData<TSchema, Name, Cache>
  : never

type ComputeExtensionData<
  TSchema extends Schema,
  Cache extends Record<string, any>,
  Name extends string,
  Args = false,
  ReturnAny = false
> = Name extends `${infer Name}!`
  ? ComputeExtensionData<TSchema, Cache, Name, Args, ReturnAny>
  : Name extends `[${infer Name}]`
  ? ArrayExtension<
      Args,
      TypeData<TSchema, `[${Name}]!`, Cache>,
      ComputeExtensionData<TSchema, Cache, Name, Args>
    >
  : TSchema[Name] extends Interface<infer Name> | Union<infer Name>
  ? ExtensionData<TSchema, Name, Cache>
  : TSchema[Name] extends Fields
  ? {
      -readonly [K in keyof TSchema[Name]]?: ExtensionField<
        TSchema,
        Cache,
        TSchema[Name][K]
      >
    } &
      Extension<Args, TypeData<TSchema, `${Name}!`, Cache>>
  : ReturnAny extends true
  ? any
  : never

export type ExtensionData<
  TSchema extends Schema,
  Name extends string,
  Cache extends Record<string, any> = {},
  Args = false
> = Args extends object
  ?
      | ((
          data: TypeData<TSchema, `${Name}!`, Cache>,
          args: Args
        ) => ComputeExtensionData<TSchema, Cache, Name, Args, true>)
      | ComputeExtensionData<TSchema, Cache, Name, Args>
  :
      | ((
          data: TypeData<TSchema, `${Name}!`, Cache>
        ) => ComputeExtensionData<TSchema, Cache, Name, Args, true>)
      | ComputeExtensionData<TSchema, Cache, Name, Args>
