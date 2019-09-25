import { SelectionTree } from './SelectionTree'
import { Formatter } from './Formatter'
import { Fragment } from '../Selection'
import { buildSelections } from './buildSelection'

export const buildFragments = (
  { SPACE, NEWLINE, formatter }: Formatter,
  tree: SelectionTree
) => {
  if (!formatter.options.fragments) return ''

  const buildFragment = (
    name: string,
    fragmentTree: SelectionTree<Fragment>
  ) => {
    return `fragment ${name} on ${
      fragmentTree.selection.node
    }${SPACE}${buildSelections(formatter, fragmentTree)}`
  }

  return Array.from(tree.duplicatedFragments)
    .map(([name, tree]) => buildFragment(name, tree))
    .join(NEWLINE)
}
