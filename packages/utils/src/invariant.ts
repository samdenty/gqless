const isProduction: boolean = process.env.NODE_ENV === 'production'

const prefix = `[gqless] `

export function invariant(condition: any, message?: string): asserts condition {
  if (condition) return

  if (isProduction) {
    throw new Error(
      prefix +
        'invariant exception occured! view full message in development mode'
    )
  } else {
    throw new Error(prefix + message)
  }
}
