import * as extensions from '../extensions'
import {
  TypeData,
  FieldsType,
  FieldsTypeArg,
  ScalarType,
  EnumType,
} from 'gqless'

type Extension<TName extends string> = TName extends keyof typeof extensions
  ? typeof extensions[TName]
  : any

/**
 * @name Query
 * @type OBJECT
 */
type t_Query = FieldsType<
  {
    __typename: t_String<'Query'>

    /**
     * Current signed in user
     */
    me: t_User | null

    /**
     * Fetch a user by ID
     */
    user: FieldsTypeArg<{ id?: string | null }, t_User | null>

    /**
     * All users stored in the database
     */
    users: FieldsTypeArg<{ limit?: number | null }, (t_User)[]>
    stringArray: ((t_String)[] | null)[]
    a: t_A | null

    /**
     * @deprecated use the user field instead
     */
    getUser: FieldsTypeArg<{ id?: string | null }, t_User | null>

    /**
     * @deprecated use the users field instead
     */
    getUsers: FieldsTypeArg<{ id?: string | null }, (t_User)[]>
    testOrUser: t_TestOrUser | null
    test: t_TestB | t_TestC | null
    testWithInput: FieldsTypeArg<
      { id?: string | null; ids: (string)[]; input?: InputObj | null },
      t_Int | null
    >
  },
  Extension<'Query'>
>

/**
 * @name User
 * @type OBJECT
 */
type t_User = FieldsType<
  {
    __typename: t_String<'User'>
    id: t_ID
    test: FieldsTypeArg<{ enum?: MyEnum | null }, t_MyEnum | null>
    name: t_String | null
    age: t_Int | null
    description: t_String | null
    /**
     * CDN URL of users avatar
     */
    avatarUrl: FieldsTypeArg<
      {
        /**
         * Resolution for the image
         */
        size?: number | null
      },
      t_String | null
    >
    profileUrl: t_String | null
    following: (t_User | null)[] | null
    followers: (t_User | null)[] | null
    // b: t_String | null
    // c: t_String | null
    // d: t_String | null
  },
  Extension<'User'>
>

/**
 * @name ID
 * @type SCALAR
 */
type t_ID<T extends string = string> = ScalarType<T, Extension<'ID'>>

/**
 * @name MyEnum
 * @type ENUM
 */
type t_MyEnum = EnumType<'ACTIVE' | 'DISABLED'>

/**
 * @name String
 * @type SCALAR
 */
type t_String<T extends string = string> = ScalarType<T, Extension<'String'>>

/**
 * @name Int
 * @type SCALAR
 */
type t_Int<T extends number = number> = ScalarType<T, Extension<'Int'>>

/**
 * @name A
 * @type OBJECT
 */
type t_A = FieldsType<
  {
    __typename: t_String<'A'>
    b: t_B | null
  },
  Extension<'A'>
>

/**
 * @name B
 * @type OBJECT
 */
type t_B = FieldsType<
  {
    __typename: t_String<'B'>
    c: t_Int | null
    d: t_Int | null
  },
  Extension<'B'>
>

/**
 * @name TestOrUser
 * @type UNION
 */
type t_TestOrUser = t_User | t_TestB

/**
 * @name TestB
 * @type OBJECT
 * @implements Test
 */
type t_TestB = FieldsType<
  {
    __typename: t_String<'TestB'>
    a: t_String | null
    b: t_String | null
  },
  Extension<'TestB'>
>

/**
 * @name Test
 * @type INTERFACE
 */
type t_Test = t_TestB | t_TestC

/**
 * @name InputObj
 * @type INPUT_OBJECT
 */
export type InputObj = { a: string }

/**
 * @name Mutation
 * @type OBJECT
 */
type t_Mutation = FieldsType<
  {
    __typename: t_String<'Mutation'>
    deleteUser: FieldsTypeArg<{ id: string }, t_Int>
  },
  Extension<'Mutation'>
>

/**
 * @name __Schema
 * @type OBJECT
 */
type t___Schema = FieldsType<
  {
    __typename: t_String<'__Schema'>

    /**
     * A list of all types supported by this server.
     */
    types: (t___Type)[]

    /**
     * The type that query operations will be rooted at.
     */
    queryType: t___Type

    /**
     * If this server supports mutation, the type that mutation operations will be rooted at.
     */
    mutationType: t___Type | null

    /**
     * If this server support subscription, the type that subscription operations will be rooted at.
     */
    subscriptionType: t___Type | null

    /**
     * A list of all directives supported by this server.
     */
    directives: (t___Directive)[]
  },
  Extension<'__Schema'>
>

/**
 * @name __Type
 * @type OBJECT
 */
