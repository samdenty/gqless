import { INDEX } from 'gqless'

export const Query = () => ({
  object: () => ({
    queryObjectNewProperty: 1234,
  }),

  arrayOfObjects: {
    newArrayProperty: 1234,

    [INDEX]: {
      overriddenString: 'arrayOfObjectsIndex',
      newIndexProperty: 1234,
    },
  },
})

export const Object = {
  newPropertyNumber: 1234,
  newPropertyFunction: () => {},

  overriddenString: (value: string) => `overridden_${value}`,
  overriddenInt: 1234,
}
