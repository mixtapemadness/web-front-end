/* eslint operator-linebreak: 0 */
import React from 'react'
import styled from 'styled-components'

import Header from 'components/header'
import TrendingItem from 'components/trendingItem'
import Subscribe from 'components/subscribe'
import Footer from 'components/footer'
import MobileComponent from 'components/mobileComponent'
import TopVideoPosts from './TopVideoPosts'
import NewsSlider from './NewsSlider'
import NewsFilter from './NewsFilter'

import newsEnhancer from './newsEnhancer'

const NewsContainer = styled.div`
  max-width: 1200px;
  display: flex;
  margin: auto;
  flex-direction: column;
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
`
const Div = styled.div`
  margin-top: 20px;
  justify-content: center;
  display: flex;
`

const FooterContainer = styled.div`
  margin-top: 40px;
`

const MoreNews = styled.span`
  cursor: pointer;
  font-size: 14.5px;
  letter-spacing: 0.9px;
  color: #000000;
  font-weight: 600;
  text-align: center;
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
    type: 'News',
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
    type: 'News',
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
    type: 'News',
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
    type: 'News',
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
    type: 'News',
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
    type: 'News',
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
    type: 'News',
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
    type: 'News',
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
    type: 'News',
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
    type: 'News',
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
    type: 'News',
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
    type: 'News',
  },
  {
    img:
      'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
    title: 'Inside Uk,with 67',
    PostDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure.',
    author: 'Mohamed Patal',
    CreationDate: 1,
    comments: 10,
    shares: 20,
    type: 'News',
  },
]

const TopVideosData = [
  {
    img:
      'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2018%2F03%2Fdcs9416.jpg%3Fw%3D2000&w=700&q=85',
    songName: "I'm Upset",
    duration: '1h',
    songAuthor: 'drake',
    views: 10000,
    comments: 10,
  },
  {
    img:
      'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2018%2F03%2Fdcs9416.jpg%3Fw%3D2000&w=700&q=85',
    songName: "I'm Upset",
    duration: '1h',
    songAuthor: 'drake',
    views: 10000,
    comments: 10,
  },
  {
    img:
      'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2018%2F03%2Fdcs9416.jpg%3Fw%3D2000&w=700&q=85',
    songName: "I'm Upset",
    duration: '1h',
    songAuthor: 'drake',
    views: 10000,
    comments: 10,
  },
  {
    img:
      'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2018%2F03%2Fdcs9416.jpg%3Fw%3D2000&w=700&q=85',
    songName: "I'm Upset",
    duration: '1h',
    songAuthor: 'drake',
    views: 10000,
    comments: 10,
  },
  {
    img:
      'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2018%2F03%2Fdcs9416.jpg%3Fw%3D2000&w=700&q=85',
    songName: "I'm Upset",
    duration: '1h',
    songAuthor: 'drake',
    views: 10000,
    comments: 10,
  },
]

const News = ({ width }) => (
  <NewsContainer>
    <Header />
    {width > 700 && (
      <div>
        <NewsSlider />
        <NewsFilter />
        <PostsContainer>
          {PostsFirstPart.map(item => (
            <Div>
              <TrendingItem data={item} />
            </Div>
          ))}
          <SubscribeContainer>
            <Subscribe />
          </SubscribeContainer>
          <TopVideoPosts TopVideosData={TopVideosData} />
          {PostsSecondPart.map(item => (
            <Div>
              <TrendingItem data={item} />
            </Div>
          ))}
        </PostsContainer>
      </div>
    )}
    {width <= 700 &&
      PostsFirstPart.map(item => <MobileComponent data={item} />)}
    <MoreNews>More News +</MoreNews>
    <FooterContainer>
      <Footer />
    </FooterContainer>
  </NewsContainer>
)

export default newsEnhancer(News)
