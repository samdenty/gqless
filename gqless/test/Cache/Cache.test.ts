import { Cache } from 'gqless'

import { schema } from '@internal/fixtures'

let cache: Cache
beforeEach(() => {
  cache = new Cache(schema.Query)
})

it('works', () => {
  // cache.nodeValues.get(schema.Query)!.get('query.asd')
})
