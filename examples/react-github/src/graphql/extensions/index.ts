import { INDEX, GET_KEY, REDIRECT, RedirectHelpers } from 'gqless'

type RepoKey = {
  owner: string
  name: string
}

export const Query = {
  user: {
    [REDIRECT]({ login }: any, { getByKey }: RedirectHelpers) {
      return getByKey(login)
    },
  },
  repository: {
    [REDIRECT]({ owner, name }: any, { getByKey }: RedirectHelpers) {
      return getByKey({ owner, name })
    },
  },
}

export const Repository = {
  [GET_KEY]: (repo: any): RepoKey => ({
    owner: repo.owner.login,
    name: repo.name,
  }),
}

export const Organization = {
  [GET_KEY]: (org: any) => {
    return org.login
  },
}

export const User = {
  [GET_KEY]: (user: any) => {
    return user.login
  },
  name: (name: string) => `user_${name}`,

  repositories: {
    edges: {
      [INDEX]: {
        node: {
          owner: {
            [REDIRECT](_: any, { getByKey }: RedirectHelpers) {
              // TODO: ability to return user
              // should make owner.selection = user.selection
              // return user
            },
          },
        },
      },
    },
  },
}
