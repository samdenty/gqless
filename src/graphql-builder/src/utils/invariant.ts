const isProduction: boolean = process.env.NODE_ENV === 'production'

export const invariant = (condition: boolean, message: string) => {
  if (condition) return

  if (isProduction) {
    throw new Error()
  } else {
    throw new Error(message)
  }
}
