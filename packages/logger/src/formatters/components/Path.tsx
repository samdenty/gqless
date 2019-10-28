import * as React from '../jsx'

export function Path<T extends { node: any }>({
  path,
  isRoot,
  isFragment,
  objectDepth,
}: {
  path: T[]
  objectDepth: number
  isRoot?(element: T): boolean
  isFragment?(element: T): boolean
}) {
  return (
    <span>
      {path.map((element, i) => {
        const fragment = isFragment && isFragment(element)
        const root = isRoot && isRoot(element)

        return (
          <span>
            {fragment &&
              (objectDepth ? (
                <span>...</span>
              ) : (
                <span style={{ color: 'rgb(154, 127, 213)' }}>
                  fragment{path.length === 1 ? ' ' : '['}
                </span>
              ))}

            <span
              style={{
                color: fragment
                  ? '#5db0d7'
                  : objectDepth
                  ? '#E36EEC'
                  : root
                  ? '#03A9F4'
                  : '#D2C057',
                fontWeight: root && !objectDepth ? 'bold' : 'normal',
              }}
            >
              {element.toString()}
            </span>

            {fragment && (
              <span style={{ color: 'rgb(154, 127, 213)' }}>
                <span>
                  {' '}
                  on{' '}
                  <span style={{ color: '#E36EEC' }}>
                    {String(element.node)}
                  </span>
                </span>

                {path.length !== 1 && !objectDepth && <span>]</span>}
              </span>
            )}

            {i !== path.length - 1 && <span style={{ opacity: 0.8 }}>.</span>}
          </span>
        )
      })}
    </span>
  )
}
