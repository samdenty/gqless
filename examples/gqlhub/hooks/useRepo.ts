import { graphql } from '@gqless/react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { query } from '../github'
import * as React from 'react'

export const useRepo = () => {
  const route = useRouter()

  return query.repository({
    name: route.query.repo as string,
    owner: route.query.user as string,
  })
}
