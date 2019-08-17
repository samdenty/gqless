import * as React from '../jsx'

export const Tree = ({ children }: { children: any }) => (
  <ol
    style={{
      listStyleType: 'none',
      padding: 0,
      margin: '0 0 0 12px',
      fontStyle: 'normal',
    }}
  >
    {children}
  </ol>
)
