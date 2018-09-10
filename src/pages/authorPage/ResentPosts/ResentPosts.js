import React from 'react'
import styled from 'styled-components'
import Post from 'components/post'
import Subscribe from 'components/subscribe'
import MobileSubscribe from 'components/mobileSubscribe'

const ResentPostsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const PostsTitle = styled.div`
  width: 100%;
  text-align: center;
`

const PostsTitleTxt = styled.h1`
  font-size: 36px;
`

const PostsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const LoadMore = styled.div`
  width: 100%;
  text-align: center;
  font-size: 18px;
  font-weight: 800;
  margin: 20px 0;
  cursor: pointer;
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

export default ({ PostsFirstPart, PostsSecondPart, width }) => (
  <ResentPostsContainer>
    <PostsTitle>
      <PostsTitleTxt>Resent Posts</PostsTitleTxt>
    </PostsTitle>
    {width > 450 && (
      <PostsContainer>
        {PostsFirstPart && PostsFirstPart.map(item => <Post data={item} />)}
        <Subscribe />
        {PostsSecondPart && PostsSecondPart.map(item => <Post data={item} />)}
        <LoadMore>Load More +</LoadMore>
      </PostsContainer>
    )}
    {width <= 450 && (
      <PostsContainer>
        {PostsSecondPart && PostsSecondPart.map(item => <Post data={item} />)}
        <ButtonContainer>
          <PreviousButton>Previous</PreviousButton>
          <NextButton>Next</NextButton>
        </ButtonContainer>
        <MobileSubscribe />
      </PostsContainer>
    )}
  </ResentPostsContainer>
)
