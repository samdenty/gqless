import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) =>
  | Promise<import('mercurius-codegen').DeepPartial<TResult>>
  | import('mercurius-codegen').DeepPartial<TResult>;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} &
  { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ExampleScalar: any;
  _FieldSet: any;
};

export type NamedEntity = {
  name: Scalars['String'];
  args?: Maybe<Scalars['Int']>;
};

export type NamedEntityargsArgs = {
  a?: Maybe<Scalars['String']>;
};

export enum GreetingsEnum {
  Hello = 'Hello',
  Hi = 'Hi',
  Hey = 'Hey',
}

export type GreetingsInput = {
  language: Scalars['String'];
  value?: Maybe<Scalars['String']>;
  scal?: Maybe<Scalars['ExampleScalar']>;
};

export type Query = {
  __typename?: 'Query';
  simpleString: Scalars['String'];
  stringWithArgs: Scalars['String'];
  stringNullableWithArgs?: Maybe<Scalars['String']>;
  stringNullableWithArgsArray?: Maybe<Scalars['String']>;
  object?: Maybe<Human>;
  objectArray?: Maybe<Array<Maybe<Human>>>;
  objectWithArgs: Human;
  arrayString: Array<Scalars['String']>;
  arrayObjectArgs: Array<Human>;
  greetings: GreetingsEnum;
  giveGreetingsInput: Scalars['String'];
  number: Scalars['Int'];
  union: Array<TestUnion>;
};

export type QuerystringWithArgsArgs = {
  hello: Scalars['String'];
};

export type QuerystringNullableWithArgsArgs = {
  hello: Scalars['String'];
  helloTwo?: Maybe<Scalars['String']>;
};

export type QuerystringNullableWithArgsArrayArgs = {
  hello: Array<Maybe<Scalars['String']>>;
};

export type QueryobjectWithArgsArgs = {
  who: Scalars['String'];
};

export type QueryarrayObjectArgsArgs = {
  limit: Scalars['Int'];
};

export type QuerygiveGreetingsInputArgs = {
  input: GreetingsInput;
};

export type Mutation = {
  __typename?: 'Mutation';
  increment: Scalars['Int'];
};

export type MutationincrementArgs = {
  n: Scalars['Int'];
};

export type Human = NamedEntity & {
  __typename?: 'Human';
  name: Scalars['String'];
  father: Human;
  fieldWithArgs: Scalars['Int'];
  sons?: Maybe<Array<Human>>;
  union: Array<TestUnion>;
  args?: Maybe<Scalars['Int']>;
};

export type HumanfieldWithArgsArgs = {
  id: Scalars['Int'];
};

export type HumanargsArgs = {
  a?: Maybe<Scalars['String']>;
};

export type A = {
  __typename?: 'A';
  a: Scalars['String'];
  common?: Maybe<Scalars['Int']>;
  z?: Maybe<Scalars['String']>;
};

export type AcommonArgs = {
  a?: Maybe<Scalars['String']>;
};

export type B = {
  __typename?: 'B';
  b: Scalars['Int'];
  common?: Maybe<Scalars['String']>;
  z?: Maybe<Scalars['String']>;
};

export type BcommonArgs = {
  b?: Maybe<Scalars['Int']>;
};

export type C = {
  __typename?: 'C';
  c: GreetingsEnum;
  z?: Maybe<Scalars['String']>;
};

export type TestUnion = A | B | C;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  NamedEntity: ResolversTypes['Human'];
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  ExampleScalar: ResolverTypeWrapper<Scalars['ExampleScalar']>;
  GreetingsEnum: GreetingsEnum;
  GreetingsInput: GreetingsInput;
  Query: ResolverTypeWrapper<{}>;
  Mutation: ResolverTypeWrapper<{}>;
  Human: ResolverTypeWrapper<
    Omit<Human, 'union'> & { union: Array<ResolversTypes['TestUnion']> }
  >;
  A: ResolverTypeWrapper<A>;
  B: ResolverTypeWrapper<B>;
  C: ResolverTypeWrapper<C>;
  TestUnion: ResolversTypes['A'] | ResolversTypes['B'] | ResolversTypes['C'];
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  NamedEntity: ResolversParentTypes['Human'];
  String: Scalars['String'];
  Int: Scalars['Int'];
  ExampleScalar: Scalars['ExampleScalar'];
  GreetingsInput: GreetingsInput;
  Query: {};
  Mutation: {};
  Human: Omit<Human, 'union'> & {
    union: Array<ResolversParentTypes['TestUnion']>;
  };
  A: A;
  B: B;
  C: C;
  TestUnion:
    | ResolversParentTypes['A']
    | ResolversParentTypes['B']
    | ResolversParentTypes['C'];
  Boolean: Scalars['Boolean'];
};

