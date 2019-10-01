import { createMemo } from '../src'

let memo: ReturnType<typeof createMemo>

beforeEach(() => {
  memo = createMemo()
})

it('works', () => {
  let i = 0
  const callback = jest.fn(() => ++i)

  const firstResult = memo.test(callback, [1, 2])
  expect(firstResult).toEqual(1)

  const secondResult = memo.test(callback, [1, 2])
  expect(callback).toBeCalledTimes(1)
  expect(secondResult).toEqual(1)

  const invalidated = memo.test(callback, [1, 3])
  expect(callback).toBeCalledTimes(2)
  expect(invalidated).toEqual(2)

  const prev = memo.test(callback, [1, 2])
  expect(callback).toBeCalledTimes(2)
  expect(prev).toEqual(1)
})
