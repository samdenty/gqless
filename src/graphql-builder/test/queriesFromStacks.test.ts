const each = require('template-literal-table')
import { queriesFromStacks } from '../src/Batcher/queriesFromStacks'

describe('Extracts queries from stacks', () => {
  // describe.each for prettier
  const describe = { each: testStacks }

  describe.each`
    stack                 | expected
    ${[]}                 | ${undefined}
    ${['App']}            | ${'App'}
    ${['App', 'Profile']} | ${'App'}
  `('Default queries')

  describe.each`
    stack                 | expected
    ${['App', 'Profile']} | ${'App'}
    ${['App']}            | ${'App'}
    ${[]}                 | ${undefined}
  `('Default queries in reverse')

  describe.each`
    stack                         | expected
    ${['App', 'Profile']}         | ${'Profile'}
    ${['App', 'Profile', 'Name']} | ${'Profile'}
  `('3-length stacks')

  describe.each`
    stack                  | expected
    ${['App', 'Profile']}  | ${'Profile'}
    ${['Profile', 'Name']} | ${'Profile'}
  `('Merges seperated stacks')

  describe.each`
    stack                         | expected
    ${['App', 'Profile', 'Name']} | ${'Name'}
    ${['App', 'Profile', 'Name']} | ${'Name'}
  `('Replicated stacks')

  describe.each`
    stack                                | expected
    ${['Description', 'Profile']}        | ${'Profile'}
    ${['App', 'Navbar']}                 | ${'App'}
    ${['App', 'Profile']}                | ${'Profile'}
    ${['App', 'Profile', 'Description']} | ${'Profile'}
  `('Fairly complex stacks')

  describe.each`
    stack                                | expected
    ${['Description', 'Age']}            | ${'Description'}
    ${['App', 'Navbar']}                 | ${'App'}
    ${['App', 'Profile']}                | ${'App'}
    ${['App', 'Profile', 'Description']} | ${'Description'}
  `('Fairly complex stacks 2')

  describe.each`
    stack                                              | expected
    ${['App', 'Navbar', 'Logo']}                       | ${'App'}
    ${['App', 'Navbar']}                               | ${'App'}
    ${['App', 'Profile']}                              | ${'App'}
    ${['Profile', 'ProfileDescription']}               | ${'Profile'}
    ${['Profile', 'ProfileDescription', 'LoremIpsum']} | ${'Profile'}
  `('Fairly complex stacks 3')

  describe.each`
    stack                              | expected
    ${['App', 'TotalUsers']}           | ${'App'}
    ${['Navbar']}                      | ${'Navbar'}
    ${['Navbar', 'Logo']}              | ${'Navbar'}
    ${['Navbar', 'Avatar']}            | ${'Navbar'}
    ${['Navbar', 'Username']}          | ${'Navbar'}
    ${['App', 'Profile']}              | ${'App'}
    ${['ProfileDescription']}          | ${'ProfileDescription'}
    ${['App', 'Profile', 'Following']} | ${'App'}
    ${['App', 'Profile', 'Followers']} | ${'App'}
    ${['Profile', 'Name']}             | ${'Profile'}
  `('Very complex stacks')
})

function testStacks(...args: any[]) {
  return (name: string) => {
    describe(name, () => {
      const describe = { each }
      const data: { stack: string[]; expected: string }[] = describe.each(
        ...args
      )

      const queries = queriesFromStacks(data.map(({ stack }) => stack))

      queries.forEach((query, idx) => {
        const input = data[idx]

        test(`Returns ${input.expected} for [${input.stack}]`, () => {
          expect(query).toEqual(input.expected)
        })
      })
    })
  }
}
