import { Formatter } from './Formatter'
import { Variable } from '../Variable'

export const buildArguments = (
  { SPACE, SEPARATOR, options }: Formatter,
  args: Record<string, any>
) => {
  const buildKeyed = (arg: Record<string, any>) => {
    const keys = Object.keys(arg)
    keys.sort()

    return keys
      .map(key => {
        const result = build(arg[key])
        if (result === undefined) return

        return `${key}:${SPACE}${result}`
      })
      .filter(Boolean)
      .join(SEPARATOR)
  }

  const build = (arg: any): string => {
    if (options.variables && arg instanceof Variable) {
      return `$${arg.name}`
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
      return `[${arg.map(a => build(a)).join(SEPARATOR)}]`
    }

    return `{${buildKeyed(arg)}}`
  }

  return buildKeyed(args)
}
