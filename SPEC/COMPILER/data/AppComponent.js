import { query } from './client'
import { UserComponent } from './UserComponent'
import { useVariable } from '@gqless/react'

export function AppComponent() {
  const limit = useVariable(window.asd ? 0 : 10)

  return (
    <div>
      {query.users({ limit }).map(user => (
        <UserComponent user={user} />
      ))}
    </div>
  )
}

export function preloadAppComponent() {
  const limit = window.asd ? 0 : 10

  const user = query.users({ limit })[0]
  preloadUserComponent({ user })
}
