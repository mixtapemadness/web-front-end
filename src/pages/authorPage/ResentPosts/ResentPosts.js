/* eslint operator-linebreak: 0 */
/* eslint implicit-arrow-linebreak: 0 */

import React from 'react'
import styled from 'styled-components'
import PostItem from 'components/postItem'
import Subscribe from 'components/subscribe'
import MobileSubscribe from 'components/mobileSubscribe'

import resentPostsEnhancer from './resentPostsEnhancer'

const ResentPostsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`

const PostsContainer = styled.div`
  width: 100%;
  margin: 40px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  @media only screen and (max-width: 1150px) {
    flex-direction: column;
    align-items: center;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  margin: 40px 0;
  justify-content: space-between;
  width: 100%;
`
const NextButton = styled.button`
  background-color: #efefef;
  color: #000000;
  outline: none;
  border: none;
  width: 100px;
  height: 50px;
  cursor: pointer;
  font-weight: bold;
`
const PreviousButton = styled.button`
  background: none;
  color: #ccc;
  border: 1px solid #efefef;
  cursor: pointer;
  font-weight: bold;
  width: 100px;
`

// const ItemContainer = styled.div`
//   margin-top: 28px;
//   display: flex;
//   justify-content: center;
// `
const SubscribeContainer = styled.div`
  margin: 40px 0;
  width: 100%;
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

const PostItems = ({ items }) =>
  items.map((item, index) => PostItemT(item, index))

const ResentPosts = ({ width, data }) => {
  const posts = data && data.posts
  return (
    <ResentPostsContainer>
      {width > 450 && (
        <PostsContainer>{posts && <PostItems items={posts} />}</PostsContainer>
      )}
      {width <= 450 && (
        <PostsContainer>
          {posts && <PostItems items={posts} />}
          <ButtonContainer>
            <PreviousButton>Previous</PreviousButton>
            <NextButton>Next</NextButton>
          </ButtonContainer>
          <MobileSubscribe />
        </PostsContainer>
      )}
    </ResentPostsContainer>
  )
}

export default resentPostsEnhancer(ResentPosts)
