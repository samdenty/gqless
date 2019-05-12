import { ITypeOptions } from './typesFaker'

export const typeOptions: ITypeOptions = {
  User: {
    getKey(user) {
      return user.id
    },
  },
}
