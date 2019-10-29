const isProduction: boolean = process.env.NODE_ENV === 'production'

const prefix = `[gqless] `

export function warning(condition: any, message?: string) {
  if (condition) return
  if (isProduction) return

  const text = prefix + message

  if (typeof console !== 'undefined') {
    console.warn(text)
  }

  // Throwing an error and catching it immediately
  // to improve debugging
  // A consumer can use 'pause on caught exceptions'
  // https://github.com/facebook/react/issues/4216
  try {
    throw Error(text)
  } catch (x) {}
}
