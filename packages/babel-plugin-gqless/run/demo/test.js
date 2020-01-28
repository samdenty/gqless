import { preload } from 'gqless'
import * as React from 'react'
import { query } from './client'
import testDefault, { Test, test } from './test2'
import * as test2 from './test2'
import TEST from 'react'

function fn(a) {
  a.name
}
export const App = ({ users }) => {
  // users['0']

  fn(users)

  // props2.somethingElse
  // var user2 = props.user

  // var { name } = props.user

  // name.name2
  // user2.track({ a: 1, a: TEST })

  // props.user.avatarUrl({ userId: props.user.id })

  // return (
  //   <div>
  //     {props.user.age}
  //     {props.user.name}
  //   </div>
  // )
  // const [name, setName] = React.useState('bob')
  // const { age2 } = { age2: 100 }
  // const { age, ...rest } = { age: 100 + age2, a: 1, b: 2 }
  query.me
  test(query.me)
}
preload(App, { user, users })

// function AppFunc(user) {
//   user.name
//   query.me
//   test(query.me)
// }

// preload(AppFunc, user)
// preload(Test)
// preload(testDefault)
// preload(test2.Test)