type t___Type = FieldsType<
  {
    __typename: t_String<'__Type'>
    kind: t___TypeKind
    name: t_String | null
    description: t_String | null
    fields: FieldsTypeArg<
      { includeDeprecated?: boolean | null },
      (t___Field)[] | null
    >
    interfaces: (t___Type)[] | null
    possibleTypes: (t___Type)[] | null
    enumValues: FieldsTypeArg<
      { includeDeprecated?: boolean | null },
      (t___EnumValue)[] | null
    >
    inputFields: (t___InputValue)[] | null
    ofType: t___Type | null
  },
  Extension<'__Type'>
>

/**
 * @name __TypeKind
 * @type ENUM
 */
type t___TypeKind = EnumType<
  | 'SCALAR'
  | 'OBJECT'
  | 'INTERFACE'
  | 'UNION'
  | 'ENUM'
  | 'INPUT_OBJECT'
  | 'LIST'
  | 'NON_NULL'
>

/**
 * @name Boolean
 * @type SCALAR
 */
type t_Boolean<T extends boolean = boolean> = ScalarType<
  T,
  Extension<'Boolean'>
>

/**
 * @name __Field
 * @type OBJECT
 */
type t___Field = FieldsType<
  {
    __typename: t_String<'__Field'>
    name: t_String
    description: t_String | null
    args: (t___InputValue)[]
    type: t___Type
    isDeprecated: t_Boolean
    deprecationReason: t_String | null
  },
  Extension<'__Field'>
>

/**
 * @name __InputValue
 * @type OBJECT
 */
type t___InputValue = FieldsType<
  {
    __typename: t_String<'__InputValue'>
    name: t_String
    description: t_String | null
    type: t___Type

    /**
     * A GraphQL-formatted string representing the default value for this input value.
     */
    defaultValue: t_String | null
  },
  Extension<'__InputValue'>
>

/**
 * @name __EnumValue
 * @type OBJECT
 */
type t___EnumValue = FieldsType<
  {
    __typename: t_String<'__EnumValue'>
    name: t_String
    description: t_String | null
    isDeprecated: t_Boolean
    deprecationReason: t_String | null
  },
  Extension<'__EnumValue'>
>

/**
 * @name __Directive
 * @type OBJECT
 */
type t___Directive = FieldsType<
  {
    __typename: t_String<'__Directive'>
    name: t_String
    description: t_String | null
    locations: (t___DirectiveLocation)[]
    args: (t___InputValue)[]

    /**
     * @deprecated Use `locations`.
     */
    onOperation: t_Boolean

    /**
     * @deprecated Use `locations`.
     */
    onFragment: t_Boolean

    /**
     * @deprecated Use `locations`.
     */
    onField: t_Boolean
  },
  Extension<'__Directive'>
>

/**
 * @name __DirectiveLocation
 * @type ENUM
 */
type t___DirectiveLocation = EnumType<
  | 'QUERY'
  | 'MUTATION'
  | 'SUBSCRIPTION'
  | 'FIELD'
  | 'FRAGMENT_DEFINITION'
  | 'FRAGMENT_SPREAD'
  | 'INLINE_FRAGMENT'
  | 'SCHEMA'
  | 'SCALAR'
  | 'OBJECT'
  | 'FIELD_DEFINITION'
  | 'ARGUMENT_DEFINITION'
  | 'INTERFACE'
  | 'UNION'
  | 'ENUM'
  | 'ENUM_VALUE'
  | 'INPUT_OBJECT'
  | 'INPUT_FIELD_DEFINITION'
>

/**
 * @name Episode
 * @type ENUM
 */
type t_Episode = EnumType<'NEWHOPE' | 'EMPIRE' | 'JEDI'>

/**
 * @name TestC
 * @type OBJECT
 * @implements Test
 */
type t_TestC = FieldsType<
  {
    __typename: t_String<'TestC'>
    a: t_String | null
    c: t_String | null
  },
  Extension<'TestC'>
>

/**
 * @name fake__Locale
 * @type ENUM
 */
type t_fake__Locale = EnumType<
  | 'az'
  | 'cz'
  | 'de'
  | 'de_AT'
  | 'de_CH'
  | 'en'
  | 'en_AU'
  | 'en_BORK'
  | 'en_CA'
  | 'en_GB'
  | 'en_IE'
  | 'en_IND'
  | 'en_US'
  | 'en_au_ocker'
  | 'es'
  | 'es_MX'
  | 'fa'
  | 'fr'
  | 'fr_CA'
  | 'ge'
  | 'id_ID'
  | 'it'
  | 'ja'
  | 'ko'
  | 'nb_NO'
  | 'nep'
  | 'nl'
  | 'pl'
  | 'pt_BR'
  | 'ru'
  | 'sk'
  | 'sv'
  | 'tr'
  | 'uk'
  | 'vi'
  | 'zh_CN'
  | 'zh_TW'
>

/**
 * @name fake__Types
 * @type ENUM
 */
