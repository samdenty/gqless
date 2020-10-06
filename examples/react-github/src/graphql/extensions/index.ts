import { ExtensionData } from 'gqless/src/schema'
import { _, schema, TypeCache } from '../generated'

const TYPE = Symbol()

function extension<
  T extends string,
  TExtension extends ExtensionData<typeof schema, T, TypeCache>
>(type: T, d: TExtension) {
  const data = d as TExtension & { [TYPE]: T }
  data[TYPE] = type
  return data
}

const b = extension('String', str => str)
const c = extension('Date', date => new Date(date))
const a = extension('Query', query => ({
  $key: query => query,
  enterprise: {
    $redirect: args => {
      args.slug
    },
  },
  user: {
    repositories: {
      nodes: {
        $i: {
          // viewerSubscription:
        },
      },
    },
  },
  // // enterprise: (data, args) => ({
  // //   avatarUrl() {
  // //     return 30
  // //   },
  // // }),
  // //   enterprise: 1,
  // //   user(user, args) {},
  // //   // enterprise: 1,
  // //   // enterprise2: 1,
  // //   // codeOfConduct: 300,
  // //   // a: 1,
}))

// const query2 = extension('Query', query => ({
//   users: {
//     $i: {
//       name: 1,
//     },
//   },
//   user: {
//     $redirect() {},
//     $key() {},
//   },
//   repository: {
//     $redirect({ owner, name }, { getByKey }) {
//       return getByKey({ owner, name })
//     },
//   },
// }))

// const User = extension('User', user => ({
//   $key(user) {
//     return user.login
//   },
//   get computedField() {
//     return user.firstName + user.lastName
//   },
//   name: (name) => `user_${name}`,

//   repositories: {
//     edges: {
//       $i: {
//         node: {
//           owner: {
//             $redirect(_, { getByKey }) {
//               // TODO: ability to return user
//               // should make owner.selection = user.selection
//               // return user
//             },
//           },
//         },
//       },
//     },
//   },
// }))

// // make a URI typesafe (convert from any -> string)
// const extension0 = extension('URI', (url) => String(url))

// const extension1 = extension('User', {
//   company: 'bob',
//   avatarUrl: url => new URL(url),
// })

// extension('User', {
//   name: 'a',
// })
//   .redirect(({ login }, { getByKey }) => {})
//   .getKey(user => user.id)

// const query1 = extension('Query', {
//   user: extension('User', {
//     [REDIRECT]({ login }, { getByKey }) {
//       return getByKey(login)
//     },
//   }),
//   repository: {
//     [REDIRECT]({ owner, name }, { getByKey }) {
//       return getByKey({ owner, name })
//     },
//   },
// })

// type('Query')
//   .user(user =>
//     user({
//       name: name => 'bob',
//     }).redirect(({ login }, { getByKey }) => getByKey(login))
//   )
//   .repository(repo =>
//     repo.redirect(({ owner, name }, { getByKey }) => getByKey({ owner, name }))
//   )

// import { INDEX, GET_KEY, REDIRECT, RedirectHelpers } from 'gqless'

// type RepoKey = {
//   owner: string
//   name: string
// }

// export const Query = {
//   user: {
//     [REDIRECT]({ login }: any, { getByKey }: RedirectHelpers) {
//       return getByKey(login)
//     },
//   },
//   repository: {
//     [REDIRECT]({ owner, name }: any, { getByKey }: RedirectHelpers) {
//       return getByKey({ owner, name })
//     },
//   },
// }

// export const Repository = {
//   [GET_KEY]: (repo: any): RepoKey => ({
//     owner: repo.owner.login,
//     name: repo.name,
//   }),
// }

// export const Organization = {
//   [GET_KEY]: (org: any) => {
//     return org.login
//   },
// }

// export const User = {
//   [GET_KEY]: (user: any) => {
//     return user.login
//   },
//   name: (name: string) => `user_${name}`,

//   repositories: {
//     edges: {
//       [INDEX]: {
//         node: {
//           owner: {
//             [REDIRECT](_: any, { getByKey }: RedirectHelpers) {
//               // TODO: ability to return user
//               // should make owner.selection = user.selection
//               // return user
//             },
//           },
//         },
//       },
//     },
//   },
// }
