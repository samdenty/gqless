import dynamic from 'next/dynamic'
import * as React from 'react'

const Issues = dynamic(() => import('../../../components/Issues'))

export default typeof window === 'undefined'
  ? () => null
  : () => {
      return (
        <React.Suspense fallback="loading">
          <Issues />
        </React.Suspense>
      )
    }
