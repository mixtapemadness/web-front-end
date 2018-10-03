import React from 'react'
import styled from 'styled-components'
import TopVideo from 'components/topVideo'
import topVideosEnhancer from './topVideosEnhancer'

const TopVideosContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 10px;
  @media only screen and (max-width: 1130px) {
    justify-content: normal;
  }
`

const Header = styled.h1`
  width: 100%;
  color: #111;
  margin: 0;
`

const MoreVideos = styled.h4`
  width: 100%;
  color: #111;
  cursor: pointer;
`

const TopVideos = ({ data }) => (
  <TopVideosContainer>
    <Header>Top Music Videos</Header>
    {data && data.Posts && data.Posts.map(item => <TopVideo data={item} />)}
    <MoreVideos>More Videos +</MoreVideos>
  </TopVideosContainer>
)

export default topVideosEnhancer(TopVideos)
