import { preload } from 'gqless'
import * as React from 'react'
import { query } from './client'
import testDefault, { Test, test } from './test2'
import * as test2 from './test2'

export const App = props => {
  const [name, setName] = React.useState('bob')

  props.user.avatarUrl({ userId: props.user.id })

  return (
    <div>
      {props.user.age}
      {props.user.name}
    </div>
  )
  // const { age2 } = { age2: 100 }
  // const { age, ...rest } = { age: 100 + age2, a: 1, b: 2 }
  query.me
  test(query.me)
}
preload(App, { user: userRef })

// function AppFunc(user) {
//   user.name
//   query.me
//   test(query.me)
// }

// preload(AppFunc, user)
// preload(Test)
// preload(testDefault)
// preload(test2.Test)
