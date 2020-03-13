import { useState } from 'react'
import * as React from 'react'
import { ValueRef } from '../../../../connector'
import { TextArea, Preview, StyledStringEditor } from './StringEditor.styles'
import { Formatter } from './Formatter'
import { useValueEditor } from '../Editor'
import { observer } from 'mobx-react'

export const StringEditor = observer(() => {
  const editor = useValueEditor()

  return (
    <StyledStringEditor>
      <TextArea
        disabled={editor.nulled}
        value={editor.currentValue}
        maxRows={editor.focused ? 4 : 1}
        onChange={e => {
          editor.currentValue = e.target.value
        }}
        onFocus={() => {
          editor.focused = true
        }}
        onBlur={e => {
          e.target.scrollTop = 0
          editor.focused = false
        }}
      ></TextArea>

      {!editor.focused && (
        <Preview>
          <Formatter>{editor.currentValue}</Formatter>
        </Preview>
      )}
    </StyledStringEditor>
  )
})
