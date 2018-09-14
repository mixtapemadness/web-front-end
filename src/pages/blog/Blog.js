/* eslint operator-linebreak: 0 */
/* eslint object-curly-newline: 0 */
/* eslint array-callback-return: 0 */
/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint prefer-const: 0 */

import React from 'react'
import styled from 'styled-components'

import Header from 'components/header'
import PostItem from 'components/postItem'
import Subscribe from 'components/subscribe'
import Footer from 'components/footer'
// import MobileComponent from 'components/mobileComponent'
import TopVideoPosts from './TopVideoPosts'
import BlogSlider from './BlogSlider'
import BlogFilter from './BlogFilter'

import blogsEnhancer from './blogEnhancer'

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
  width: 100%;
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

const MorePosts = styled.span`
  cursor: pointer;
  font-size: 14.5px;
  letter-spacing: 0.9px;
  color: #000000;
  font-weight: 600;
  text-align: center;
  margin-top: 40px;
`

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
const Blog = ({ width, data, handleLoadMore }) => {
  let Posts = []
  return (
    <NewsContainer>
      <Header />
      {width > 700 && (
        <div>
          <BlogSlider />
          <BlogFilter />
          <PostsContainer>
            {data.getPosts &&
              data.getPosts.length > 0 &&
              data.getPosts.map((item, index) => {
                Posts.push(
                  <Div>
                    {' '}
                    <PostItem data={item} />
                  </Div>,
                )
                if (index !== 0 && index % 5 === 0) {
                  Posts.push(
                    <SubscribeContainer>
                      <Subscribe />
                    </SubscribeContainer>,
                  )
                  Posts.push(<TopVideoPosts TopVideosData={TopVideosData} />)
                }
              })}

            {console.log('Posts', Posts)}

            {Posts && Posts.map(item => item)}
            {/* <SubscribeContainer>
              <Subscribe />
            </SubscribeContainer> */}
            {/* <TopVideoPosts TopVideosData={TopVideosData} /> */}
            {/* {PostsSecondPart.map(item => (
            <Div>
              <PostItem data={item} />
            </Div>
          ))} */}
          </PostsContainer>
        </div>
      )}
      {width <= 700 &&
        data.getPosts &&
        data.getPosts.length > 0 &&
        data.getPosts.map(item => (
          <Div>
            {' '}
            <PostItem key={item.id} data={item} />
          </Div>
        ))}

      <MorePosts onClick={handleLoadMore}> More News +</MorePosts>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </NewsContainer>
  )
}

export default blogsEnhancer(Blog)
