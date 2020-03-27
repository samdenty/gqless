import dynamic from 'next/dynamic'
import * as React from 'react'

const Repo = dynamic(() => import('../../../components/Repo'))

export default typeof window === 'undefined'
  ? () => null
  : () => {
      return (
        <React.Suspense fallback="loading">
          <Repo />
        </React.Suspense>
      )
    }
