import { query } from './client'
import { DescriptionComponent } from './DescriptionComponent'
import { useFullName } from './useFullName'

export function UserComponent({ user }) {
  const fullName = useFullName(user)

  return (
    <div>
      {query.me.name}
      {fullName}
      <DescriptionComponent user={user} />
    </div>
  )
}
