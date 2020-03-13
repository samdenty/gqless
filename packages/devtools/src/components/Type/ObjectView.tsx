import { observer } from 'mobx-react'
import * as React from 'react'
import styled from '@emotion/styled'
import css from '@emotion/css'
import { types } from '../../connector'
import { Field } from './Field'

const StyledObjectView = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  line-height: 1.563rem;
`

export interface ObjectProps {
  object: types.ObjectType
}

export const ObjectView = observer(({ object }: ObjectProps) => {
  return (
    <StyledObjectView>
      {Array.from(object.fields.values()).map((field, i) => (
        <li
          css={css`
            display: flex;
          `}
          key={i}
        >
          <Field field={field} />
        </li>
      ))}
    </StyledObjectView>
  )
})
