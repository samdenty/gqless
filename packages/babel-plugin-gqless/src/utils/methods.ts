export const RETURNS_SELF = [
  'concat',
  'copyWithin',
  'filter',
  'reverse',
  'shift',
  'slice',
  'sort',
  'splice',
]

export const RETURNS_ARRAY_ELEMENT = ['find']

export const ARRAY_ITERATOR: Record<
  string,
  [
    // element arg pos
    number,
    // array arg pos
    number
  ]
> = {
  every: [0, 2],
  filter: [0, 2],
  find: [0, 2],
  findIndex: [0, 2],
  flatMap: [0, 2],
  forEach: [0, 2],
  map: [0, 2],
  reduce: [0, 3],
  reduceRight: [0, 3],
  some: [0, 2],
}