export type NamedEntityResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['NamedEntity'] = ResolversParentTypes['NamedEntity']
> = {
  resolveType: TypeResolveFn<'Human', ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  args?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<NamedEntityargsArgs, never>
  >;
};

export interface ExampleScalarScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['ExampleScalar'], any> {
  name: 'ExampleScalar';
}

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  simpleString?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stringWithArgs?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<QuerystringWithArgsArgs, 'hello'>
  >;
  stringNullableWithArgs?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<QuerystringNullableWithArgsArgs, 'hello'>
  >;
  stringNullableWithArgsArray?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<QuerystringNullableWithArgsArrayArgs, 'hello'>
  >;
  object?: Resolver<Maybe<ResolversTypes['Human']>, ParentType, ContextType>;
  objectArray?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Human']>>>,
    ParentType,
    ContextType
  >;
  objectWithArgs?: Resolver<
    ResolversTypes['Human'],
    ParentType,
    ContextType,
    RequireFields<QueryobjectWithArgsArgs, 'who'>
  >;
  arrayString?: Resolver<
    Array<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  arrayObjectArgs?: Resolver<
    Array<ResolversTypes['Human']>,
    ParentType,
    ContextType,
    RequireFields<QueryarrayObjectArgsArgs, 'limit'>
  >;
  greetings?: Resolver<
    ResolversTypes['GreetingsEnum'],
    ParentType,
    ContextType
  >;
  giveGreetingsInput?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<QuerygiveGreetingsInputArgs, 'input'>
  >;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  union?: Resolver<Array<ResolversTypes['TestUnion']>, ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  increment?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType,
    RequireFields<MutationincrementArgs, 'n'>
  >;
};

export type HumanResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Human'] = ResolversParentTypes['Human']
> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  father?: Resolver<ResolversTypes['Human'], ParentType, ContextType>;
  fieldWithArgs?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType,
    RequireFields<HumanfieldWithArgsArgs, 'id'>
  >;
  sons?: Resolver<
    Maybe<Array<ResolversTypes['Human']>>,
    ParentType,
    ContextType
  >;
  union?: Resolver<Array<ResolversTypes['TestUnion']>, ParentType, ContextType>;
  args?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<HumanargsArgs, never>
  >;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['A'] = ResolversParentTypes['A']
