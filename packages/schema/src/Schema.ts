type ObjectKind = 'OBJECT'
type InterfaceKind = 'INTERFACE'
type ScalarKind = 'SCALAR'
type ListKind = 'LIST'
type UnionKind = 'UNION'
type EnumKind = 'ENUM'
type InputObjectKind = 'INPUT_OBJECT'

export type SchemaKind =
  | ListKind
  | ObjectKind
  | ScalarKind
  | InterfaceKind
  | UnionKind
  | EnumKind
  | InputObjectKind

export interface Schema<T = any> {
  queryType: string
  mutationType?: string

  types: { [key in keyof T]: SchemaType }
}

interface BaseSchemaType<TKind extends SchemaKind> {
  kind: TKind
  name: string
}

export type SchemaFields = Record<string, SchemaField>

export type SchemaEnumType = BaseSchemaType<EnumKind> & {
  enumValues: string[]
}
export type SchemaObjectType = BaseSchemaType<ObjectKind> & {
  fields: SchemaFields
  interfaces: string[]
}

export type SchemaInterfaceType = BaseSchemaType<InterfaceKind> & {
  possibleTypes: string[]
  fields: SchemaFields
}

export type SchemaUnionType = BaseSchemaType<UnionKind> & {
  possibleTypes: string[]
}

export type SchemaInputFields = Record<string, SchemaInputField>
export type SchemaInputType = BaseSchemaType<InputObjectKind> & {
  inputFields: SchemaInputFields
}

export type SchemaType =
  | SchemaEnumType
  | SchemaObjectType
  | SchemaUnionType
  | SchemaInterfaceType
  | SchemaInputType
  | BaseSchemaType<
      Exclude<
        SchemaKind,
        ObjectKind | InterfaceKind | UnionKind | InputObjectKind | EnumKind
      >
    >

export type SchemaFieldArgs = Record<string, Type>

export interface SchemaField {
  name: string
  type: Type
  args?: SchemaFieldArgs

  description?: string
  isDeprecated?: boolean
  deprecationReason?: string
}

export interface SchemaInputField {
  name: string
  type: Type
}

type BaseType<TKind extends SchemaKind> = {
  kind: TKind
  nullable: boolean
}

export type ListType = BaseType<ListKind> & {
  ofType: Type
}

export type ObjectType = BaseType<Exclude<SchemaKind, ListKind>> & {
  name: string
}

export type Type = ListType | ObjectType
