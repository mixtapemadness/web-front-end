/* eslint operator-linebreak: 0 */
/* eslint object-curly-newline: 0 */
/* eslint array-callback-return: 0 */
/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint prefer-const: 0 */
/* eslint implicit-arrow-linebreak: 0 */
/* eslint no-unused-vars: 0 */

import React from 'react'
import styled from 'styled-components'

import PostItem from 'components/postItem'
import Subscribe from 'components/subscribe'
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

const ShowMoreContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
const ShowMore = styled.div`
  cursor: pointer;
  font-weight: 800;
  color: #111;
  position: relative;
  margin-top: 50px;
  transition: 0.4s;
  &:after {
    content: '';
    width: 0%;
    height: 2px;
    position: absolute;
    background: #656464;
    bottom: 0;
    left: 0;
    transition: 0.4s;
  }
  &:hover {
    color: #656464;
    &:after {
      width: 100%;
    }
  }
`

const PostItemT = (item, index) => {
  if (index === 5) {
    return (
      <React.Fragment>
        <PostItem data={item} />
        <TopVideoPosts />
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

const Blog = ({ Posts, data, handleLoadMore, match }) => {
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

      <ShowMoreContainer>
        <ShowMore onClick={handleLoadMore}>More {match.params.filter}</ShowMore>
      </ShowMoreContainer>
    </NewsContainer>
  )
}

export default blogsEnhancer(Blog)
