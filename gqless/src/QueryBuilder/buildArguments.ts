import { Formatter } from './Formatter'
import { Variable } from '../Variable'
import { buildVariable, ConnectedVariable } from './buildVariable'
import {
  Arguments,
  InputNode,
  ArrayNode,
  EnumNode,
  ScalarNode,
  UArguments,
} from '../Node'

interface ArgContext<TNode extends object = object> {
  _node: TNode
  _nullable: boolean
}

export const buildArguments = (
  { _SPACE, _SEPARATOR, _options, _formatter }: Formatter,
  args: Record<string, any>,
  info?: Omit<ConnectedVariable, '_nullable' | '_node'> & { _node: Arguments }
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
          const field = context._node._inputs[key]

          keyContext = {
            _node: field._ofNode,
            _nullable: field._nullable,
          }
        }

        const result = build(arg[key], [...path, key], keyContext)
        if (result === undefined) return

        return `${key}:${_SPACE}${result}`
      })
      .filter(Boolean)
      .join(_SEPARATOR)
  }

  const build = (arg: any, path: string[], context?: ArgContext<any>): string => {
    if (_options.variables && arg instanceof Variable) {
      return buildVariable(
        _formatter,
        arg,
        {
          ...info,
          ...context as ArgContext<UArguments>,
          _path: [...((info && info._path) || []), ...path],
        }
      )
    }

    if (arg && typeof arg.toJSON === 'function') arg = arg.toJSON()

    if (arg === null) {
      return 'null'
    }

    if (context?._node instanceof EnumNode) {
      return arg
    }

    if (
      typeof arg === 'string' ||
      typeof arg === 'number' ||
      typeof arg === 'boolean'
    )
      return JSON.stringify(arg)

    if (context?._node instanceof ScalarNode) {
      // Object / Array passed as scalar
      // serialize as a JSON-string
      return JSON.stringify(JSON.stringify(arg))
    }

    if (Array.isArray(arg)) {
      let indexContext: ArgContext | undefined
      if (context) {
        const arrayNode = (context._node as ArrayNode)
        indexContext = {
          _node: arrayNode._ofNode,
          _nullable: arrayNode._nullable
        }
      }

      return `[${arg.map(a => build(a, path, indexContext)).join(_SEPARATOR)}]`
    }

    return `{${_SPACE}${buildKeyed(arg, path, context)}${_SPACE}}`
  }

  return buildKeyed(args, [], info && { _node: info._node, _nullable: false })
}
