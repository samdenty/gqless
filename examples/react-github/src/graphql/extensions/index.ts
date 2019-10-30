import { INDEX, GET_KEY, REDIRECT, RedirectHelpers } from 'gqless'

type RepoKey = {
  owner: string
  name: string
}

export const Query = {
  repository: {
    [REDIRECT](args: any, { getByKey }: RedirectHelpers) {
      return getByKey(args)
    },
  },
}

export const Repository = {
  [GET_KEY]: (repo: any): RepoKey => ({
    owner: repo.owner.login,
    name: repo.name,
  }),
}

export const User = {
  [GET_KEY]: (user: any) => {
    return user.login
  },

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
