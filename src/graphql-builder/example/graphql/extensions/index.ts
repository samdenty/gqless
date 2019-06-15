import { GET_KEY, Extension } from 'graphql-builder'
import * as g from '..'

export const User /*: Extension<g.User>*/ = {
  isAUser: true,

  [GET_KEY]: (data: g.User) => data.id,
}
