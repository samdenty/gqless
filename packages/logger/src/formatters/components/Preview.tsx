import * as React from '../jsx'

export const Preview = ({
  elements,
  colon,
  objectDepth,
}: {
  elements: any[]
  objectDepth: number
  colon?: boolean
}) => (
  <span style={{ fontStyle: objectDepth ? 'normal' : 'italic' }}>
    {colon && objectDepth && `:`}

    {` {`}
    {elements.map((element, i) => (
      <span>
        <span style={{ opacity: 0.7 }}>
          {element.toString().replace(/\(.+$/, `(…)`)}
        </span>

        {i !== elements.length - 1 && <span>, </span>}
      </span>
    ))}
    {`}`}
  </span>
)
