import * as React from 'react'
import { User } from './components'
import { refetch } from 'gqless'
import { graphql, useVariable } from '@gqless/react'
import { query } from './graphql'
import styled from 'styled-components'

const StyledApp = styled.main`
  display: flex;
`

export const App = graphql(
  () => {
    const [username, setUsername] = React.useState('samdenty')

    const usernameVar = useVariable(username)
    const user = query.user({ login: usernameVar })

    return (
      <StyledApp>
        <div>
          <input
            value={username}
            onChange={e => {
              setUsername(e.target.value)
              usernameVar.updateValue(e.target.value)

              refetch(user)
            }}
          ></input>
        </div>

        <React.Suspense fallback="Loading user">
          {user ? <User user={user} /> : `Couldn't find user`}
        </React.Suspense>
      </StyledApp>
    )
  },
  { name: 'App' }
)
