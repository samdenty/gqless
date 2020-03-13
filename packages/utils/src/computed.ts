export const computed = <T>(
  target: T,
  propertyKey: string,
  descriptor: PropertyDescriptor
) => {
  const getValue = descriptor.get

  descriptor.get = function(this: any) {
    const value = getValue?.call(this)
    Object.defineProperty(this, propertyKey, {
      enumerable: true,
      value,
    })
    return value
  }
}
