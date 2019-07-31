import { GET_KEY, INDEX } from 'gqless'
import * as T from '../generated/types'

// export const String = (value: string) => {
//   return `string_${value}`
// }

export const User /*: Extension<g.User>*/ = {
  name: (name: string) => `user_${name}`,
  isAUser: true as const,
  following: {
    isFollowing: true,
  },

  [GET_KEY]: data => data.id,
}
export const Query /*: Extension<g.User>*/ = query => {
  return {
    whatIsMyName() {
      return query.me.name
    },
    users: {
      get(id: string) {},
      [INDEX]: {
        isAQueryUser: true,
      },
    },
    getUser: {
      queryGetUsers: true as const,
    },
    me: {
      name: (name: string) => `me_${name}`,
      isMe: true,
      following: {
        isMeFollowing: true,
        doesIt: {
          work: true,
        },
        [INDEX]: {
          meIsFollowing: true,
        },
      },
    },
    isQuery: true,
  }
}
