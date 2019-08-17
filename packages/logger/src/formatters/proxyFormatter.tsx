import { ACCESSOR } from 'gqless'

import * as React from './jsx'

// TODO: Should instead read cache, instead of accessor children. Why: missing properties
export const proxyFormatter = {
  header(proxy: any) {
    if (!proxy || !proxy[ACCESSOR]) return null

    // @ts-ignore
    return <object object={proxy[ACCESSOR]} />
  },

  hasBody() {
    return false
  },
}
