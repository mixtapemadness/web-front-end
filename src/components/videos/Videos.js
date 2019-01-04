/* eslint operator-linebreak: 0 */
/* eslint implicit-arrow-linebreak: 0 */
/* eslint no-unused-vars: 0 */

import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Video from 'components/video'
import SliderComponent from 'components/slider'
import { CardLoader } from 'components/loaders'
import videosEnhancer from './videosEnhancer'

const VideosContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 50px;
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  ${p => p.mb && `margin-bottom: ${p.mb}px`};
`

const SectionHeader = styled.span`
  font-weight: 800;
  font-size: 38px;
`

const SectionSubHeader = styled.span`
  font-weight: 800;
  font-size: 18px;
`

const VideoItems = styled.div`
  display: flex;
  @media only screen and (max-width: 1150px) {
    flex-direction: column;
    align-items: center;
  }
`

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  rows: 3,
  slidesPerRow: 2,
  slidesToScroll: 3,
  slidesToShowResponsive: 2,
  slidesToScrollResponsive: 2,
  centerPadding: '0px',
  responsive: [
    {
      breakpoint: 1154,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        rows: 2,
      },
    },
    {
      breakpoint: 751,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 1,
        slidesPerRow: 1,
      },
    },
  ],
}
const Videos = ({ data }) => {
  const Posts = data && data.Posts && data.Posts
  return (
    <VideosContainer>
      <HeaderContainer mb={0}>
        <SectionHeader>
          <Link to="/blog/category/videos">Videos</Link>
        </SectionHeader>
        <SectionSubHeader>This weeks latest videos</SectionSubHeader>
      </HeaderContainer>
      <VideoItems>
        <SliderComponent settings={settings}>
          {data.loading &&
            [...Array(8)].map(i => <CardLoader key={`${i}-videos-loader`} />)}
          {!data.loading &&
            Posts &&
            Posts.map(item => <Video key={item.id} data={item} />)}
        </SliderComponent>
      </VideoItems>
    </VideosContainer>
  )
}

export default videosEnhancer(Videos)
