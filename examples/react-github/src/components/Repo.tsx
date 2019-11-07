import * as React from 'react'
import * as Types from '../graphql'
import { graphql } from '@gqless/react'

export const Repo = graphql(
  ({ repo }: { repo: Types.Repository }) => {
    // if (ofType(repo.owner, 'Organization')) {
    //   console.log(repo.owner.organizationBillingEmail)
    // }

    return (
      <div>
        <h3>
          '{repo.owner.__typename}' {repo.name}
        </h3>
        {repo.descriptionHTML && (
          <p dangerouslySetInnerHTML={{ __html: repo.descriptionHTML }} />
        )}
      </div>
    )
  },
  { name: 'Repo' }
)
