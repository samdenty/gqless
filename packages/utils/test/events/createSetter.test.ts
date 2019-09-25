import { createSetter } from '../../src'

let onSet: ReturnType<typeof createSetter>
let data: { key: number }
beforeEach(() => {
  data = { key: 0 }
  onSet = createSetter(data, 'key')
})

it('emits events on set', () => {
  expect(data.key).toEqual(0)
  const callback = jest.fn()

  onSet(callback)
  data.key = 1

  expect(data.key).toEqual(1)
  expect(callback).toBeCalledWith(0, 1)
  callback.mockClear()

  data.key = 1
  expect(callback).not.toBeCalled()
})