type t_fake__Types = EnumType<
  | 'zipCode'
  | 'city'
  | 'streetName'
  | 'streetAddress'
  | 'secondaryAddress'
  | 'county'
  | 'country'
  | 'countryCode'
  | 'state'
  | 'stateAbbr'
  | 'latitude'
  | 'longitude'
  | 'colorName'
  | 'productCategory'
  | 'productName'
  | 'money'
  | 'productMaterial'
  | 'product'
  | 'companyName'
  | 'companyCatchPhrase'
  | 'companyBS'
  | 'dbColumn'
  | 'dbType'
  | 'dbCollation'
  | 'dbEngine'
  | 'pastDate'
  | 'futureDate'
  | 'recentDate'
  | 'financeAccountName'
  | 'financeTransactionType'
  | 'currencyCode'
  | 'currencyName'
  | 'currencySymbol'
  | 'bitcoinAddress'
  | 'internationalBankAccountNumber'
  | 'bankIdentifierCode'
  | 'hackerAbbr'
  | 'hackerPhrase'
  | 'imageUrl'
  | 'avatarUrl'
  | 'email'
  | 'url'
  | 'domainName'
  | 'ipv4Address'
  | 'ipv6Address'
  | 'userAgent'
  | 'colorHex'
  | 'macAddress'
  | 'password'
  | 'lorem'
  | 'firstName'
  | 'lastName'
  | 'fullName'
  | 'jobTitle'
  | 'phoneNumber'
  | 'number'
  | 'uuid'
  | 'word'
  | 'words'
  | 'locale'
  | 'filename'
  | 'mimeType'
  | 'fileExtension'
  | 'semver'
>

/**
 * @name fake__imageCategory
 * @type ENUM
 */
type t_fake__imageCategory = EnumType<
  | 'abstract'
  | 'animals'
  | 'business'
  | 'cats'
  | 'city'
  | 'food'
  | 'nightlife'
  | 'fashion'
  | 'people'
  | 'nature'
  | 'sports'
  | 'technics'
  | 'transport'
>

/**
 * @name fake__loremSize
 * @type ENUM
 */
type t_fake__loremSize = EnumType<
  'word' | 'words' | 'sentence' | 'sentences' | 'paragraph' | 'paragraphs'
>

/**
 * @name fake__color
 * @type INPUT_OBJECT
 */
export type fake__color = {
  red255: number | null
  green255: number | null
  blue255: number | null
}

/**
 * @name fake__options
 * @type INPUT_OBJECT
 */
export type fake__options = {
  useFullAddress: boolean | null
  minMoney: number | null
  maxMoney: number | null
  decimalPlaces: number | null
  imageWidth: number | null
  imageHeight: number | null
  imageCategory: fake__imageCategory | null
  randomizeImageUrl: boolean | null
  emailProvider: string | null
  passwordLength: number | null
  loremSize: fake__loremSize | null
  dateFormat: string | null
  baseColor: fake__color | null
  minNumber: number | null
  maxNumber: number | null
  precisionNumber: number | null
}

/**
 * @name Float
 * @type SCALAR
 */
type t_Float<T extends number = number> = ScalarType<T, Extension<'Float'>>

/**
 * @name examples__JSON
 * @type SCALAR
 */
type t_examples__JSON<T extends any = any> = ScalarType<
  T,
  Extension<'examples__JSON'>
>

export type Query = TypeData<t_Query>
export type User = TypeData<t_User>
export type ID = TypeData<t_ID>
export type MyEnum = TypeData<t_MyEnum>
export type String = TypeData<t_String>
export type Int = TypeData<t_Int>
export type A = TypeData<t_A>
export type B = TypeData<t_B>
export type TestOrUser = TypeData<t_TestOrUser>
export type TestB = TypeData<t_TestB>
export type Test = TypeData<t_Test>
export type Mutation = TypeData<t_Mutation>
export type __Schema = TypeData<t___Schema>
export type __Type = TypeData<t___Type>
export type __TypeKind = TypeData<t___TypeKind>
export type Boolean = TypeData<t_Boolean>
export type __Field = TypeData<t___Field>
export type __InputValue = TypeData<t___InputValue>
export type __EnumValue = TypeData<t___EnumValue>
export type __Directive = TypeData<t___Directive>
export type __DirectiveLocation = TypeData<t___DirectiveLocation>
export type Episode = TypeData<t_Episode>
export type TestC = TypeData<t_TestC>
export type fake__Locale = TypeData<t_fake__Locale>
export type fake__Types = TypeData<t_fake__Types>
export type fake__imageCategory = TypeData<t_fake__imageCategory>
export type fake__loremSize = TypeData<t_fake__loremSize>
export type Float = TypeData<t_Float>
export type examples__JSON = TypeData<t_examples__JSON>
