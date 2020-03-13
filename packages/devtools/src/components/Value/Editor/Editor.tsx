import * as React from 'react'
import { types, ValueRef } from '../../../connector'
import styled from '@emotion/styled'
import { StringEditor } from './StringEditor'
import { observable } from 'mobx'
import { useMemo } from 'react'
import { observer } from 'mobx-react'
import { Field, StyledEditor } from './Editor.styles'
import { Null } from './Null'

export interface EditorProps {
  type: types.Type
  nullable: boolean
  value?: ValueRef
}

class ValueEditor {
  @observable focused = false
  @observable currentValue: any = 'asd'
  @observable nulled: boolean

  constructor(
    public type: types.Type,
    public nullable: boolean,
    public value?: ValueRef
  ) {
    this.nulled = false
  }
}

const ValueEditorContext = React.createContext<ValueEditor>(undefined!)
export const useValueEditor = () => React.useContext(ValueEditorContext)

export const Editor = observer(({ nullable, value, type }: EditorProps) => {
  const valueEditor = useMemo(() => new ValueEditor(type, nullable, value), [])

  return (
    <ValueEditorContext.Provider value={valueEditor}>
      <StyledEditor>
        <Null />
        <Field disabled={valueEditor.nulled} focused={valueEditor.focused}>
          <StringEditor />
        </Field>
      </StyledEditor>
    </ValueEditorContext.Provider>
  )
})
