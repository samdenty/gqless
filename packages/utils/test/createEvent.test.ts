import { createEvent } from '../src'

let onEvent = createEvent()

it('emits events', () => {
  const callback = jest.fn(() => 3)

  onEvent(callback)
  onEvent(() => 4)

  const result = onEvent.emit(1, 2)

  expect(callback).toBeCalledWith(1, 2)
  expect(result).toEqual([3, 4])
})

it('handles thenables', async () => {
  const callback = jest.fn()

  onEvent.then(callback)

  onEvent.emit(1, 2)
  onEvent.emit(2, 3)

  expect(callback).toBeCalledTimes(1)
  expect(callback).toHaveBeenCalledWith(1, 2)
})

it('supports filtering', () => {
  const callback = jest.fn()
  const onlyStrings = onEvent.filter(value => typeof value === 'string')

  onlyStrings(callback)

  onEvent.emit(1)
  onEvent.emit('a')

  expect(callback).toBeCalledTimes(1)
  expect(callback).toBeCalledWith('a')
})
