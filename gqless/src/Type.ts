import {
  Tuple,
  UnshiftTuple,
  MapTupleByKey,
  LastTupleValue,
  LastTupleValueForKey,
  TupleKeys,
} from '@gqless/utils'
import { Variable } from './Variable'
import { INDEX, GET_KEY } from './Node'

type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K
}[keyof T]
type UnionToIntersection<U> = (U extends any
  ? (k: U) => void
  : never) extends ((k: infer I) => void)
  ? I
  : never
type IfAny<T, Y, N> = 0 extends (1 & T) ? Y : N
type Overwrite<A, B> = A extends (infer U)[]
  ? U[] & // Special handling for arrays, to reduce type complexity
      {
        [K in Exclude<keyof A, keyof U[]> | keyof B]: K extends keyof B
          ? B[K]
          : K extends Exclude<keyof A, keyof U[]>
          ? A[K]
          : never
      }
  : {
      [K in keyof (A & B)]: K extends keyof B
        ? B[K]
        : K extends keyof A
        ? A[K]
        : never
    }

enum Kind {
  scalar,
  enum,
  fields,
}

type Type<TKind extends Kind = any, TData = any, TExtension = any> = {
  kind: TKind
  data: TData
  extension: TExtension
}

type ExtensionData<TExtension> = TExtension extends (...args: any[]) => infer U
  ? U
  : TExtension

type TypeExtension<TType extends ValidType> = TType extends Type
  ? IfAny<TType['extension'], never, ExtensionData<TType['extension']>>
  : never

type ValidType = ValidType[] | Type | null

export type ScalarType<TData = any, TExtension = any> = Type<
  Kind.scalar,
  TData,
  TExtension
>

export type EnumType<TData = any, TExtension = any> = Type<
  Kind.enum,
  TData,
  TExtension
>

type FieldsRecord = Record<string, ValidType | FieldsTypeArg>
export type FieldsType<
  TData extends FieldsRecord = any,
  TExtension = any
> = Type<Kind.fields, TData, TExtension>

type ArgsRecord = Record<string, any>
export type FieldsTypeArg<
  TArgs extends ArgsRecord = any,
  TType extends ValidType = any
> = {
  ofType: TType
  args: TArgs
}

type WithVariables<TArgs extends ArgsRecord> = TArgs extends object
  ? {
      [K in keyof TArgs]:
        | WithVariables<TArgs[K]>
        | Variable<WithVariables<Exclude<TArgs[K], undefined>>>
    }
  : TArgs

type ArgsFn<
  TArgs extends ArgsRecord,
  TType extends ValidType,
  TExtension
> = RequiredKeys<TArgs> extends never
  ? ((args?: TArgs) => TypeData<TType, TExtension>) &
      (TType extends (ScalarType | EnumType)
        ? unknown
        : TypeData<TType, TExtension>)
  : (args: TArgs) => TypeData<TType, TExtension>

// Map extensions by key and get extension data for each
type MapExtensionData<T extends Tuple, Key extends TupleKeys<T>> = {
  [K in keyof MapTupleByKey<T, Key>]: ExtensionData<MapTupleByKey<T, Key>[K]>
}

// Add new properties from extension
type CustomExtensionData<
  TExtensions extends Tuple
> = keyof TExtensions extends never
  ? {}
  : UnionToIntersection<TExtensions[keyof TExtensions]> extends infer U
  ? Omit<
      {
        [K in keyof U]: U[K] extends never
          ? LastTupleValueForKey<TExtensions, K>
          : U[K]
      },
      typeof INDEX | typeof GET_KEY
    >
  : never

type FieldsData<
  TFields extends FieldsType,
  TExtensions extends Tuple
> = keyof TFields['data'] extends never
  ? CustomExtensionData<TExtensions>
  : {
      [K in keyof (TFields['data'] &
        CustomExtensionData<TExtensions>)]: K extends keyof TFields['data']
        ? TFields['data'][K] extends FieldsTypeArg<infer TArgs, infer TType>
          ? ArgsFn<
              WithVariables<TArgs>,
              TType,
              MapExtensionData<TExtensions, K>
            >
          : TypeData<TFields['data'][K], MapExtensionData<TExtensions, K>>
        : CustomExtensionData<TExtensions>[K]
    }

type ArrayData<
  TArray extends ValidType[],
  TExtensions extends Tuple
> = Overwrite<
  {
    [K in keyof TArray]: TArray[K] extends ValidType
      ? TypeData<TArray[K], MapExtensionData<TExtensions, typeof INDEX>>
      : TArray[K]
  },
  CustomExtensionData<TExtensions>
>

// Get the last extension from the extensions tuple
type ScalarData<
  TScalar extends ScalarType | EnumType,
  TExtensions extends Tuple
> = LastTupleValue<TExtensions> extends never
  ? TScalar['data']
  : LastTupleValue<TExtensions>

// Unshift the primary extension for a type to the extensions tuple
type UnshiftExtension<
  TExtensions,
  TType extends ValidType
> = keyof TypeExtension<TType> extends never
  ? TExtensions
  : UnshiftTuple<TExtensions, TypeExtension<TType>>

export type TypeData<
  TType extends ValidType,
  TExtensions extends Tuple = {}
> = TType extends Array<any>
  ? ArrayData<TType, UnshiftExtension<TExtensions, TType>>
  : TType extends (ScalarType | EnumType)
  ? ScalarData<TType, UnshiftExtension<TExtensions, TType>>
  : TType extends FieldsType
  ? FieldsData<TType, UnshiftExtension<TExtensions, TType>>
  : null
