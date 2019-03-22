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

export interface SchemaType {
  name: string
  kind: SchemaKind
  fields: { [key: string]: SchemaField }

  possibleTypes?: string[]
}

export interface SchemaField {
  name: string
  args?: { [key: string]: SchemaFieldType }
  type: SchemaFieldType
}

type BaseSchemaFieldType<TKind extends SchemaKind> = {
  kind: TKind
  nullable: boolean
}

export type SchemaFieldList = BaseSchemaFieldType<ListKind> & {
  ofType: SchemaFieldType
}

export type SchemaFieldRef = BaseSchemaFieldType<
  Exclude<SchemaKind, ListKind>
> & {
  name: string
}

export type SchemaFieldType = SchemaFieldList | SchemaFieldRef
