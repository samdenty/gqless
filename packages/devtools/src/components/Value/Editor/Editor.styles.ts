import styled from '@emotion/styled'
import { css } from '@emotion/core'

export const StyledEditor = styled.div`
  display: flex;
  align-items: center;
`

export const Field = styled.div<{ disabled: boolean; focused: boolean }>`
  position: relative;
  overflow: hidden;
  display: flex;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgb(203, 211, 255);
  border-radius: 0.3em;
  padding: 0.2em 0.5em;
  background: ${p => (p.focused ? `rgba(255, 255, 255, 0.06)` : 'none')};

  ${p =>
    p.disabled &&
    css`
      opacity: 0.2;
      pointer-events: none;
    `}
`
