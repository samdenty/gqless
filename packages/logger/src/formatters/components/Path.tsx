import * as React from '../jsx'

export function Path<T extends Object>({
  path,
  isRoot,
  objectDepth,
}: {
  path: T[]
  objectDepth: number
  isRoot(element: T): boolean
}) {
  return (
    <span>
      {path.map((element, i) => {
        const root = isRoot(element)

        return (
          <span>
            <span
              style={{
                color: objectDepth ? '#E36EEC' : root ? '#03A9F4' : '#D2C057',
                fontWeight: root && !objectDepth ? 'bold' : 'normal',
              }}
            >
              {element.toString()}
            </span>

            {i !== path.length - 1 && <span style={{ opacity: 0.8 }}>.</span>}
          </span>
        )
      })}
    </span>
  )
}
