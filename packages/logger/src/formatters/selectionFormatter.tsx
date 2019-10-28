import { Selection, Fragment } from 'gqless'

import { Path, Preview, Tree, TreeItem } from './components'
import * as React from './jsx'

// TODO
export const selectionFormatter = {
  header(selection: any, config: any = {}) {
    try {
      if (!(selection instanceof Selection)) return null

      const { selections } = selection
      return (
        <div>
          <Path
            path={[selection]}
            objectDepth={config.objectDepth}
            isRoot={selection => selection.constructor === Selection}
            isFragment={selection => selection instanceof Fragment}
          />
          {selections.size && (
            <Preview
              elements={Array.from(selections)}
              objectDepth={config.objectDepth}
              isFragment={s => s instanceof Fragment}
            />
          )}
        </div>
      )
    } catch {
      return null
    }
  },

  body(selection: Selection, config: any = {}) {
    const selections = Array.from(selection.selections)
    selections.sort(
      (a, b) => +(b instanceof Fragment) - +(a instanceof Fragment)
    )

    return (
      <Tree>
        {selections.map(selection => (
          <TreeItem
            object={selection}
            root={!!selection.selections.size}
            objectDepth={(config.objectDepth || 0) + 1}
          />
        ))}
      </Tree>
    )
  },

  hasBody(selection: Selection) {
    return !!selection.selections.size
  },
}
