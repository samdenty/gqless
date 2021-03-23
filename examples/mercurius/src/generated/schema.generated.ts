/**
 * GQLESS AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

import { ScalarsEnumsHash, SchemaUnionsKey } from 'gqless';

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ExampleScalar: string;
}

export enum GreetingsEnum {
  Hello = 'Hello',
  Hi = 'Hi',
  Hey = 'Hey',
}

export interface GreetingsInput {
  language: Scalars['String'];
  value?: Maybe<Scalars['String']>;
  scal?: Maybe<Scalars['ExampleScalar']>;
}

export const scalarsEnumsHash: ScalarsEnumsHash = {
  String: true,
  Int: true,
  ExampleScalar: true,
  GreetingsEnum: true,
  Boolean: true,
};
export const generatedSchema = {
  query: {
    __typename: { __type: 'String!' },
    simpleString: { __type: 'String!' },
    stringWithArgs: { __type: 'String!', __args: { hello: 'String!' } },
    stringNullableWithArgs: {
      __type: 'String',
      __args: { hello: 'String!', helloTwo: 'String' },
    },
    stringNullableWithArgsArray: {
      __type: 'String',
      __args: { hello: '[String]!' },
    },
    object: { __type: 'Human' },
    objectArray: { __type: '[Human]' },
    objectWithArgs: { __type: 'Human!', __args: { who: 'String!' } },
    arrayString: { __type: '[String!]!' },
    arrayObjectArgs: { __type: '[Human!]!', __args: { limit: 'Int!' } },
    greetings: { __type: 'GreetingsEnum!' },
    giveGreetingsInput: {
      __type: 'String!',
      __args: { input: 'GreetingsInput!' },
    },
    number: { __type: 'Int!' },
    union: { __type: '[TestUnion!]!' },
  },
  mutation: {
    __typename: { __type: 'String!' },
    increment: { __type: 'Int!', __args: { n: 'Int!' } },
  },
  subscription: {},
  GreetingsInput: {
    language: { __type: 'String!' },
    value: { __type: 'String' },
    scal: { __type: 'ExampleScalar' },
  },
  Human: {
    __typename: { __type: 'String!' },
    name: { __type: 'String!' },
    father: { __type: 'Human!' },
    fieldWithArgs: { __type: 'Int!', __args: { id: 'Int!' } },
    sons: { __type: '[Human!]' },
    union: { __type: '[TestUnion!]!' },
    args: { __type: 'Int', __args: { a: 'String' } },
  },
  A: {
    __typename: { __type: 'String!' },
    a: { __type: 'String!' },
    common: { __type: 'Int', __args: { a: 'String' } },
    z: { __type: 'String' },
  },
  B: {
    __typename: { __type: 'String!' },
    b: { __type: 'Int!' },
    common: { __type: 'String', __args: { b: 'Int' } },
    z: { __type: 'String' },
  },
  C: {
    __typename: { __type: 'String!' },
    c: { __type: 'GreetingsEnum!' },
    z: { __type: 'String' },
  },
  [SchemaUnionsKey]: { TestUnion: ['A', 'B', 'C'] },
} as const;

export interface Query {
  __typename: 'Query' | undefined;
  simpleString: ScalarsEnums['String'];
  stringWithArgs: (args: {
    hello: ScalarsEnums['String'];
  }) => ScalarsEnums['String'];
  stringNullableWithArgs: (args: {
    hello: ScalarsEnums['String'];
    helloTwo?: ScalarsEnums['String'];
  }) => ScalarsEnums['String'];
  stringNullableWithArgsArray: (args: {
    hello: Array<Maybe<ScalarsEnums['String']>>;
  }) => ScalarsEnums['String'];
  object?: Maybe<Human>;
  objectArray?: Maybe<Array<Maybe<Human>>>;
  objectWithArgs: (args: { who: ScalarsEnums['String'] }) => Human;
  arrayString: Array<ScalarsEnums['String']>;
  arrayObjectArgs: (args: { limit: ScalarsEnums['Int'] }) => Array<Human>;
  greetings: ScalarsEnums['GreetingsEnum'];
  giveGreetingsInput: (args: {
    input: GreetingsInput;
  }) => ScalarsEnums['String'];
  number: ScalarsEnums['Int'];
  union: Array<TestUnion>;
}

export interface Mutation {
  __typename: 'Mutation' | undefined;
  increment: (args: { n: ScalarsEnums['Int'] }) => ScalarsEnums['Int'];
}

export interface Subscription {
  __typename: 'Subscription' | undefined;
}

export interface Human extends NamedEntity {
  __typename: 'Human' | undefined;
  name: ScalarsEnums['String'];
  father: Human;
  fieldWithArgs: (args: { id: ScalarsEnums['Int'] }) => ScalarsEnums['Int'];
  sons?: Maybe<Array<Human>>;
  union: Array<TestUnion>;
  args: (args?: { a?: ScalarsEnums['String'] }) => ScalarsEnums['Int'];
}

export interface A {
  __typename: 'A' | undefined;
  a: ScalarsEnums['String'];
  common: (args?: { a?: ScalarsEnums['String'] }) => ScalarsEnums['Int'];
  z?: ScalarsEnums['String'];
}

export interface B {
  __typename: 'B' | undefined;
  b: ScalarsEnums['Int'];
  common: (args?: { b?: ScalarsEnums['Int'] }) => ScalarsEnums['String'];
  z?: ScalarsEnums['String'];
}

export interface C {
  __typename: 'C' | undefined;
  c: ScalarsEnums['GreetingsEnum'];
  z?: ScalarsEnums['String'];
}

export interface SchemaObjectTypes {
  Query: Query;
  Mutation: Mutation;
  Subscription: Subscription;
  Human: Human;
  A: A;
  B: B;
  C: C;
}
export type SchemaObjectTypesNames =
  | 'Query'
  | 'Mutation'
  | 'Subscription'
  | 'Human'
  | 'A'
  | 'B'
  | 'C';

export type TestUnion =
  | {
      __typename: 'A' | undefined;
      a: ScalarsEnums['String'];
      b?: undefined;
      c?: undefined;
      common: (args?: { a?: ScalarsEnums['String'] }) => ScalarsEnums['Int'];
      z?: ScalarsEnums['String'];
    }
  | {
      __typename: 'B' | undefined;
      a?: undefined;
      b: ScalarsEnums['Int'];
      c?: undefined;
      common: (args?: { b?: ScalarsEnums['Int'] }) => ScalarsEnums['String'];
      z?: ScalarsEnums['String'];
    }
  | {
      __typename: 'C' | undefined;
      a?: undefined;
      b?: undefined;
      c: ScalarsEnums['GreetingsEnum'];
      common?: undefined;
      z?: ScalarsEnums['String'];
    };

export interface NamedEntity {
  name: ScalarsEnums['String'];
}

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {
  GreetingsEnum: GreetingsEnum | undefined;
}
