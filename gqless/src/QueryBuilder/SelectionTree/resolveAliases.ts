import { SelectionTree } from './SelectionTree'
import { invariant } from '@gqless/utils'
import { ObjectNode, ArrayNode } from '../../Node'
import { Fragment } from '../../Selection'

/**
 * Resolves aliases from a JSON object, back into cache-compatible
 * keys
 *
 * eg. user -> user(id: 100)
 */
export function resolveAliases(this: SelectionTree, data: any) {
  const recurse = (node: object, data: any) => {
    if (!data) return

    if (node instanceof ObjectNode) {
      let originals = new Map<string, any>()
      let updated = new Set<string>()

      const recurseObjectTree = (tree: SelectionTree) =>
        tree.children.forEach(tree => {
          if (tree.selection instanceof Fragment) {
            recurseObjectTree(tree)
            return
          }

          if (!data.hasOwnProperty(tree.key!)) return
          const cacheKey = tree.selection.toString()

          let value = data[tree.key!]
          if (originals.has(tree.key!)) {
            value = originals.get(tree.key!)
            originals.delete(tree.key!)
          }

          if (tree.key !== cacheKey) {
            // If the key already exists, record original value
            if (data.hasOwnProperty(cacheKey))
              originals.set(cacheKey, data[cacheKey])

            data[cacheKey] = value
            updated.add(cacheKey)

            // Only delete, if it hasn't been updated
            if (!updated.has(tree.key!)) delete data[tree.key!]
          }

          tree.resolveAliases(value)
        })

      recurseObjectTree(this)

      invariant(
        !originals.size,
        `Unable to resolve aliases for keys ${Array.from(originals.keys())
          .map(k => `'${k}'`)
          .join(', ')} [at path ${this.toString()}]`
      )
    }

    if (node instanceof ArrayNode) {
      ;(data as any[]).forEach(indexData => recurse(node.ofNode, indexData))
    }
  }

  recurse(this.selection.node, data)
}
