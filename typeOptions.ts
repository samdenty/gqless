import { ITypeOptions } from './typesFaker'

export const typeOptions: ITypeOptions = {
  // Example:
  User: {
    getKey(user) {
      return user.id
    },
  },
}
