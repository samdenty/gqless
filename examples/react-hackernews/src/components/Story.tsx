import * as React from 'react'
import { graphql } from '@gqless/react'
import { HackerNewsItem } from '../graphql'
import styled from 'styled-components'

const StyledStory = styled.article`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 2rem;
`

const Title = styled.h2``

const Link = styled.a``

const Content = styled.div``

const Points = styled.span``

const Username = styled.a``

const CommentCount = styled.a``

export const Story = graphql(({ story }: { story: HackerNewsItem }) => {
  return (
    <StyledStory>
      <Title>
        <Link href={story.url!}>{story.title}</Link>
      </Title>
      <Content>
        <Points>{story.score} points</Points>
        <Username href={`https://news.ycombinator.com/user?id=${story.by.id}`}>
          {story.by.id}
        </Username>

        <CommentCount href={`https://news.ycombinator.com/item?id=${story.id}`}>
          {story.descendants} comments
        </CommentCount>
      </Content>
    </StyledStory>
  )
})
