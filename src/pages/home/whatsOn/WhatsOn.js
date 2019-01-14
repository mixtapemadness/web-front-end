/* eslint operator-linebreak: 0 */
/* eslint implicit-arrow-linebreak: 0 */
/* eslint arrow-body-style: 0 */
/* eslint no-unused-vars: 0 */

import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import WhatsOnComponent from 'components/whatsOnComponent'
import SliderComponent from 'components/slider'
import { CardLoader } from 'components/loaders'
import whatsOnEnhancer from './whatsOnEnhancer'

const Container = styled.div`
  width: 100%;
  margin: 40px auto;
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

const WhatsOnItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media only screen and (max-width: 1190px) {
    align-items: center;
    justify-content: center;
  }
`

const settings = {
  // dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  rows: 2,
  slidesPerRow: 2,
  slidesToShowResponsive: 2,
  slidesToScrollResponsive: 2,
  centerPadding: '0px',
  responsive: [
    {
      breakpoint: 1050,
      settings: {
        rows: 1,
        slidesPerRow: 1,
      },
    },
  ],
}

const WhatsOn = ({ width, data }) => {
  const Posts = data && data.Posts && data.Posts
  // const posts = data && data.Posts && data.Posts
  return (
    <Container>
      <HeaderContainer mb={0}>
        <SectionHeader>
          <Link to="/blog/category/events">Events</Link>
        </SectionHeader>
        <SectionSubHeader>
          {' '}
          Check Out The Latest Music This Week
        </SectionSubHeader>
      </HeaderContainer>
      <WhatsOnItemsContainer>
        <SliderComponent settings={settings}>
          {data.loading &&
            [...Array(8)].map(i => (
              <CardLoader key={`${i}-interview-loader`} />
            ))}
          {!data.loading &&
            Posts &&
            Posts.map(item => <WhatsOnComponent data={item} key={item.id} />)}
        </SliderComponent>
      </WhatsOnItemsContainer>
      {/* <FlexDiv jc="space-between" mb={33}>
        {whatsOnVideos.map(item => (
          <WhatsOnComponent data={item} key={item.id} />
        ))}
      </FlexDiv>
      <FlexDiv jc="space-between">
        {whatsOnData.map(item => (
          <WhatsOnComponent data={item} key={item.id} />
        ))}
      </FlexDiv> */}
    </Container>
  )
}

export default whatsOnEnhancer(WhatsOn)
