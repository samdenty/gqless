import * as React from 'react'
import { Suspense, SuspenseProps } from 'react'

export const DeferContext = React.createContext<{ defer: boolean }>({
  defer: false,
})

export interface DeferProps extends SuspenseProps {
  children?: React.ReactNode | (() => React.ReactNode)
}

export const Defer = ({ children, ...props }: DeferProps) => {
  const { defer } = React.useContext(DeferContext)
  if (defer) return null

  return (
    <Suspense {...props}>
      {typeof children === 'function' ? (children as Function)() : children}
    </Suspense>
  )
}
