import React from 'react'
import styled from 'styled-components'

import TrendingItem from 'components/trendingItem'
import TopVideos from '../TopVideos'

const Container = styled.div`
  width: 100%;
  display: flex;
`
const TrendingContainer = styled.div`
  margin-top: 20px;
  justify-content: center;
  display: flex;
`

const Posts = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 2;
  justify-content: space-between;
`

export default ({ TopMusicPosts, TopVideosData }) => (
  <Container>
    <Posts>
      {TopMusicPosts.map(item => (
        <TrendingContainer>
          <TrendingItem data={item} />
        </TrendingContainer>
      ))}
    </Posts>
    <TopVideos data={TopVideosData} />
  </Container>
)
