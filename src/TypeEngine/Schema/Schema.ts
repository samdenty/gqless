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

export interface Schema {
  queryType: string
  mutationType?: string

  types: { [key: string]: SchemaType }
}

export interface SchemaType {
  name: string
  kind: SchemaKind
  fields: { [key: string]: SchemaField }

  possibleTypes?: string[]
}

export interface SchemaField {
  args: boolean
  type: SchemaFieldType
}

export interface SchemaFieldType {
  kind: SchemaKind
  name?: string
  ofType?: SchemaFieldType
}
