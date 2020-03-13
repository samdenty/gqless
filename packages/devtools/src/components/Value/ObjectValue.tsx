import * as React from 'react'
import { types, ValueRef } from '../../connector'
import styled from '@emotion/styled'
import { Editor } from './Editor'

export interface ValueProps {
  value: ValueRef<types.ObjectType>
}

const StyledObjectValue = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-row-gap: 0.3em;
`

const Name = styled.div`
  color: rgb(118, 133, 222);
`

export function ObjectValue({ value }: ValueProps) {
  return (
    <StyledObjectValue>
      {[...value.type.fields.values()].map((field, i) => (
        <React.Fragment key={i}>
          <Name>{field.name}</Name>
          <Editor type={field.type} nullable={field.nullable} />
        </React.Fragment>
      ))}
    </StyledObjectValue>
  )
}
