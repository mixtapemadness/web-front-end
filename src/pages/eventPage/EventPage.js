/* eslint react/jsx-one-expression-per-line: 0 */
import React from 'react'
import styled from 'styled-components'

import PostItem from 'components/postItem'
import Footer from 'components/footer'
import Subscribe from 'components/subscribe'
import EventAdvertisement from './eventAdvertisement'

const NewsContainer = styled.div`
  max-width: 1200px;
  display: flex;
  margin: auto;
  flex-direction: column;
`

const newsSliderImg = //eslint-disable-line
  'https://static1.squarespace.com/static/52c723b4e4b0b6f0473fa0c7/52c73e8ee4b0b674fecbb8d6/5ab0190303ce6497ede69670/1521490244848/music_Autonomics_coBandcamp_4344.jpg?format=1000w' //eslint-disable-line
const NewsSlliderContainer = styled.div`
  width: 100%;
  flex-direction: column;
`

const SlliderImg = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
`

const NewsSlliderWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  text-align: center;
`

const SliderText = styled.h1`
  width: 80%;
  color: #fff;
`

const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 2px solid #f5f5f5;
  @media only screen and (max-width: 750px) {
    flex-direction: column;
  }
`

const FilterItem = styled.div`
  flex: 1;
  text-align: center;
  color: 111;
  font-size: 26px;
  padding: 20px;
  box-sizing: border-box;
  font-weight: 800;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: #ff9600;
  }
`

const PostsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
  justify-content: space-between;
`

const SubscribeContainer = styled.div`
  margin: 40px 0;
  width: 100%;
`
const Div = styled.div`
  margin-top: 20px;
  justify-content: center;
  display: flex;
`

const FooterContainer = styled.div`
  margin-top: 40px;
`

const PostsFirstPart = [
  {
    img:
      'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
    title: 'Inside Uk,with 67',
    PostDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: 'Mohamed Patal',
    CreationDate: 1,
    comments: 10,
    shares: 20,
    time: '1 Minute',
    type: 'Events',
    views: '10,000',
  },
  {
    img:
      'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
    title: 'Inside Uk,with 67',
    PostDescription:
      'Lorem ipsum dolor sit amet,  voluptate velit esse cillum dolore eu fugiat nulla pariatur.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: 'Mohamed Patal',
    CreationDate: 1,
    comments: 10,
    shares: 20,
    time: '1 Minute',
    type: 'Events',
    views: '10,000',
  },
  {
    img:
      'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
    title: 'Inside Uk,with 67',
    PostDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: 'Mohamed Patal',
    CreationDate: 1,
    comments: 10,
    shares: 20,
    time: '1 Minute',
    type: 'Events',
    views: '10,000',
  },
  {
    img:
      'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
    title: 'Inside Uk,with 67',
    PostDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit.',
    author: 'Mohamed Patal',
    CreationDate: 1,
    comments: 10,
    shares: 20,
    time: '1 Minute',
    type: 'Events',
    views: '10,000',
  },
  {
    img:
      'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
    title: 'Inside Uk,with 67',
    PostDescription:
      'Lorem ipsum dolor sit amet,  voluptate velit esse cillum dolore eu fugiat nulla pariatur ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud.',
    author: 'Mohamed Patal',
    CreationDate: 1,
    comments: 10,
    shares: 20,
    time: '9 Minute',
    type: 'Events',
    views: '10,000',
  },
  {
    img:
      'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
    title: 'Inside Uk,with 67',
    PostDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    author: 'Mohamed Patal',
    CreationDate: 1,
    comments: 10,
    shares: 20,
    time: '5 Minute',
    type: 'Events',
    views: '10,000',
  },
  {
    img:
      'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
    title: 'Inside Uk,with 67',
    PostDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit.',
    author: 'Mohamed Patal',
    CreationDate: 1,
    comments: 10,
    shares: 20,
    time: '10 Minute',
    type: 'Events',
    views: '10,000',
  },
  {
    img:
      'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
    title: 'Inside Uk,with 67',
    PostDescription:
      'Lorem ipsum dolor sit amet,  voluptate velit esse cillum dolore eu fugiat nulla pariatur ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud.',
    author: 'Mohamed Patal',
    CreationDate: 1,
    comments: 10,
    shares: 20,
    time: '2 Minute',
    type: 'Events',
    views: '10,000',
  },
  {
    img:
      'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
    title: 'Inside Uk,with 67',
    PostDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit.',
    author: 'Mohamed Patal',
    CreationDate: 1,
    comments: 10,
    shares: 20,
    time: '30 Minute',
    type: 'Events',
    views: '10,000',
  },
]

const PostsSecondPart = [
  {
    img:
      'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
    title: 'Inside Uk,with 67',
    PostDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor.',
    author: 'Mohamed Patal',
    CreationDate: 1,
    comments: 10,
    shares: 20,
    type: 'Events',
  },
  {
    img:
      'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
    title: 'Inside Uk,with 67',
    PostDescription:
      'Lorem ipsum dolor sit amet,  voluptate velit esse cillum dolore eu fugiat nulla pariatur ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud.',
    author: 'Mohamed Patal',
    CreationDate: 1,
    comments: 10,
    shares: 20,
    type: 'Events',
  },
  {
    img:
      'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
    title: 'Inside Uk,with 67',
    PostDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit.',
    author: 'Mohamed Patal',
    CreationDate: 1,
    comments: 10,
    shares: 20,
    type: 'Events',
  },
]

const EventPage = () => (
  <NewsContainer>
    <NewsSlliderContainer>
      <SlliderImg src={newsSliderImg}>
        <NewsSlliderWrapper>
          <SliderText>
            Browse The Latest News
            <br />
            On MixTape Madness
          </SliderText>
        </NewsSlliderWrapper>
      </SlliderImg>
    </NewsSlliderContainer>
    <FilterContainer>
      <FilterItem>Trending</FilterItem>
      <FilterItem>Latest</FilterItem>
      <FilterItem>MixTapes</FilterItem>
      <FilterItem>Singles</FilterItem>
      <FilterItem>Videos</FilterItem>
    </FilterContainer>
    <PostsContainer>
      {PostsFirstPart.map(item => (
        <Div>
          <PostItem data={item} />
        </Div>
      ))}
      <SubscribeContainer>
        <Subscribe />
      </SubscribeContainer>
      {PostsSecondPart.map(item => (
        <Div>
          <PostItem data={item} />
        </Div>
      ))}
    </PostsContainer>
    <EventAdvertisement />
    <FooterContainer>
      <Footer />
    </FooterContainer>
  </NewsContainer>
)

export default EventPage
