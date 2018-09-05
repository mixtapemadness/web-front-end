import React from 'react'
import styled from 'styled-components'

import Header from 'components/header'
import Footer from 'components/footer'
import ProfileInfo from './ProfileInfo'
import ResentPosts from './ResentPosts'

const AuthorPageContainer = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 1024px) {
    width: 80%;
  }
`

const LineSeparator = styled.div`
  width: 100%;
  margin-top: 30px;
  height: 1px;
  background: #e0e0e0;
`
const AuthorData = {
  img:
    'https://www.careersinpoland.com/public/file/articles//845_tips-to-land-secure-job-in-poland-polish-cv-resume.jpg',
  name: 'Bianca Grace',
  ocupation: 'Music Editor',
  bio:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', //eslint-disable-line
}

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

export default () => (
  <AuthorPageContainer>
    <Header />
    <ProfileInfo data={AuthorData} />
    <LineSeparator />
    <ResentPosts
      PostsFirstPart={PostsFirstPart}
      PostsSecondPart={PostsSecondPart}
    />
    <Footer />
  </AuthorPageContainer>
)
