/* eslint operator-linebreak: 0 */
import React from 'react'
import styled from 'styled-components'
import TrendingItem from 'components/trendingItem'
import Subscribe from 'components/subscribe'
import MobileSubscribe from 'components/mobileSubscribe'

const ResentPostsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const PostsContainer = styled.div`
  width: 100%;
  margin: 40px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
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
const ItemContainer = styled.div`
  margin-top: 28px;
  display: flex;
  justify-content: center;
`
const SubscribeContainer = styled.div`
  margin: 40px 0;
  max-width: 1100px;
`

export default ({ PostsFirstPart, PostsSecondPart, width }) => (
  <ResentPostsContainer>
    {width > 450 && (
      <PostsContainer>
        {PostsFirstPart &&
          PostsFirstPart.map(item => (
            <ItemContainer>
              <TrendingItem data={item} />
            </ItemContainer>
          ))}
        <SubscribeContainer>
          <Subscribe />
        </SubscribeContainer>
        {PostsSecondPart &&
          PostsSecondPart.map(item => (
            <ItemContainer>
              <TrendingItem data={item} />
            </ItemContainer>
          ))}
      </PostsContainer>
    )}
    {width <= 450 && (
      <PostsContainer>
        {PostsSecondPart &&
          PostsSecondPart.map(item => <TrendingItem data={item} />)}
        <ButtonContainer>
          <PreviousButton>Previous</PreviousButton>
          <NextButton>Next</NextButton>
        </ButtonContainer>
        <MobileSubscribe />
      </PostsContainer>
    )}
  </ResentPostsContainer>
)
