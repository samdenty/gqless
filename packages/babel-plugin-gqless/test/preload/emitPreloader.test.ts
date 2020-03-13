import { preload } from '../setup'

it('supports filtering', () => {
  const files = {
    a: `
      export default user => {
        user.a.b
        user.a.c
        user.b
      }
    `,
  }

  expect(preload(files)).toMatchSnapshot()
  expect(preload(files, '{a:{b}}')).toMatchSnapshot()
  expect(preload(files, '{a}')).toMatchSnapshot()
})
