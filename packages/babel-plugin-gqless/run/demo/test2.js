// const h = a => a.name
// const {
//   a: [bob],
// } = { a: [h] }

// export const {
//   asd: [, test],
// } = { asd: [, bob] }

const { b } = { b: { a: () => {} } }

export const { test } = b

export const Test = ({ users, ...props }) => {
  users['0']
}
