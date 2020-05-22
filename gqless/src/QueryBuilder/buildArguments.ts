import {
  Arguments,
  ArrayNode,
  EnumNode,
  InputNode,
  ScalarNode,
  UArguments,
} from '../Node'
import { Variable } from '../Variable'
import { ConnectedVariable, buildVariable } from './buildVariable'
import { Formatter } from './Formatter'

interface ArgContext<TNode extends object = object> {
  node: TNode
  nullable: boolean
}

export const buildArguments = (
  { SPACE, SEPARATOR, options, formatter }: Formatter,
  args: Record<string, any>,
  info?: Omit<ConnectedVariable, 'nullable' | 'node'> & { node: Arguments }
) => {
  const buildKeyed = (
    arg: Record<string, any>,
    path: string[],
    context?: ArgContext<Arguments | InputNode>
  ) => {
    const keys = Object.keys(arg)
    keys.sort()

    return keys
      .map(key => {
        let keyContext: ArgContext | undefined

        if (context) {
          const field = context.node.inputs[key]

          keyContext = {
            node: field.ofNode,
            nullable: field.nullable,
          }
        }

        const result = build(arg[key], [...path, key], keyContext)
        if (result === undefined) return

        return `${key}:${SPACE}${result}`
      })
      .filter(Boolean)
      .join(SEPARATOR)
  }

  const build = (
    arg: any,
    path: string[],
    context?: ArgContext<any>
  ): string => {
    if (options.variables && arg instanceof Variable) {
      return buildVariable(formatter, arg, {
        ...info,
        ...(context as ArgContext<UArguments>),
        path: [...((info && info.path) || []), ...path],
      })
    }

    if (arg && typeof arg.toJSON === 'function') arg = arg.toJSON()

    if (arg === null) {
      return 'null'
    }

    if (context?.node instanceof EnumNode) {
      return arg
    }

    if (
      typeof arg === 'string' ||
      typeof arg === 'number' ||
      typeof arg === 'boolean'
    )
      return JSON.stringify(arg)

    if (context?.node instanceof ScalarNode) {
      // Object / Array passed as scalar
      // serialize as a JSON-string
      // using the replace so we handle JSONB fields (avoid converting to serialized JSON string)
      return JSON.stringify(arg).replace(/"([^"]+)":/g, '$1:')
    }

    if (Array.isArray(arg)) {
      let indexContext: ArgContext | undefined
      if (context) {
        const arrayNode = context.node as ArrayNode
        indexContext = {
          node: arrayNode.ofNode,
          nullable: arrayNode.nullable,
        }
      }

      return `[${arg.map(a => build(a, path, indexContext)).join(SEPARATOR)}]`
    }

    return `{${SPACE}${buildKeyed(arg, path, context)}${SPACE}}`
  }

  return buildKeyed(args, [], info && { node: info.node, nullable: false })
}
