type TypeName = string
type TypeNameWithArguments<
  TName extends TypeName = TypeName,
  TArgs extends InputFields = InputFields
> = readonly [TName, TArgs]

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

type Type = Fields | Interface | Enum
interface Schema {
  [K: string]: Type
}

const createSchema = <T extends Schema>(schema: T) => {
  return schema
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

type InputData<
  TSchema extends Schema,
  TName extends string
> = TName extends `${infer TName}!` ? NonNullable<InputData<TSchema,TName>>: (TSchema[TName] extends InputFields
  ? InputFieldsData<TSchema, TSchema[TName]>
  : TSchema[TName] extends Enum<infer TValue, infer TAliases> ?
  'a' extends (TValue & 'a') ? string: TValue|TAliases
  : ScalarData<TName>) | null

type NullableKeys<T> = { [K in keyof T]: null extends T[K] ? K : never }[keyof T];
type NullableOptional<T> = Pick<T, Exclude<keyof T, NullableKeys<T>>> & Partial<Pick<T, NullableKeys<T>>>;

type InputFieldsData<
  TSchema extends Schema,
  TField extends InputFields
> = EvaluateType<NullableOptional<
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

type TypeData<
  TSchema extends Schema,
  TName extends string
> = TName extends `${infer TName}!`
  ? NonNullable<TypeData<TSchema, TName>>
  :
      | (TName extends `[${infer TName}]`
          ? TypeData<TSchema, TName>[]
          : TName extends keyof TSchema
          ? TSchema[TName] extends Interface<infer TName>
            ? TypeData<TSchema, TName>
            : TSchema[TName] extends Fields
            ? FieldsData<TSchema, TName>
            : TSchema[TName] extends Enum<infer TValue>
            ? TValue
            : never
          : ScalarData<TName>)
      | null


enum Bob {
  ALL_USERS,
  TEST,
  TEST2,
  TEST3
}


export const schema = createSchema({
  Bob,
  Query: {
    bob: 'Bob',
    graphQLHub: 'String!',
    hn: 'HackerNewsAPI',
    hn2: 'HackerNewsAPIV2!',
  },
  HackerNewsAPI: {
    item: ['HackerNewsItem', { id: 'Int' }],
    user: ['HackerNewsUser', { id: 'String' }],
    topStories: ['[HackerNewsItem!]!', { limit: 'Int!', offset: 'Int!' }],
    newStories: ['[HackerNewsItem!]!', { limit: 'Int', offset: 'Int' }],
    showStories: ['[HackerNewsItem!]!', { limit: 'Int', offset: 'Int' }],
  },
  Node: [
    {
      id: 'ID!',
    },
    'HackerNewsV2Story',
    'HackerNewsV2Job',
    // "HackerNewsV2Poll",
    // "HackerNewsV2Comment",
    // "HackerNewsV2PollPart",
    // "HackerNewsV2User",
  ],
  HackerNewsV2Story: {
    a: 'String',
    b: 'String!',
    c: 'Float',
    d: 'Int!',
    e: 'BOB',
  },
  HackerNewsV2Job: {
    b: 'String',
  },
} as const)

export type Query = TypeData<typeof schema, 'Query!'>
export type HackerNewsAPI = TypeData<typeof schema, 'Query!'>
export type Node = TypeData<typeof schema, 'Query!'>
export type HackerNewsV2Story = TypeData<typeof schema, 'Query!'>
export type HackerNewsV2Job = TypeData<typeof schema, 'Query!'>
export type String = TypeData<typeof schema, 'String!'>

export enum RegistryPackageType {
  NPM,
  RUBYGEMS,
  MAVEN,
  DOCKER,
  DEBIAN,
  NUGET,
  PYTHON
}



const extension = <T>(a: Extension<T>) => {};

type Extension<T> = {
  name(this: T): any;
};

export const User = extension<typeof schema.User>({
  name(name) {
    return "bob";
  },
  parent: {
    bob: {
      get_key() {
        parent.key
      }
    }
  }
  // test() {},
});

const friends = computed(() => {
  query.me.friendIds
  return query.users.filter()
})
export const Bob = extension<typeof schema.User>({}, () => {
  return this.id
})
