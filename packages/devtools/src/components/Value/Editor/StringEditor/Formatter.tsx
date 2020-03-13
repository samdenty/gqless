import * as React from 'react'
import styled from '@emotion/styled'

const URL_REGEX = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/

const Link = styled.a`
  color: inherit;
  text-decoration-color: rgba(118, 133, 222, 0.55);
  pointer-events: initial;

  &:hover {
    &,
    * {
      color: rgba(118, 133, 222) !important;
    }
  }
`

const Char = styled.span<{ opacity?: number }>`
  color: rgb(203, 211, 255, ${p => p.opacity || 1});
`

export interface FormatterProps {
  children: string
}

export function Formatter({ children: text }: FormatterProps): any {
  if (URL_REGEX.test(text)) {
    const url = new URL(text)
    return (
      <Link href={text}>
        <Char opacity={0.7}>{url.protocol}//</Char>
        <Char>{url.host}</Char>
        <Char opacity={0.8}>
          {url.pathname.split('').map((char, i) => {
            if (char === '/') {
              return (
                <Char key={i} opacity={0.7}>
                  /
                </Char>
              )
            }

            return char
          })}
        </Char>
        <Char opacity={0.6}>
          {url.search}
          {url.hash}
        </Char>
      </Link>
    )
  }

  return text.split('').map((char, i) => {
    if (char === '\n') {
      return (
        <span style={{ opacity: 0.5 }} key={i}>
          ↵
        </span>
      )
    }

    return char
  })
}
