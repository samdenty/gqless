import { graphql } from '@gqless/react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { query } from '../github'
import * as React from 'react'
import { useRepo } from '../hooks'

export default graphql(() => {
  const route = useRouter()
  const repo = useRepo()

  if (!repo) return null

  return (
    <div>
      <button>Code</button>
      <Link
        href="/[user]/[repo]/issues"
        as={`/${route.query.user}/${route.query.repo}/issues`}
      >
        <a>Issues {repo.issues({ states: ['OPEN'] }).totalCount}</a>
      </Link>
      <Link
        href="/[user]/[repo]/pulls"
        as={`/${route.query.user}/${route.query.repo}/pulls`}
      >
        <a>
          Pull requests {repo.pullRequests({ states: ['OPEN'] }).totalCount}
        </a>
      </Link>
      <Link
        href="/[user]/[repo]/releases"
        as={`/${route.query.user}/${route.query.repo}/releases`}
      >
        <a>Releases {repo.releases.totalCount}</a>
      </Link>
    </div>
  )
})
