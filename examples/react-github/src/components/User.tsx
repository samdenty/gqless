import * as React from 'react'
import * as Types from '../graphql'
import { graphql, useFragment } from '@gqless/react'
import { Repo } from './Repo'
import styled from 'styled-components'
import { query } from '../graphql'
import { getAccessor } from 'gqless'

const StyledUser = styled.div`
  display: flex;
  flex-direction: column;
`

const Repos = styled.div`
  display: grid;
  grid-auto-columns: fit-content(20%);
`

export const User = graphql(
  ({ user }: { user: Types.User }) => {
    let userFragment = user
    userFragment = useFragment(user)

    const repos = userFragment.repositories({
      first: 100,
      isFork: false,
      privacy: 'PUBLIC',
      affiliations: ['OWNER'],
      orderBy: { field: 'STARGAZERS', direction: 'DESC' },
    }).edges!

    return (
      <StyledUser>
        <h2>{userFragment.name}</h2>
        <React.Suspense fallback="loading repos">
          <Repos>
            {repos.map(repo => {
              return <Repo key={repo!.node!.nameWithOwner} repo={repo!.node!} />
            })}
          </Repos>
        </React.Suspense>
      </StyledUser>
    )
  },
  { name: 'User' }
)
