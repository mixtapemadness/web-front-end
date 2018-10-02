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

import postsEnhancer from './postsEnhancer'

// const PostItemContainer = styled.div`
//   display: flex;
//   justify-content: center;
// `

const TrendingContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 7px auto;
  justify-content: space-around;
  @media only screen and (max-width: 1150px) {
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (max-width: 500px) {
    margin: 15px;
  }
`
// const ItemContainer = styled.div`
//   margin-top: 28px;
//   display: flex;
//   justify-content: center;
// `
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
  slidesToShow: 3,
  slidesToScroll: 3,
  slidesToShowResponsive: 2,
  slidesToScrollResponsive: 2,
  rows: 1,
  centerMode: true,
  slidesPerRow: 1,
  centerPadding: '0px',
  responsive: [
    {
      breakpoint: 1154,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 751,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

const Posts = ({ width, data }) => {
  const posts = data && data.Posts && data.Posts
  return (
    <TrendingContainer>
      {/* {posts && <PostItems items={posts} />} */}
      <SliderComponent settings={settings}>
        {posts && posts.map(item => <PostItem key={item.id} data={item} />)}
        {
          // posts && <PostItems items={posts} />
        }
      </SliderComponent>
    </TrendingContainer>
  )
}

export default postsEnhancer(Posts)
