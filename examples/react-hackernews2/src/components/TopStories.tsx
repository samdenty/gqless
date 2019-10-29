import * as React from 'react'
import { graphql } from '@gqless/react'
import { query } from '../graphql'
import { Story } from './Story'

export const TopStories = graphql(() => {
  return (
    <div>
      {query.hn!.topStories({ limit: 25 })!.map(story => (
        <Story key={story!.id} story={story!} />
      ))}
    </div>
  )
})
