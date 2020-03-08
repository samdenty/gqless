import styled from '@emotion/styled'
import { css } from '@emotion/core'
import TextareaAutosize from 'react-textarea-autosize'

export const StyledStringEditor = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
`

const textStyles = css`
  color: inherit;
  margin: 0;
  padding: 0;
  font-size: inherit;
`

export const TextArea = styled(TextareaAutosize)`
  ${textStyles};
  &:not(:focus) {
    opacity: 0;
  }
  ::-webkit-scrollbar {
    background: transparent;
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 20px;
  }
  background: none;
  width: 100%;
  border: none;
  resize: none;
  outline: none;
`

export const Preview = styled.p`
  ${textStyles};
  pointer-events: none;
  white-space: pre;
  position: absolute;
  top: 0;
  left: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
`