> = {
  a?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  common?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<AcommonArgs, never>
  >;
  z?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['B'] = ResolversParentTypes['B']
> = {
  b?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  common?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<BcommonArgs, never>
  >;
  z?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['C'] = ResolversParentTypes['C']
> = {
  c?: Resolver<ResolversTypes['GreetingsEnum'], ParentType, ContextType>;
  z?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TestUnionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TestUnion'] = ResolversParentTypes['TestUnion']
> = {
  resolveType: TypeResolveFn<'A' | 'B' | 'C', ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  NamedEntity?: NamedEntityResolvers<ContextType>;
  ExampleScalar?: GraphQLScalarType;
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Human?: HumanResolvers<ContextType>;
  A?: AResolvers<ContextType>;
  B?: BResolvers<ContextType>;
  C?: CResolvers<ContextType>;
  TestUnion?: TestUnionResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;

type Loader<TReturn, TObj, TParams, TContext> = (
  queries: Array<{
    obj: TObj;
    params: TParams;
  }>,
  context: TContext & {
    reply: import('fastify').FastifyReply;
  }
) => Promise<Array<import('mercurius-codegen').DeepPartial<TReturn>>>;
type LoaderResolver<TReturn, TObj, TParams, TContext> =
  | Loader<TReturn, TObj, TParams, TContext>
  | {
      loader: Loader<TReturn, TObj, TParams, TContext>;
      opts?: {
        cache?: boolean;
      };
    };
export interface Loaders<
  TContext = import('mercurius').MercuriusContext & {
    reply: import('fastify').FastifyReply;
  }
> {
  Human?: {
    name?: LoaderResolver<Scalars['String'], Human, {}, TContext>;
    father?: LoaderResolver<Human, Human, {}, TContext>;
    fieldWithArgs?: LoaderResolver<
      Scalars['Int'],
      Human,
      HumanfieldWithArgsArgs,
      TContext
    >;
    sons?: LoaderResolver<Maybe<Array<Human>>, Human, {}, TContext>;
    union?: LoaderResolver<Array<TestUnion>, Human, {}, TContext>;
    args?: LoaderResolver<
      Maybe<Scalars['Int']>,
      Human,
      HumanargsArgs,
      TContext
    >;
  };

  A?: {
    a?: LoaderResolver<Scalars['String'], A, {}, TContext>;
    common?: LoaderResolver<Maybe<Scalars['Int']>, A, AcommonArgs, TContext>;
    z?: LoaderResolver<Maybe<Scalars['String']>, A, {}, TContext>;
  };

  B?: {
    b?: LoaderResolver<Scalars['Int'], B, {}, TContext>;
    common?: LoaderResolver<Maybe<Scalars['String']>, B, BcommonArgs, TContext>;
    z?: LoaderResolver<Maybe<Scalars['String']>, B, {}, TContext>;
  };

  C?: {
    c?: LoaderResolver<GreetingsEnum, C, {}, TContext>;
    z?: LoaderResolver<Maybe<Scalars['String']>, C, {}, TContext>;
  };
}
export type simpleStringQueryVariables = Exact<{ [key: string]: never }>;

export type simpleStringQuery = { __typename?: 'Query' } & Pick<
  Query,
  'simpleString'
> & {
    union: Array<
      | ({ __typename: 'A' } & Pick<A, 'a'>)
      | ({ __typename: 'B' } & Pick<B, 'b'>)
      | ({ __typename: 'C' } & Pick<C, 'c'>)
    >;
  };

export type arrayObjectArgsQueryVariables = Exact<{ [key: string]: never }>;

export type arrayObjectArgsQuery = { __typename?: 'Query' } & {
  arrayObjectArgs: Array<
    { __typename?: 'Human' } & Pick<Human, 'name'> & {
        father: { __typename?: 'Human' } & Pick<Human, 'name'> & {
            father: { __typename?: 'Human' } & Pick<Human, 'name'>;
          };
      }
  >;
};

export type multipleArgsQueryVariables = Exact<{ [key: string]: never }>;

export type multipleArgsQuery = { __typename?: 'Query' } & {
  a1: { __typename?: 'Human' } & { zxc: Human['name']; abc: Human['name'] };
  a2: { __typename?: 'Human' } & Pick<Human, 'name'>;
};

export const simpleStringDocument: DocumentNode<
  simpleStringQuery,
  simpleStringQueryVariables
> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'simpleString' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'simpleString' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'union' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'A' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'a' } },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'B' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'b' } },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'C' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'c' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
};
export const arrayObjectArgsDocument: DocumentNode<
  arrayObjectArgsQuery,
  arrayObjectArgsQueryVariables
> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'arrayObjectArgs' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'arrayObjectArgs' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'IntValue', value: '2' },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'father' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'father' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
};
export const multipleArgsDocument: DocumentNode<
  multipleArgsQuery,
  multipleArgsQueryVariables
> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'multipleArgs' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'a1' },
            name: { kind: 'Name', value: 'objectWithArgs' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'who' },
                value: { kind: 'StringValue', value: 'hello', block: false },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'zxc' },
                  name: { kind: 'Name', value: 'name' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'abc' },
                  name: { kind: 'Name', value: 'name' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'a2' },
            name: { kind: 'Name', value: 'objectWithArgs' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'who' },
                value: { kind: 'StringValue', value: 'hello2', block: false },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
};
declare module 'mercurius' {
  interface IResolvers
    extends Resolvers<import('mercurius').MercuriusContext> {}
  interface MercuriusLoaders extends Loaders {}
}
