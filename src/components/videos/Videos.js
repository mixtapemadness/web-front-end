/* eslint operator-linebreak: 0 */
/* eslint implicit-arrow-linebreak: 0 */

import React from 'react'
import styled from 'styled-components'
import Video from 'components/video'
import videosEnhancer from './videosEnhancer'

const VideosContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  ${p => p.mb && `margin-bottom: ${p.mb}px`};
`

const SectionHeader = styled.span`
  font-weight: 600;
  font-size: 28px;
`

const SectionSubHeader = styled.span`
  font-size: 17.5px;
  letter-spacing: 1.1px;
  font-weight: 600;
`

const VideoItems = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 1150px) {
    flex-direction: column;
    align-items: center;
  }
`

const Videos = ({ data }) => {
  // console.log('data', data.Posts)
  const Posts = data && data.Posts && data.Posts
  // console.log('Posts', Posts);
  return (
    <VideosContainer>
      <HeaderContainer mb={60}>
        <SectionHeader>Videos</SectionHeader>
        <SectionSubHeader>
          Mixtape Madness Share Their Top Videos This Week
        </SectionSubHeader>
      </HeaderContainer>

      <VideoItems>
        {Posts && Posts.map(item => <Video key={item.id} data={item} />)}
      </VideoItems>
    </VideosContainer>
  )
}

export default videosEnhancer(Videos)
