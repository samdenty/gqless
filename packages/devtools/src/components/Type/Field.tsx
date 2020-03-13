import * as React from 'react'
import { observer } from 'mobx-react'
import { types } from '../../connector'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

export interface FieldProps {
  field: types.Field
}

const StyledField = styled.span<{ active: boolean }>`
  display: flex;
  align-items: center;
  font-family: Operator mono;
  opacity: ${p => (p.active ? 1 : 0.667)};
`

const Type = styled.span`
  cursor: pointer;
  color: rgb(236, 205, 92);
  text-decoration: none;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0 0.4em;
  border-radius: 1em;
  font-size: 95%;
  line-height: 1.35em;

  &:hover {
    background: rgba(73, 96, 230, 0.35);

    &,
    * {
      text-decoration: underline;
    }
  }
`

const NonNullable = styled.span`
  color: #c792ea;
  white-space: pre;
`
NonNullable.defaultProps = { children: '!' }

const StyledOfArray = styled.span``
const Bracket = styled.span`
  color: rgb(222, 129, 129);
  ${StyledOfArray} > ${StyledOfArray} > & {
    color: #ffd700;
  }
  ${StyledOfArray} > ${StyledOfArray} > ${StyledOfArray} > & {
    color: #da70d6;
  }
`

const OfArray: React.FC = ({ children }) => (
  <StyledOfArray>
    <Bracket>[</Bracket>
    {children}
    <Bracket>]</Bracket>
  </StyledOfArray>
)

const Name = styled.span`
  color: rgb(118, 133, 222);
  font-style: italic;
`

const Colon = styled.span`
  color: rgb(185, 195, 255);
  white-space: pre;
`

export const Field = observer(({ field }: FieldProps) => {
  return (
    <StyledField active={true || field.active}>
      <Name>{field.name}</Name>
      <Colon>{`${field.nullable ? '?' : ''}: `}</Colon>
      <Type>
        <OfArray>
          String
          <NonNullable />
        </OfArray>
      </Type>
    </StyledField>
  )
})
