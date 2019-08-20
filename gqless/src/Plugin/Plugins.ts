import { Plugin, PluginMethod } from './Plugin'

type ComposablePlugin = (plugin: Plugin[]) => Plugin[]

export class Plugins {
  private plugins: Plugin[] = []

  public add(...plugins: Plugin[]): void
  public add(plugin: ComposablePlugin): void

  public add(...args: any[]) {
    if (args.length === 1 && typeof args[0] === 'function') {
      const plugin: ComposablePlugin = args[0]
      this.plugins = plugin(this.plugins)
    } else {
      this.plugins.push(...(args as Plugin[]))
    }
  }

  public remove(...plugins: Plugin[]) {
    plugins.forEach(plugin => {
      const idx = this.plugins.indexOf(plugin)

      if (idx > -1) {
        this.plugins.splice(idx, 1)
      }
    })
  }

  public all = new Proxy<
    {
      [K in keyof Plugin]-?: (
        ...args: Parameters<PluginMethod<K>>
      ) => ReturnType<PluginMethod<K>>[]
    }
  >({} as any, {
    get: (_, key: keyof Plugin) => (...args: any[]) => {
      return this.plugins
        .filter(plugin => key in plugin)
        .map(plugin => (plugin[key] as Function)(...args))
    },
  })

  public first = new Proxy<
    {
      [K in keyof Plugin]-?: (
        ...args: Parameters<PluginMethod<K>>
      ) => (
        isCorrectValue: (value: ReturnType<PluginMethod<K>>) => boolean
      ) => ReturnType<PluginMethod<K>>
    }
  >({} as any, {
    get: (_, key: keyof Plugin) => (...args: any[]) => (
      isCorrectValue: (value: any) => boolean
    ) => {
      for (const plugin of this.plugins.filter(plugin => key in plugin)) {
        const value = (plugin[key] as Function)(...args)
        if (isCorrectValue(value)) return value
      }
    },
  })
}
