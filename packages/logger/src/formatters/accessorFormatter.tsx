import { Accessor, RootAccessor, ScalarNode } from 'gqless'

import { Path, Preview, Tree, TreeItem } from './components'
import * as React from './jsx'

export const accessorFormatter = {
  header(accessor: any, config: any = {}) {
    try {
      if (!(accessor instanceof Accessor)) return null

      const path = config.objectDepth
        ? accessor.path.slice(config.objectDepth)
        : accessor.path

      const { children } = accessor
      return (
        <div>
          <Path
            path={path}
            objectDepth={config.objectDepth}
            isRoot={accessor => accessor instanceof RootAccessor}
          />

          {children.length ? (
            <Preview
              elements={children}
              objectDepth={config.objectDepth}
              colon
            />
          ) : (
            (config.objectDepth || accessor.node instanceof ScalarNode) && (
              <span>
                {`: `}
                {/*
              //@ts-ignore*/}
                <object
                  object={accessor.value ? accessor.value.toJSON() : null}
                />
              </span>
            )
          )}
        </div>
      )
    } catch {
      return null
    }
  },

  body(accessor: Accessor) {
    return (
      <Tree>
        {accessor.children.map(accessor => (
          <TreeItem
            object={accessor}
            root={!!accessor.children.length}
            objectDepth={accessor.path.length - 1}
          />
        ))}
      </Tree>
    )
  },

  hasBody(accessor: Accessor) {
    return !!accessor.children.length
  },
}
