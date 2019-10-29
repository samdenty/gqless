import * as React from 'react'
import * as Types from '../graphql'
import { graphql } from '@gqless/react'
import { Repo } from './Repo'
import styled from 'styled-components'

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
    const repos = user.repositories({
      first: 100,
      isFork: false,
      privacy: 'PUBLIC',
      affiliations: ['OWNER'],
      orderBy: { field: 'STARGAZERS', direction: 'DESC' },
    }).edges!

    return (
      <StyledUser>
        <h2>{user.name}</h2>
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
