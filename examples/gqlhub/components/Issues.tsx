import { graphql } from '@gqless/react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { query } from '../github'
import * as React from 'react'
import { useRepo } from '../hooks'

export default graphql(() => {
  const repo = useRepo()

  if (!repo) return null

  return (
    <div>
      {repo
        .issues({ states: ['OPEN'], first: 15 })
        .edges.map(({ node: issue }) => {
          return <div key={issue.number}>{issue.title}</div>
        })}
    </div>
  )
})
