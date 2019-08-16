import { invariant } from '@gqless/utils'

import { Interceptor } from '../Interceptor'
import { ACCESSOR, Accessor } from './Accessor'

let lastAccessor: Accessor
const interceptor = new Interceptor()
interceptor.onAccessor(accessor => (lastAccessor = accessor))
interceptor.start()

export const getAccessor = (input: any): Accessor => {
  if (input) {
    // Attempt to lookup symbol
    const accessor = input[ACCESSOR]
    if (accessor) return accessor

    // Support passing accessor directly
    if (input instanceof Accessor) return input
  }

  invariant(
    !!lastAccessor,
    lastAccessorErrorMessage(`no accessors have been referenced yet!`)
  )

  // Check to see if lastAccessor is the same value as
  // input. If it is, then return it
  const data = lastAccessor.data

  invariant(
    data === input,
    lastAccessorErrorMessage(
      `'${input}' not equal to '${
        lastAccessor.path
      }' (last referenced accessor)`
    )
  )

  return lastAccessor
}

const lastAccessorErrorMessage = (message: string) =>
  `Indeterminate accessor! ${message}\n\n` +
  `Ensure calls to getAccessor() *always* dereference data inside the call\n\n` +
  `GOOD : \`getAccessor(user.name)\`\n` +
  `BAD  : \`getAccessor(name)\`\n`
