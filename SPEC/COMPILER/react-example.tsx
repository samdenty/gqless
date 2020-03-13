import * as React from 'react'
import { query } from './gqless'

const UserComponent = graphql(({ user }) => {
  return <div>{user.name}</div>
})
UserComponent.preload = ({ user }) => {
  user.name
}

const App = graphql(() => {
  return (
    <div>
      <UserComponent user={query.me} />
    </div>
  )
})

App.preload()
UserComponent.preload({ user: query.me })
