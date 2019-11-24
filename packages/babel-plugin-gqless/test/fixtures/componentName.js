import { graphql } from '@gqless/react'

export const A = graphql(null)
export const B = graphql(null, {})
export const C = graphql(null, { name: 'Test' })
