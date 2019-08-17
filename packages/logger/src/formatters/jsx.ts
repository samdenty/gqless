// @ts-ignore
import { string } from 'to-style'

const JSX_ELEMENT = Symbol('JSX_ELEMENT')

export function createElement(
  element: string | Function,
  props: any,
  ...children: any
) {
  if (typeof element === 'function') {
    children[JSX_ELEMENT] = true

    return element({ ...props, children })
  }

  if (props && props.style) {
    props.style = string(props.style)
  }

  if (Array.isArray(children) && children[0] && children[0][JSX_ELEMENT]) {
    ;[children] = children
  }

  return [
    element,
    props,
    ...children
      .map((child: any) =>
        Array.isArray(child) && !child.find(e => !Array.isArray(e))
          ? child
          : [child]
      )
      .flat()
      .filter(Boolean),
  ]
}
