import { preload } from 'gqless'
import * as React from 'react'
import { query } from './client'
import testDefault, { Test, test } from './test2'
import * as test2 from './test2'

export const App = user => {
  user.name
  query.me
  test(query.me)
}

function AppFunc(user) {
  user.name
  query.me
  test(query.me)
}

preload(App, user)
preload(AppFunc, user)
preload(Test)
preload(testDefault)
preload(test2.Test)
