import * as React from 'react'
import * as Types from '../graphql'
import { graphql } from '@gqless/react'

export const Repo = graphql(
  ({ repo }: { repo: Types.Repository }) => {
    return (
      <div>
        <h3>{repo.name}</h3>
        {repo.descriptionHTML && (
          <p dangerouslySetInnerHTML={{ __html: repo.descriptionHTML }} />
        )}
      </div>
    )
  },
  { name: 'Repo' }
)
