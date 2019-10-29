import * as React from 'react'
import { TopStories } from './components'

export const App = () => {
  return (
    <React.Suspense fallback="loading">
      <TopStories />
    </React.Suspense>
  )
}
