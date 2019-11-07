import { Plugins } from 'gqless'

it('supports calling all plugins', () => {
  const plugins = new Plugins()

  const plugin1 = jest.fn(() => 1)
  const plugin2 = jest.fn(() => 2)

  plugins.add({ dispose: plugin1 })
  plugins.add({ dispose: plugin2 })

  expect(plugins.all.dispose()).toEqual([1, 2])
})

it('supports finding a value from plugins', () => {
  const plugins = new Plugins()

  const plugin1 = jest.fn()
  const plugin2 = jest.fn(() => 2)
  const plugin3 = jest.fn()

  plugins.add({ dispose: plugin1 })
  plugins.add({ dispose: plugin2 })
  plugins.add({ dispose: plugin3 })

  expect(plugins.first.dispose()((value: any) => !!value)).toEqual(2)

  expect(plugin1).toBeCalled()
  expect(plugin3).not.toBeCalled()
})
