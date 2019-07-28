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
type QueryType = FieldsType<
  {
    __typename: StringType<'Query'>

    /**
     * Current signed in user
     */
    me: UserType | null

    /**
     * Fetch a user by ID
     */
    user: FieldsTypeArg<{ id?: string | null }, UserType | null>

    /**
     * All users stored in the database
     */
    users: FieldsTypeArg<{ limit?: number | null }, (UserType)[]>
    a: AType | null

    /**
     * @deprecated use the user field instead
     */
    getUser: FieldsTypeArg<{ id?: string | null }, UserType | null>

    /**
     * @deprecated use the users field instead
     */
    getUsers: FieldsTypeArg<{ id?: string | null }, (UserType)[]>
    testOrUser: TestOrUserType | null
    test: TestBType | TestCType | null
    testWithInput: FieldsTypeArg<
      { id?: string | null; ids: (string)[]; input?: InputObj | null },
      IntType | null
    >
  },
  Extension<'Query'>
>

/**
 * @name User
 * @type OBJECT
 */
type UserType = FieldsType<
  {
    __typename: StringType<'User'>
    id: IDType
    test: MyEnumType | null
    name: StringType | null
    age: IntType | null
    description: StringType | null
    avatarUrl: FieldsTypeArg<{ size?: number | null }, StringType | null>
    profileUrl: StringType | null
    following: (UserType | null)[] | null
    followers: (UserType | null)[] | null
    b: StringType | null
    c: StringType | null
    d: StringType | null
  },
  Extension<'User'>
>

/**
 * @name ID
 * @type SCALAR
 */
type IDType<T extends string = string> = ScalarType<T, Extension<'ID'>>

/**
 * @name MyEnum
 * @type ENUM
 */
type MyEnumType = EnumType<'ACTIVE' | 'DISABLED'>

/**
 * @name String
 * @type SCALAR
 */
type StringType<T extends string = string> = ScalarType<T, Extension<'String'>>

/**
 * @name Int
 * @type SCALAR
 */
type IntType<T extends number = number> = ScalarType<T, Extension<'Int'>>

/**
 * @name A
 * @type OBJECT
 */
type AType = FieldsType<
  {
    __typename: StringType<'A'>
    b: BType | null
  },
  Extension<'A'>
>

/**
 * @name B
 * @type OBJECT
 */
type BType = FieldsType<
  {
    __typename: StringType<'B'>
    c: IntType | null
    d: IntType | null
  },
  Extension<'B'>
>

/**
 * @name TestOrUser
 * @type UNION
 */
type TestOrUserType = UserType | TestBType

/**
 * @name TestB
 * @type OBJECT
 * @implements Test
 */
type TestBType = FieldsType<
  {
    __typename: StringType<'TestB'>
    a: StringType | null
    b: StringType | null
  },
  Extension<'TestB'>
>

/**
 * @name Test
 * @type INTERFACE
 */
type TestType = TestBType | TestCType

/**
 * @name InputObj
 * @type INPUT_OBJECT
 */
export type InputObj = { a: string }

/**
 * @name Mutation
 * @type OBJECT
 */
type MutationType = FieldsType<
  {
    __typename: StringType<'Mutation'>
    deleteUser: FieldsTypeArg<{ id: string }, IntType>
  },
  Extension<'Mutation'>
>

/**
 * @name __Schema
 * @type OBJECT
 */
type __SchemaType = FieldsType<
  {
    __typename: StringType<'__Schema'>

    /**
     * A list of all types supported by this server.
     */
    types: (__TypeType)[]

    /**
     * The type that query operations will be rooted at.
     */
    queryType: __TypeType

    /**
     * If this server supports mutation, the type that mutation operations will be rooted at.
     */
    mutationType: __TypeType | null

    /**
     * If this server support subscription, the type that subscription operations will be rooted at.
     */
    subscriptionType: __TypeType | null

    /**
     * A list of all directives supported by this server.
     */
    directives: (__DirectiveType)[]
  },
  Extension<'__Schema'>
>

/**
 * @name __Type
 * @type OBJECT
 */
type __TypeType = FieldsType<
  {
    __typename: StringType<'__Type'>
    kind: __TypeKindType
    name: StringType | null
    description: StringType | null
    fields: FieldsTypeArg<
      { includeDeprecated?: boolean | null },
      (__FieldType)[] | null
    >
    interfaces: (__TypeType)[] | null
    possibleTypes: (__TypeType)[] | null
    enumValues: FieldsTypeArg<
      { includeDeprecated?: boolean | null },
      (__EnumValueType)[] | null
    >
    inputFields: (__InputValueType)[] | null
    ofType: __TypeType | null
  },
  Extension<'__Type'>
