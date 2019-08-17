import { RootSelection, Selection } from 'gqless'

import { Path, Preview, Tree, TreeItem } from './components'
import * as React from './jsx'

export const selectionFormatter = {
  header(selection: any, config: any = {}) {
    if (!(selection instanceof Selection)) return null

    const path = config.objectDepth
      ? selection.path.slice(config.objectDepth)
      : selection.path

    const { selections } = selection
    return (
      <div>
        <Path
          path={path}
          objectDepth={config.objectDepth}
          isRoot={selection => selection instanceof RootSelection}
        />

        {selections.length && (
          <Preview elements={selections} objectDepth={config.objectDepth} />
        )}
      </div>
    )
  },

  body(selection: Selection) {
    return (
      <Tree>
        {selection.selections.map(selection => (
          <TreeItem
            object={selection}
            root={!!selection.selections.length}
            objectDepth={selection.path.length - 1}
          />
        ))}
      </Tree>
    )
  },

  hasBody(selection: Selection) {
    return !!selection.selections.length
  },
}
