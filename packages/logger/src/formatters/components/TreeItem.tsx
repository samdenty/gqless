import * as React from '../jsx'

export const TreeItem = ({
  root,
  object,
  objectDepth,
}: {
  root: boolean
  object: any
  objectDepth: number
}) => (
  <li
    style={{
      marginLeft: !root ? '14px' : 0,
    }}
  >
    {/*
    // @ts-ignore */}
    <object object={object} config={{ objectDepth }} />
  </li>
)
