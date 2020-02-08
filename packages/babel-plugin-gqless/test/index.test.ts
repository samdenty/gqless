// @ts-ignore
import pluginTester from 'babel-plugin-tester'
import plugin from '../src'

pluginTester({
  plugin,
  snapshot: true,
  tests: {
    'inserts name option for components': `
      import { graphql } from '@gqless/react'

      export const A = graphql(null)
      export const B = graphql(null, { existing: true })
      export const C = graphql(null, { name: 'Test' })
    `,

    'inserts name for useVariable': `
      import { useVariable } from '@gqless/react'

      const A = useVariable('')
      const B = useVariable('', 'Test')

      const C = useVariable('', false)
      const D = useVariable('', false, 'Test')
    `,

    'inserts name for useFragment': `
      import { useFragment } from '@gqless/react'

      const A = useFragment(null)
      const B = useFragment(null, 'User')
      const C = useFragment(null, 'User', 'Test')
    `,
  },
})
