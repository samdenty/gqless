// @ts-ignore
import { string } from 'to-style'

export function createElement(element: string, props: any, ...children: any) {
  if (props && props.style) {
    props.style = string(props.style)
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
