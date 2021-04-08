/**
 * GQLESS AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

import { ScalarsEnumsHash } from "gqless";

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
  /** Integers that will have a value of 0 or more. */
  NonNegativeInt: number;
  /** A string that cannot be passed as an empty value */
  NonEmptyString: string;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: string;
  /** A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/. */
  EmailAddress: string;
}

export interface CursorConnectionArgs {
  first?: Maybe<Scalars["NonNegativeInt"]>;
  after?: Maybe<Scalars["NonEmptyString"]>;
  last?: Maybe<Scalars["NonNegativeInt"]>;
  before?: Maybe<Scalars["NonEmptyString"]>;
}

export type UserRole = "USER" | "ADMIN";

export interface LoginInput {
  email: Scalars["EmailAddress"];
}

export interface RegisterInput {
  email: Scalars["EmailAddress"];
}

export interface PostCreate {
  title: Scalars["NonEmptyString"];
  category?: Maybe<Array<Scalars["String"]>>;
}

export interface PostUpdate {
  id: Scalars["String"];
  title?: Maybe<Scalars["NonEmptyString"]>;
  category?: Maybe<Array<Scalars["String"]>>;
  published?: Maybe<Scalars["Boolean"]>;
}

export const scalarsEnumsHash: ScalarsEnumsHash = {
  NonNegativeInt: true,
  NonEmptyString: true,
  DateTime: true,
  EmailAddress: true,
  Boolean: true,
  String: true,
  Int: true,
  UserRole: true,
  ID: true,
};
export const generatedSchema = {
  query: {
    __typename: { __type: "String!" },
    hello: { __type: "String!" },
    namesList: { __type: "[String!]!", __args: { n: "Int" } },
    currentUser: { __type: "AuthResult!" },
    publicPosts: {
      __type: "PostsConnection!",
      __args: { input: "CursorConnectionArgs!" },
    },
    postsCategories: { __type: "[Category!]!" },
  },
  mutation: {
    __typename: { __type: "String!" },
    hello: { __type: "String!" },
    setName: { __type: "User!", __args: { name: "String!" } },
    login: { __type: "AuthResult!", __args: { input: "LoginInput!" } },
    register: { __type: "AuthResult!", __args: { input: "RegisterInput!" } },
    createPost: { __type: "Post!", __args: { post: "PostCreate!" } },
    updatePost: { __type: "Post!", __args: { post: "PostUpdate!" } },
  },
  subscription: {},
  CursorConnectionArgs: {
    first: { __type: "NonNegativeInt" },
    after: { __type: "NonEmptyString" },
    last: { __type: "NonNegativeInt" },
    before: { __type: "NonEmptyString" },
  },
  CursorPageInfo: {
    __typename: { __type: "String!" },
    hasNextPage: { __type: "Boolean!" },
    hasPreviousPage: { __type: "Boolean!" },
    startCursor: { __type: "NonEmptyString" },
    endCursor: { __type: "NonEmptyString" },
  },
  User: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    name: { __type: "String" },
    role: { __type: "UserRole!" },
    email: { __type: "String!" },
    posts: {
      __type: "PostsConnection!",
      __args: { input: "CursorConnectionArgs!" },
    },
  },
  LoginInput: { email: { __type: "EmailAddress!" } },
  RegisterInput: { email: { __type: "EmailAddress!" } },
  AuthResult: {
    __typename: { __type: "String!" },
    user: { __type: "User" },
    error: { __type: "String" },
    token: { __type: "String" },
  },
  Category: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    name: { __type: "String" },
    posts: {
      __type: "PostsConnection!",
      __args: { input: "CursorConnectionArgs!" },
    },
  },
  Post: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    createdAt: { __type: "DateTime!" },
    published: { __type: "Boolean!" },
    title: { __type: "String!" },
    category: { __type: "[Category!]" },
  },
  PostCreate: {
    title: { __type: "NonEmptyString!" },
    category: { __type: "[String!]" },
  },
  PostUpdate: {
    id: { __type: "String!" },
    title: { __type: "NonEmptyString" },
    category: { __type: "[String!]" },
    published: { __type: "Boolean" },
  },
  PostsConnection: {
    __typename: { __type: "String!" },
    nodes: { __type: "[Post!]!" },
    pageInfo: { __type: "CursorPageInfo!" },
  },
} as const;

export interface Query {
  __typename: "Query" | undefined;
  hello: ScalarsEnums["String"];
  namesList: (args?: {
    /**
     * @defaultValue `10`
     */
    n?: Maybe<Scalars["Int"]>;
  }) => Array<ScalarsEnums["String"]>;
  currentUser: AuthResult;
  publicPosts: (args: { input: CursorConnectionArgs }) => PostsConnection;
  postsCategories: Array<Category>;
}

export interface Mutation {
  __typename: "Mutation" | undefined;
  hello: ScalarsEnums["String"];
  setName: (args: { name: Scalars["String"] }) => User;
  login: (args: { input: LoginInput }) => AuthResult;
  register: (args: { input: RegisterInput }) => AuthResult;
  createPost: (args: { post: PostCreate }) => Post;
  updatePost: (args: { post: PostUpdate }) => Post;
}

export interface Subscription {
  __typename: "Subscription" | undefined;
}

export interface CursorPageInfo {
  __typename: "CursorPageInfo" | undefined;
  hasNextPage: ScalarsEnums["Boolean"];
  hasPreviousPage: ScalarsEnums["Boolean"];
  startCursor?: Maybe<ScalarsEnums["NonEmptyString"]>;
  endCursor?: Maybe<ScalarsEnums["NonEmptyString"]>;
}

export interface User {
  __typename: "User" | undefined;
  id: ScalarsEnums["ID"];
  name?: Maybe<ScalarsEnums["String"]>;
  role: ScalarsEnums["UserRole"];
  email: ScalarsEnums["String"];
  posts: (args: { input: CursorConnectionArgs }) => PostsConnection;
}

export interface AuthResult {
  __typename: "AuthResult" | undefined;
  user?: Maybe<User>;
  error?: Maybe<ScalarsEnums["String"]>;
  token?: Maybe<ScalarsEnums["String"]>;
}

export interface Category {
  __typename: "Category" | undefined;
  id: ScalarsEnums["ID"];
  name?: Maybe<ScalarsEnums["String"]>;
  posts: (args: { input: CursorConnectionArgs }) => PostsConnection;
}

export interface Post {
  __typename: "Post" | undefined;
  id: ScalarsEnums["ID"];
  createdAt: ScalarsEnums["DateTime"];
  published: ScalarsEnums["Boolean"];
  title: ScalarsEnums["String"];
  category?: Maybe<Array<Category>>;
}

export interface PostsConnection {
  __typename: "PostsConnection" | undefined;
  nodes: Array<Post>;
  pageInfo: CursorPageInfo;
}

export interface SchemaObjectTypes {
  Query: Query;
  Mutation: Mutation;
  Subscription: Subscription;
  CursorPageInfo: CursorPageInfo;
  User: User;
  AuthResult: AuthResult;
  Category: Category;
  Post: Post;
  PostsConnection: PostsConnection;
}
export type SchemaObjectTypesNames =
  | "Query"
  | "Mutation"
  | "Subscription"
  | "CursorPageInfo"
  | "User"
  | "AuthResult"
  | "Category"
  | "Post"
  | "PostsConnection";

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {
  UserRole: UserRole | undefined;
}
