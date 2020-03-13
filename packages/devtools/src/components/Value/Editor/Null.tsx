import * as React from 'react'
import { types, ValueRef } from '../../../connector'
import styled from '@emotion/styled'
import { observer } from 'mobx-react'
import { useValueEditor } from './Editor'

export interface EditorProps {
  value?: ValueRef
}

const StyledNull = styled.button<{ disabled: boolean; active: boolean }>`
  opacity: ${p => +!p.disabled};
  background: ${p => (p.active ? 'rgb(226, 166, 58)' : 'transparent')};
  border: 0;
  outline: 0;
  color: ${p => (p.active ? '#000' : 'rgba(52, 63, 123,.45)')};
  font-size: 0.7rem;
  cursor: pointer;
  border-radius: 1em;
  height: 1.5em;
  padding: 0 0.5em;
  margin-right: 0.5rem;

  &:hover {
    background: ${p =>
      p.active ? 'rgb(245, 197, 111)' : 'rgba(128, 146, 245, 0.32)'};
    color: ${p => (p.active ? '#000' : 'rgb(173, 184, 241)')};
  }
`

export const Null = observer(() => {
  const editor = useValueEditor()

  return (
    <StyledNull
      disabled={!editor.nullable}
      active={editor.nulled}
      onClick={() => (editor.nulled = !editor.nulled)}
    >
      NULL
    </StyledNull>
  )
})
