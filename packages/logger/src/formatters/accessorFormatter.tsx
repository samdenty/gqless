import * as React from './jsx'
import { Accessor, RootAccessor } from 'gqless'

export const accessorFormatter = {
  header(accessor: any, config: any = {}) {
    if (!(accessor instanceof Accessor)) return null

    const path = config.objectDepth
      ? accessor.path.slice(config.objectDepth)
      : accessor.path

    const { children } = accessor
    return (
      <div>
        {path.map((accessor, i) => {
          const isRoot = accessor instanceof RootAccessor

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
                {accessor.toString()}
              </span>

              {i !== path.length - 1 && <span style={{ opacity: 0.8 }}>.</span>}
            </span>
          )
        })}

        {children.length ? (
          <span style={{ fontStyle: config.objectDepth ? 'normal' : 'italic' }}>
            {config.objectDepth && `:`}

            {` {`}
            {children.map((accessor, i) => (
              <span>
                <span style={{ opacity: 0.7 }}>
                  {accessor.toString().replace(/\(.+$/, `(…)`)}
                </span>

                {i !== children.length - 1 && <span>, </span>}
              </span>
            ))}
            {`}`}
          </span>
        ) : (
          config.objectDepth && (
            <span>
              {`: `}
              <object
                object={accessor.value ? accessor.value.toJSON() : null}
              />
            </span>
          )
        )}
      </div>
    )
  },

  body(accessor: Accessor, config: any = {}) {
    return (
      <ol
        style={{
          listStyleType: 'none',
          padding: 0,
          margin: '0 0 0 12px',
          fontStyle: 'normal',
        }}
      >
        {accessor.children.map(accessor => (
          <li
            style={{
              marginLeft: !accessor.children.length ? '14px' : 0,
            }}
          >
            {/*
            // @ts-ignore */}
            <object
              object={accessor}
              config={{
                objectDepth: accessor.path.length - 1,
              }}
            />
          </li>
        ))}
      </ol>
    )
  },

  hasBody(accessor: Accessor) {
    return !!accessor.children.length
  },
}