>

/**
 * @name __TypeKind
 * @type ENUM
 */
type __TypeKindType = EnumType<
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
type BooleanType<T extends boolean = boolean> = ScalarType<
  T,
  Extension<'Boolean'>
>

/**
 * @name __Field
 * @type OBJECT
 */
type __FieldType = FieldsType<
  {
    __typename: StringType<'__Field'>
    name: StringType
    description: StringType | null
    args: (__InputValueType)[]
    type: __TypeType
    isDeprecated: BooleanType
    deprecationReason: StringType | null
  },
  Extension<'__Field'>
>

/**
 * @name __InputValue
 * @type OBJECT
 */
type __InputValueType = FieldsType<
  {
    __typename: StringType<'__InputValue'>
    name: StringType
    description: StringType | null
    type: __TypeType

    /**
     * A GraphQL-formatted string representing the default value for this input value.
     */
    defaultValue: StringType | null
  },
  Extension<'__InputValue'>
>

/**
 * @name __EnumValue
 * @type OBJECT
 */
type __EnumValueType = FieldsType<
  {
    __typename: StringType<'__EnumValue'>
    name: StringType
    description: StringType | null
    isDeprecated: BooleanType
    deprecationReason: StringType | null
  },
  Extension<'__EnumValue'>
>

/**
 * @name __Directive
 * @type OBJECT
 */
type __DirectiveType = FieldsType<
  {
    __typename: StringType<'__Directive'>
    name: StringType
    description: StringType | null
    locations: (__DirectiveLocationType)[]
    args: (__InputValueType)[]

    /**
     * @deprecated Use `locations`.
     */
    onOperation: BooleanType

    /**
     * @deprecated Use `locations`.
     */
    onFragment: BooleanType

    /**
     * @deprecated Use `locations`.
     */
    onField: BooleanType
  },
  Extension<'__Directive'>
>

/**
 * @name __DirectiveLocation
 * @type ENUM
 */
type __DirectiveLocationType = EnumType<
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
type EpisodeType = EnumType<'NEWHOPE' | 'EMPIRE' | 'JEDI'>

/**
 * @name TestC
 * @type OBJECT
 * @implements Test
 */
type TestCType = FieldsType<
  {
    __typename: StringType<'TestC'>
    a: StringType | null
    c: StringType | null
  },
  Extension<'TestC'>
>

/**
 * @name fake__Locale
 * @type ENUM
 */
type fake__LocaleType = EnumType<
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
type fake__TypesType = EnumType<
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
type fake__imageCategoryType = EnumType<
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
type fake__loremSizeType = EnumType<
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
type FloatType<T extends number = number> = ScalarType<T, Extension<'Float'>>

/**
 * @name examples__JSON
 * @type SCALAR
 */
type examples__JSONType<T extends any = any> = ScalarType<
  T,
  Extension<'examples__JSON'>
>

export type Query = TypeData<QueryType>
export type User = TypeData<UserType>
export type ID = TypeData<IDType>
export type MyEnum = TypeData<MyEnumType>
export type String = TypeData<StringType>
export type Int = TypeData<IntType>
export type A = TypeData<AType>
export type B = TypeData<BType>
export type TestOrUser = TypeData<TestOrUserType>
export type TestB = TypeData<TestBType>
export type Test = TypeData<TestType>
export type Mutation = TypeData<MutationType>
export type __Schema = TypeData<__SchemaType>
export type __Type = TypeData<__TypeType>
export type __TypeKind = TypeData<__TypeKindType>
export type Boolean = TypeData<BooleanType>
export type __Field = TypeData<__FieldType>
export type __InputValue = TypeData<__InputValueType>
export type __EnumValue = TypeData<__EnumValueType>
export type __Directive = TypeData<__DirectiveType>
export type __DirectiveLocation = TypeData<__DirectiveLocationType>
export type Episode = TypeData<EpisodeType>
export type TestC = TypeData<TestCType>
export type fake__Locale = TypeData<fake__LocaleType>
export type fake__Types = TypeData<fake__TypesType>
export type fake__imageCategory = TypeData<fake__imageCategoryType>
export type fake__loremSize = TypeData<fake__loremSizeType>
export type Float = TypeData<FloatType>
export type examples__JSON = TypeData<examples__JSONType>
