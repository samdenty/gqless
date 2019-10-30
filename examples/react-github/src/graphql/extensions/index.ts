import { GET_KEY } from 'gqless'

export const Query = {}

export const Repository = {
  [GET_KEY]: (repo: any) => repo.nameWithOwner,
}

export const User = {
  [GET_KEY]: (user: any) => user.login,
}
