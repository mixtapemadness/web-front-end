import React from 'react'
import styled from 'styled-components'

import Header from 'components/header'
import Post from 'components/post'
import Subscribe from 'components/subscribe'
import Footer from 'components/footer'
import TopVideoPosts from './TopVideoPosts'
import NewsSlider from './NewsSlider'
import NewsFilter from './NewsFilter'

const NewsContainer = styled.div`
  width: 70%;
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
`

const PostsFirstPart = [
  {
    img:
      'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
    title: 'Inside Uk,with 67',
    PostDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'Mohamed Patal',
    CreationDate: 1,
    comments: 10,
    shares: 20,
  },
  {
    img:
      'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
    title: 'Inside Uk,with 67',
    PostDescription:
      'Lorem ipsum dolor sit amet,  voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'Mohamed Patal',
    CreationDate: 1,
    comments: 10,
    shares: 20,
  },
  {
    img:
      'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
    title: 'Inside Uk,with 67',
    PostDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'Mohamed Patal',
    CreationDate: 1,
    comments: 10,
    shares: 20,
  },
  {
    img:
      'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
    title: 'Inside Uk,with 67',
    PostDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'Mohamed Patal',
    CreationDate: 1,
    comments: 10,
    shares: 20,
  },
  {
    img:
      'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
    title: 'Inside Uk,with 67',
    PostDescription:
      'Lorem ipsum dolor sit amet,  voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'Mohamed Patal',
    CreationDate: 1,
    comments: 10,
    shares: 20,
  },
  {
    img:
      'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
    title: 'Inside Uk,with 67',
    PostDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'Mohamed Patal',
    CreationDate: 1,
    comments: 10,
    shares: 20,
  },
  {
    img:
      'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
    title: 'Inside Uk,with 67',
    PostDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'Mohamed Patal',
    CreationDate: 1,
    comments: 10,
    shares: 20,
  },
  {
    img:
      'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
    title: 'Inside Uk,with 67',
    PostDescription:
      'Lorem ipsum dolor sit amet,  voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'Mohamed Patal',
    CreationDate: 1,
    comments: 10,
    shares: 20,
  },
  {
    img:
      'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
    title: 'Inside Uk,with 67',
    PostDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'Mohamed Patal',
    CreationDate: 1,
    comments: 10,
    shares: 20,
  },
]

const PostsSecondPart = [
  {
    img:
      'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
    title: 'Inside Uk,with 67',
    PostDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'Mohamed Patal',
    CreationDate: 1,
    comments: 10,
    shares: 20,
  },
  {
    img:
      'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
    title: 'Inside Uk,with 67',
    PostDescription:
      'Lorem ipsum dolor sit amet,  voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'Mohamed Patal',
    CreationDate: 1,
    comments: 10,
    shares: 20,
  },
  {
    img:
      'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
    title: 'Inside Uk,with 67',
    PostDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'Mohamed Patal',
    CreationDate: 1,
    comments: 10,
    shares: 20,
  },
  {
    img:
      'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
    title: 'Inside Uk,with 67',
    PostDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'Mohamed Patal',
    CreationDate: 1,
    comments: 10,
    shares: 20,
  },
]

const TopMusicPosts = [
  {
    img:
      'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
    title: 'Inside Uk,with 67',
    PostDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'Mohamed Patal',
    CreationDate: 1,
    comments: 10,
    shares: 20,
  },
  {
    img:
      'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
    title: 'Inside Uk,with 67',
    PostDescription:
      'Lorem ipsum dolor sit amet,  voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'Mohamed Patal',
    CreationDate: 1,
    comments: 10,
    shares: 20,
  },
  {
    img:
      'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
    title: 'Inside Uk,with 67',
    PostDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'Mohamed Patal',
    CreationDate: 1,
    comments: 10,
    shares: 20,
  },
  {
    img:
      'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
    title: 'Inside Uk,with 67',
    PostDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'Mohamed Patal',
    CreationDate: 1,
    comments: 10,
    shares: 20,
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

export default () => (
  <NewsContainer>
    <Header />
    <NewsSlider />
    <NewsFilter />
    <PostsContainer>
      {PostsFirstPart.map(item => (
        <Post data={item} />
      ))}
      <Subscribe />
      <TopVideoPosts
        TopMusicPosts={TopMusicPosts}
        TopVideosData={TopVideosData}
      />
      {PostsSecondPart.map(item => (
        <Post data={item} />
      ))}
    </PostsContainer>
    <Footer />
  </NewsContainer>
)
