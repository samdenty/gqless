import { lazyGetters } from '../src'

it('works', () => {
  const fn = jest.fn()

  const test = lazyGetters({
    get a() {
      fn()
      return 1
    },
  })

  expect(test.a).toBe(1)
  expect(test.a).toBe(1)
  expect(fn).toBeCalledTimes(1)
})
