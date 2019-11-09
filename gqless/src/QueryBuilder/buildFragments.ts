import { SelectionTree } from './SelectionTree'
import { Formatter } from './Formatter'
import { Fragment } from '../Selection'
import { buildSelections } from './buildSelection'

export const buildFragments = (
  { _SPACE, _NEWLINE, _hug, _indent, _formatter }: Formatter,
  tree: SelectionTree
) => {
  if (_formatter._options.fragments === 'inline') return ''

  const buildFragment = (
    name: string,
    fragmentTree: SelectionTree<Fragment>
  ) => {
    return `fragment ${name} on ${fragmentTree._selection._node}${_SPACE}${_hug(
      _indent(buildSelections(_formatter, fragmentTree))
    )}`
  }

  return Array.from(tree._duplicatedFragments)
    .map(([name, tree]) => buildFragment(name, tree))
    .join(_NEWLINE)
}
