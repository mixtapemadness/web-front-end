/* eslint operator-linebreak: 0 */
/* eslint implicit-arrow-linebreak: 0 */
/* eslint arrow-body-style: 0 */
/* eslint no-unused-vars: 0 */

import React from 'react'
import styled from 'styled-components'
import PostItem from 'components/postItem'
import Subscribe from 'components/subscribe'
// import MobileSubscribe from 'components/mobileSubscribe'

import postsEnhancer from './postsEnhancer'

// const PostItemContainer = styled.div`
//   display: flex;
//   justify-content: center;
// `

const TrendingContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 40px auto;
  justify-content: space-around;
  @media only screen and (max-width: 1150px) {
    flex-direction: column;
    align-items: center;
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
        <PostItem data={item} />
        <SubscribeContainer>
          <Subscribe />
        </SubscribeContainer>
      </React.Fragment>
    )
  }
  return <PostItem data={item} />
}

const PostItems = ({ items }) => {
  return items.map((item, index) => PostItemT(item, index))
}

const Posts = ({ width, data }) => {
  const posts = data && data.Posts && data.Posts
  return (
    <TrendingContainer>
      {posts && <PostItems items={posts} />}
    </TrendingContainer>
  )
}

export default postsEnhancer(Posts)
