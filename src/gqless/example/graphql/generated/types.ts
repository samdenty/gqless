import * as gql_extensions from '../extensions'

type gql_ExtensionData<TExtension> = TExtension extends (
  ...args: any[]
) => infer U
  ? U
  : TExtension

type gql_Scalar<
  TName extends string,
  TDefaultType
> = TName extends keyof typeof gql_extensions
  ? gql_ExtensionData<typeof gql_extensions[TName]>
  : TDefaultType

type gql_MergeExtension<TExtension, TType> = Omit<TType, keyof TExtension> &
  {
    [K in keyof TExtension]: K extends keyof TType
      ? gql_MergeExtension<gql_ExtensionData<TExtension[K]>, TType[K]>
      : gql_ExtensionData<TExtension[K]>
  }

type gql_FieldsExtension<
  TName extends string,
  TType
> = TName extends keyof typeof gql_extensions
  ? gql_MergeExtension<gql_ExtensionData<typeof gql_extensions[TName]>, TType>
  : TType

export type Query = gql_FieldsExtension<
  'Query',
  {
    /**
     * Current signed in user
     */
    me?: User

    /**
     * Fetch a user by ID
     */
    user: ((args: { id?: ID }) => User | null) & User

    /**
     * All users stored in the database
     */
    users: ((args: { limit?: Int }) => (User)[]) & (User)[]
    a?: A

    /**
     * @deprecated use the user field instead
     */
    getUser: ((args: { id?: ID }) => User | null) & User

    /**
     * @deprecated use the users field instead
     */
    getUsers: ((args: { id?: ID }) => (User)[]) & (User)[]
    testOrUser?: TestOrUser
    test?: TestB | TestC
    testWithInput: (args: {
      id?: String
      ids: (String)[]
      input?: InputObj
    }) => Int | null
  }
>

export type User = gql_FieldsExtension<
  'User',
  {
    id: ID
    name?: String
    age?: Int
    description?: String
    avatarUrl: (args: { size?: Int }) => String | null
    profileUrl?: String
    following?: (User | null)[]
    followers?: (User | null)[]
    b?: String
    c?: String
    d?: String
  }
>

export type ID = gql_Scalar<'ID', string>

export type String = gql_Scalar<'String', string>

export type Int = gql_Scalar<'Int', number>

export type A = gql_FieldsExtension<
  'A',
  {
    b?: B
  }
>

export type B = gql_FieldsExtension<
  'B',
  {
    c?: Int
    d?: Int
  }
>

export type TestOrUser = User | TestB

export type TestB = gql_FieldsExtension<
  'TestB',
  {
    a?: String
    b?: String
  }
>

export type Test = gql_FieldsExtension<
  'Test',
  {
    a?: String
  }
>

export interface InputObj {
  a: String
}

export type Mutation = gql_FieldsExtension<
  'Mutation',
  {
    deleteUser: (args: { id: ID }) => Int
  }
>

export type __Schema = gql_FieldsExtension<
  '__Schema',
  {
    /**
     * A list of all types supported by this server.
     */
    types: (__Type)[]

    /**
     * The type that query operations will be rooted at.
     */
    queryType: __Type

    /**
     * If this server supports mutation, the type that mutation operations will be rooted at.
     */
    mutationType?: __Type

    /**
     * If this server support subscription, the type that subscription operations will be rooted at.
     */
    subscriptionType?: __Type

    /**
     * A list of all directives supported by this server.
     */
    directives: (__Directive)[]
  }
>

export type __Type = gql_FieldsExtension<
  '__Type',
  {
    kind: __TypeKind
    name?: String
    description?: String
    fields: ((args: { includeDeprecated?: Boolean }) => (__Field)[] | null) &
      (__Field)[]
    interfaces?: (__Type)[]
    possibleTypes?: (__Type)[]
    enumValues: ((args: {
      includeDeprecated?: Boolean
    }) => (__EnumValue)[] | null) &
      (__EnumValue)[]
    inputFields?: (__InputValue)[]
    ofType?: __Type
  }
>

export type Boolean = gql_Scalar<'Boolean', boolean>

export type __Field = gql_FieldsExtension<
  '__Field',
  {
    name: String
    description?: String
    args: (__InputValue)[]
    type: __Type
    isDeprecated: Boolean
    deprecationReason?: String
  }
>

export type __InputValue = gql_FieldsExtension<
  '__InputValue',
  {
    name: String
    description?: String
    type: __Type

    /**
     * A GraphQL-formatted string representing the default value for this input value.
     */
    defaultValue?: String
  }
>

export type __EnumValue = gql_FieldsExtension<
  '__EnumValue',
  {
    name: String
    description?: String
    isDeprecated: Boolean
    deprecationReason?: String
  }
>

export type __Directive = gql_FieldsExtension<
  '__Directive',
  {
    name: String
    description?: String
    locations: (__DirectiveLocation)[]
    args: (__InputValue)[]

    /**
     * @deprecated Use `locations`.
     */
    onOperation: Boolean

    /**
     * @deprecated Use `locations`.
     */
    onFragment: Boolean

    /**
     * @deprecated Use `locations`.
     */
    onField: Boolean
  }
>

export type TestC = gql_FieldsExtension<
  'TestC',
  {
    a?: String
    c?: String
  }
>

export interface fake__color {
  red255?: Int
  green255?: Int
  blue255?: Int
}

export interface fake__options {
  useFullAddress?: Boolean
  minMoney?: Float
  maxMoney?: Float
  decimalPlaces?: Int
  imageWidth?: Int
  imageHeight?: Int
  imageCategory?: fake__imageCategory
  randomizeImageUrl?: Boolean
  emailProvider?: String
  passwordLength?: Int
  loremSize?: fake__loremSize
  dateFormat?: String
  baseColor?: fake__color
  minNumber?: Float
  maxNumber?: Float
  precisionNumber?: Float
}

export type Float = gql_Scalar<'Float', number>

export type examples__JSON = gql_Scalar<'examples__JSON', any>

var q: Query
q.isQuery
var u: User
// u.isAUser
// u.following.isFollowing

// q.isQuery
// q.me.name
// q.users[0].name
