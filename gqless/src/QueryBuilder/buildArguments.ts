import { Formatter } from './Formatter'
import { Variable } from '../Variable'
import { buildVariable, ConnectedVariable } from './buildVariable'
import {
  Arguments,
  UArguments,
  InputNode,
  ArrayNode,
  NodeContainer,
} from '../Node'
import { invariant } from '@gqless/utils'

export const buildArguments = (
  { SPACE, SEPARATOR, options }: Formatter,
  args: Record<string, any>,
  connected?: Omit<ConnectedVariable, 'nullable' | 'node'> & { node: Arguments }
) => {
  const buildKeyed = (arg: Record<string, any>, path: string[]) => {
    const keys = Object.keys(arg)
    keys.sort()

    return keys
      .map(key => {
        const result = build(arg[key], [...path, key])
        if (result === undefined) return

        return `${key}:${SPACE}${result}`
      })
      .filter(Boolean)
      .join(SEPARATOR)
  }

  const build = (arg: any, path: string[]): string => {
    if (options.variables && arg instanceof Variable) {
      const getByPath = (
        node: UArguments,
        [prop, ...path]: string[]
      ): UArguments => {
        if (prop === undefined) return node

        if (node instanceof InputNode) {
          return getByPath(node.inputs[prop].ofNode, path)
        }

        if (node instanceof ArrayNode) {
          return getByPath(node.ofNode, path)
        }

        throw invariant(false, `bad argument`)
      }

      const getNodeByPath = ([argName, ...path]: string[]) => {
        const argField = connected!.node.inputs[argName]

        const parent = path.length
          ? getByPath(argField.ofNode, path.slice(0, -1))
          : argField

        const node = path.length
          ? getByPath(parent, [path[path.length - 1]])
          : argField.ofNode

        return {
          node,
          nullable: parent instanceof NodeContainer ? parent.nullable : false,
        }
      }

      const lookup = connected && getNodeByPath(path)

      return buildVariable(
        arg,
        connected && {
          ...connected,
          ...lookup!,
          path: [...((connected && connected.path) || []), ...path],
        }
      )
    }

    if (arg && typeof arg.toJSON === 'function') arg = arg.toJSON()

    if (
      arg === null ||
      typeof arg === 'string' ||
      typeof arg === 'number' ||
      typeof arg === 'boolean'
    ) {
      return JSON.stringify(arg)
    }

    if (Array.isArray(arg)) {
      return `[${arg.map(a => build(a, path)).join(SEPARATOR)}]`
    }

    return `{${buildKeyed(arg, path)}}`
  }

  return buildKeyed(args, [])
}
