export const createPromise = <T>() => {
  let resolve: (...args: any[]) => any = undefined!
  let reject: (...args: any[]) => any = undefined!

  const promise = new Promise<T>((_resolve, _reject) => {
    resolve = _resolve
    reject = _reject
  })

  return { promise, resolve, reject }
}
