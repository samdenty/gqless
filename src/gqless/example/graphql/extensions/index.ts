import { GET_KEY, OF_NODE } from 'gqless'
import * as T from '../generated/types'

// export const String = () => new Map()

export const User /*: Extension<g.User>*/ = {
  name: 'bob' as const,
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
      [OF_NODE]: {
        isAQueryUser: true,
      },
    },
    getUser: {
      queryGetUsers: true as const,
    },
    me: {
      name: 'me' as const,
      isMe: true,
      following: {
        isMeFollowing: true,
        doesIt: {
          work: true,
        },
        [OF_NODE]: {
          meIsFollowing: true,
        },
      },
    },
    isQuery: true,
  }
}
