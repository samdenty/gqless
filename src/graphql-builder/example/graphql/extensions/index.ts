import { GET_KEY, OF_NODE } from 'graphql-builder'
import * as g from '..'

export const User /*: Extension<g.User>*/ = {
  name: 'bob' as const,
  isAUser: true as const,
  following: {
    isFollowing: true,
  },

  [GET_KEY]: (data: g.User) => data.id,
}

export const Query /*: Extension<g.User>*/ = query => {
  return {
    whatIsMyName() {
      return query.me.name
    },
    users: {
      get(id: string) {},
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
