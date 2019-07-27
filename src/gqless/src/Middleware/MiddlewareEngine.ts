import { Middleware, MiddlewareMethod } from './Middleware'

type ComposableMiddleware = (middleware: Middleware[]) => Middleware[]

export class MiddlewareEngine {
  private middlewares: Middleware[] = []

  public add(...middlewares: Middleware[]): void
  public add(middleware: ComposableMiddleware): void

  public add(...args: any[]) {
    if (args.length === 1 && typeof args[0] === 'function') {
      const middleware: ComposableMiddleware = args[0]
      this.middlewares = middleware(this.middlewares)
    } else {
      this.middlewares.push(...(args as Middleware[]))
    }
  }

  public remove(...middlewares: Middleware[]) {
    middlewares.forEach(middleware => {
      const idx = this.middlewares.indexOf(middleware)

      if (idx > -1) {
        this.middlewares.splice(idx, 1)
      }
    })
  }

  public all = new Proxy<
    {
      [K in keyof Middleware]-?: (
        ...args: Parameters<MiddlewareMethod<K>>
      ) => ReturnType<MiddlewareMethod<K>>[]
    }
  >({} as any, {
    get: (_, key: keyof Middleware) => (...args: any[]) => {
      return this.middlewares
        .filter(middleware => key in middleware)
        .map(middleware => (middleware[key] as Function)(...args))
    },
  })

  public first = new Proxy<
    {
      [K in keyof Middleware]-?: (
        ...args: Parameters<MiddlewareMethod<K>>
      ) => (
        isCorrectValue: (value: ReturnType<MiddlewareMethod<K>>) => boolean
      ) => ReturnType<MiddlewareMethod<K>>
    }
  >({} as any, {
    get: (_, key: keyof Middleware) => (...args: any[]) => (
      isCorrectValue: (value: any) => boolean
    ) => {
      for (const middleware of this.middlewares.filter(
        middleware => key in middleware
      )) {
        const value = (middleware[key] as Function)(...args)
        if (isCorrectValue(value)) return value
      }
    },
  })
}
