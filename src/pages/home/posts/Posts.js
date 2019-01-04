/* eslint operator-linebreak: 0 */
/* eslint implicit-arrow-linebreak: 0 */
/* eslint arrow-body-style: 0 */
/* eslint no-unused-vars: 0 */

import React from 'react'
import styled from 'styled-components'
import PostItem from 'components/postItem'
import Subscribe from 'components/subscribe'
// import MobileSubscribe from 'components/mobileSubscribe'
import SliderComponent from 'components/slider'
import { CardLoader } from 'components/loaders'
import postsEnhancer from './postsEnhancer'

// const PostItemContainer = styled.div`
//   display: flex;
//   justify-content: center;
// `

const TrendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 50px auto;
  justify-content: space-around;
  @media only screen and (max-width: 1150px) {
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (max-width: 500px) {
    margin: 15px;
  }
`

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 751px) {
    text-align: center;
  }
`

const Title = styled.h1`
  font-weight: 800;
  font-size: 38px;
`

const SubTitle = styled.h2`
  font-weight: 800;
  font-size: 18px;
`

const SubscribeContainer = styled.div`
  margin: 40px 0;
  max-width: 1100px;
`

const PostItemT = (item, index) => {
  if (index === 5) {
    return (
      <React.Fragment>
        <PostItem key={item.id} data={item} />
        <SubscribeContainer>
          <Subscribe />
        </SubscribeContainer>
      </React.Fragment>
    )
  }
  return <PostItem key={item.id} data={item} />
}

const PostItems = ({ items }) => {
  return items.map((item, index) => PostItemT(item, index))
}

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

const Posts = ({ width, data }) => {
  const posts = data && data.Posts && data.Posts
  return (
    <TrendingContainer>
      <TitleContainer>
        <Title>News</Title>
        <SubTitle>Check Out The Latest Music And News This Week</SubTitle>
      </TitleContainer>
      <SliderComponent settings={settings}>
        {data.loading &&
          [...Array(8)].map(index => (
            <CardLoader key={`${index}-post-loader`} />
          ))}
        {!data.loading &&
          posts &&
          posts.map(item => <PostItem key={item.id} data={item} />)}
      </SliderComponent>
    </TrendingContainer>
  )
}

export default postsEnhancer(Posts)
