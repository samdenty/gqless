import * as React from 'react'
import { Type, Value } from './components'
import { types, ValueRef } from './connector'

export function App() {
  const User = new types.ObjectType('User', {
    name: '',
    age: '',
    lastName: '',
  })

  const UserValue = new ValueRef(User, false)

  return (
    <>
      <Value value={UserValue} />
      <br />
      <Type type={User} />
    </>
  )
}
