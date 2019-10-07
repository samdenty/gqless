import { GET_KEY, getAccessor, INDEX, REDIRECT } from 'gqless'

// export const String = (value: string) => {
//   console.log(value)
//   return value
// }

export const User /*: Extension<g.User>*/ = {
  testFn() {},
  name: (name: string) => `user_${name}`,
  // get name() {
  //   return `user_${name}`
  // },
  // set name(name) {
  //   mutation.renameUser(user.id, name)
  // },
  isAUser: true as const,
  following: {
    isFollowing: true,
  },

  [GET_KEY](data) {
    console.log('User GET_KEY called', getAccessor(data))
    return data.id
  },
}

export const Query /*: Extension<g.User>*/ = query => {
  return {
    whatIsMyName() {
      return query.me.name
    },
    user: {
      [REDIRECT](args, { match }) {
        if (!args) return
        const a = JSON.parse(JSON.stringify(args))
        const m = match({ id: a.id })

        console.log('query.user redirected', a, m)

        return m
      },
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
      name: (name: string) => {
        // console.log({ meName: name })
        return `me_${name}`
      },
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
