import { preload } from 'gqless'
import * as React from 'react'
import { query } from './client'
import testDefault, { Test, test } from './test2'
import * as test2 from './test2'

export const App = ({ user }) => {
  // const repos = user.repositories({
  //   first: 100,
  //   isFork: false,
  //   privacy: 'PUBLIC',
  //   affiliations: ['OWNER'],
  //   orderBy: { field: 'STARGAZERS', direction: 'DESC' },
  // }).edges
  var obj = { a: user }
  var obj2 = obj.a
  const { repos } = obj.a

  const repo = repos.find(a => a.asd === 1)
  repo.name
  // var fn = r => {
  //   r.asd
  // }

  // for (const repo of repos.filter(a => a.name)) {
  //   fn(repo)
  // }

  // return (
  //   <StyledUser>
  //     <h2>{user.name}</h2>
  //     <React.Suspense fallback="loading repos">
  //       <Repos>
  //         {repos.map(repo => {
  //           return <Repo key={repo.node.nameWithOwner} repo={repo.node} />
  //         })}
  //       </Repos>
  //     </React.Suspense>
  //   </StyledUser>
  // )
}

preload(App, { user })
