import React from 'react'
import styled from 'styled-components'

import Post from 'components/post'
import TopVideos from '../TopVideos'

const Container = styled.div`
  width: 100%;
  display: flex;
`

const Posts = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 2;
`

export default ({ TopMusicPosts, TopVideosData }) => (
  <Container>
    <Posts>
      {TopMusicPosts.map(item => (
        <Post data={item} />
      ))}
    </Posts>
    <TopVideos data={TopVideosData} />
  </Container>
)
