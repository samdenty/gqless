import { string } from 'to-style'
import { Selection, RootSelection } from 'gqless'

export const selectionFormatter = {
  header(selection: any, config: any = {}) {
    if (!(selection instanceof Selection)) return null

    const path = config.objectDepth
      ? selection.path.slice(config.objectDepth)
      : selection.path

    const { selections } = selection
    return (
      <div>
        {path.map((selection, i) => {
          const isRoot = selection instanceof RootSelection

          return (
            <span>
              <span
                style={{
                  color: config.objectDepth
                    ? '#E36EEC'
                    : isRoot
                    ? '#03A9F4'
                    : '#D2C057',
                  fontWeight: isRoot && !config.objectDepth ? 'bold' : 'normal',
                }}
              >
                {selection.toString()}
              </span>

              {i !== path.length - 1 && <span style={{ opacity: 0.8 }}>.</span>}
            </span>
          )
        })}

        {selections.length && (
          <span style={{ fontStyle: config.objectDepth ? 'normal' : 'italic' }}>
            {` {`}
            {selections.map((selection, i) => (
              <span>
                <span style={{ opacity: 0.7 }}>
                  {selection.toString().replace(/\(.+$/, `(…)`)}
                </span>

                {i !== selections.length - 1 && <span>, </span>}
              </span>
            ))}
            {`}`}
          </span>
        )}
      </div>
    )
  },

  body(selection: Selection, config: any = {}) {
    return (
      <ol
        style={{
          listStyleType: 'none',
          padding: 0,
          margin: '0 0 0 12px',
          fontStyle: 'normal',
        }}
      >
        {selection.selections.map(selection => (
          <li
            style={{
              marginLeft: !selection.selections.length ? '14px' : 0,
            }}
          >
            <object
              object={selection}
              config={{
                objectDepth: selection.path.length - 1,
              }}
            />
          </li>
        ))}
      </ol>
    )
  },

  hasBody(selection: Selection) {
    return !!selection.selections.length
  },
}

const React = {
  createElement: (element: string, props: any, ...children: any) => {
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
  },
}
