/* eslint operator-linebreak: 0 */
/* eslint object-curly-newline: 0 */
/* eslint array-callback-return: 0 */
/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint prefer-const: 0 */
/* eslint implicit-arrow-linebreak: 0 */

import React from 'react'
import styled from 'styled-components'

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
  @media only screen and (max-width: 1150px) {
    flex-direction: column;
    align-items: center;
  }
`

const SubscribeContainer = styled.div`
  width: 100%;
  margin: 40px 0;
`
// const Div = styled.div`
//   margin-top: 20px;
//   justify-content: center;
//   display: flex;
// `

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

const PostItemT = (item, index) => {
  if (index === 5) {
    return (
      <React.Fragment>
        <PostItem data={item} />
        <TopVideoPosts TopVideosData={TopVideosData} />
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

const Blog = ({ data, handleLoadMore, match }) => {
  const Data = data.Posts && data.Posts.length > 0 && data.Posts
  return (
    <NewsContainer>
      {/* {width > 700 && ( */}
      <div>
        <BlogSlider />
        <BlogFilter match={match} />
        <PostsContainer>{Data && <PostItems items={Data} />}</PostsContainer>
      </div>
      {/* )} */}
      {/* {width <= 700 && Data &&
        Data.map(item => (
          <Div key={item.id}>
            {' '}
            <PostItem data={item} />
          </Div>
        ))} */}

      <MorePosts onClick={handleLoadMore}> More News +</MorePosts>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </NewsContainer>
  )
}

export default blogsEnhancer(Blog)
