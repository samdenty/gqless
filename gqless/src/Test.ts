import { createSchema, TypeData } from './Type'

enum Bob {
  ALL_USERS,
  TEST,
  TEST2,
  TEST3,
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
  PYTHON,
}

// const extension = <T>(a: Extension<T>) => {}

// type Extension<T> = {
//   name(this: T): any
// }

// export const User = extension<typeof schema.User>({
//   name(name) {
//     return 'bob'
//   },
//   parent: {
//     bob: {
//       get_key() {
//         parent.key
//       },
//     },
//   },
//   // test() {},
// })

// const friends = computed(() => {
//   query.me.friendIds
//   return query.users.filter()
// })
// export const Bob = extension<typeof schema.User>({}, () => {
//   return this.id
// })
