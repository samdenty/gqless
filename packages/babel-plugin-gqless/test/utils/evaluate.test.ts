import { evaluate } from '../setup'

it('works', () => {
  const result = evaluate(`
    ({ num: 1, arr: [, 'str'] });
  `)
  expect(result).toMatchInlineSnapshot(`
    Record {
      "num": 1
      "arr": Record {
        0: null
        1: "str"
      }
    }
  `)
})

it('works with var references', () => {
  const result = evaluate(`
    const num = 1;
    const a = { num };
    a
  `)
  expect(result).toMatchInlineSnapshot(`
    Record {
      "num": 1
    }
  `)
})

it('works with de-structuring', () => {
  const result = evaluate(`
    const { num } = { num: 1 };
    ({ num });
  `)
  expect(result).toMatchInlineSnapshot(`
    Record {
      "num": 1
    }
  `)
})

it('works with spread', () => {
  const result = evaluate(`
    const { obj } = { obj: { num: 2, filNum: 3, sprNum: 4 } };
    const { filNum, ...filteredObj } = obj;
    ({ num: 1, ...filteredObj });
  `)
  expect(result).toMatchInlineSnapshot(`
    Record {
      "num": 2
      "sprNum": 4
    }
  `)
})
