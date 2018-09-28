/* eslint operator-linebreak: 0 */
/* eslint implicit-arrow-linebreak: 0 */
/* eslint object-curly-newline: 0 */

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
  padding: 0 20px;
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
  background: ${p => (p.Mobilepage > 1 ? '#efefef' : 'none')};
  color: ${p => (p.Mobilepage > 1 ? '#000000' : '#ccc')};
  pointer-events: ${p => (p.Mobilepage > 1 ? 'inherit' : 'none')};
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

const ResentPosts = ({
  width,
  data,
  increacePagination,
  decreacePagination,
  Mobilepage,
}) => {
  const posts = data && data.posts
  return (
    <ResentPostsContainer>
      {width > 550 && (
        <PostsContainer>{posts && <PostItems items={posts} />}</PostsContainer>
      )}
      {width <= 550 && (
        <PostsContainer>
          {posts && posts.map(item => <PostItem key={item.id} data={item} />)}
          <ButtonContainer>
            <PreviousButton
              Mobilepage={Mobilepage}
              onClick={() => decreacePagination()}
            >
              Previous
            </PreviousButton>
            <NextButton onClick={() => increacePagination()}>Next</NextButton>
          </ButtonContainer>
          <MobileSubscribe />
        </PostsContainer>
      )}
    </ResentPostsContainer>
  )
}

export default resentPostsEnhancer(ResentPosts)
