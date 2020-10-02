import * as React from '../jsx'

export function Preview<T extends any>({
  elements,
  colon,
  objectDepth,
  isFragment,
}: {
  elements: T[]
  objectDepth: number
  colon?: boolean
  isFragment?: (element: T) => boolean
}) {
  return (
    <span style={{ fontStyle: objectDepth ? 'normal' : 'italic' }}>
      {colon && objectDepth && `:`}

      {` {`}
      {elements.map((element, i) => (
        <span>
          <span style={{ opacity: 0.7 }}>
            {isFragment && isFragment(element) ? <span>...</span> : null}
            {String(element).replace(/\(.+$/, `(…)`)}
          </span>

          {i !== elements.length - 1 && <span>, </span>}
        </span>
      ))}
      {`}`}
    </span>
  )
}
