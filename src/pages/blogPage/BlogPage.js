/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint operator-linebreak: 0 */
/* eslint no-unused-vars: 0 */
/* eslint indent: 0 */

import React from 'react'
import styled from 'styled-components'
// import { Link } from 'react-router-dom'
import ReactDisqusComments from 'react-disqus-comments'

import Header from 'components/header'
import BlogPost from 'components/blogPost'
import YouTubeVideo from 'components/youTubeVideo'
import PostItem from 'components/postItem'
import Footer from 'components/footer'
import Advertisement from 'components/advertisement'
import MobileComponent from 'components/mobileComponent'

import Musician from 'resources/assets/img/musician1.png'
import Musician1 from 'resources/assets/img/2pac.jpg'
import Musician2 from 'resources/assets/img/eminem.jpg'
// import backgroundImage from 'resources/assets/img/background.png'

import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from 'react-html-parser'
import YouMayLike from 'components/youMayLike'
import blogPageEnhancer from './blogPageEnhancer'
import BlogPageImg from './blogPageImg'
import PostContentHeading from './postContentHeading'
import Tag from './Tag'

const Container = styled.div`
  width: 100%;
  display: flex;
  max-width: 1200px;
  margin: auto;
  flex-direction: column;
`

const Heading = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`
const TitleContainer = styled.div`
  width: 76%;
  text-align: center;
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 450px) {
    width: 90%;
  }
`
const BlogTitle = styled.h1`
  font-size: 46px;
  letter-spacing: 3.2px;
  color: #010101;
  font-weight: 800;
  margin-bottom: 20px;
  @media only screen and (max-width: 700px) {
    font-size: 26px;
  }
  @media only screen and (max-width: 450px) {
    font-size: 18px;
    letter-spacing: normal;
  }
`
const BlogSubTitle = styled.h3`
  color: #666666;
  letter-spacing: 1.6px;
  margin-bottom: 20px;
  @media only screen and (max-width: 450px) {
    font-size: 12px;
    letter-spacing: normal;
  }
`
const BackgroundPicture = styled.div`
  width: 100%;
  height: 730px;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: 60px 0;
  @media only screen and (max-width: 450px) {
    height: 300px;
  }
`

const BlogContent = styled.div`
  width: 90%;
  margin: auto;
  @media only screen and (max-width: 1150px) {
    text-align: center;
  }
`

const BlogArticle = styled.div`
  width: 100%;
  margin: auto;
  margin-top: 40px;
`

const VideoContainer = styled.div`
  width: 78%;
  margin: auto;
  margin-top: 80px;
  margin-bottom: 60px;
`
const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;
  justify-content: center;
  margin: auto;
  @media only screen and (max-width: 450px) {
    margin-top: 20px;
  }
`
// const Tag = styled.button`
//   border: 1px solid #c9c9c9;
//   color: #666666;
//   padding: 3px 10px;
//   background: transparent;
//   border-radius: 15px;
//   font-weight: bold;
//   cursor: pointer;
//   color: #c9c9c9;
//   :not(:last-child) {
//     margin-right: 20px;
//   }
//   @media only screen and (max-width: 530px) {
//     font-size: 11px;
//     padding: 3px 5px;
//     :not(:last-child) {
//       margin-right: 5px;
//     }
//   }
// `
const AlsoLikeHeaderContainer = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  height: 100px;
  border-top: 1px solid #c9c9c9;
  border-bottom: 1px solid #c9c9c9;
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 30px;
  color: #000000;
`
const MayLikeContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: auto;
  justify-content: space-between;
  flex-wrap: wrap;
  @media only screen and (max-width: 1150px) {
    flex-direction: column;
    align-items: center;
  }
`

// const StyledLink = styled(Link)`
//   margin-bottom: 60px;
//   @media only screen and (max-width: 1150px) {
//     display: flex;
//     justify-content: center;
//   }
// `
const MobileAuthorContainer = styled.div`
  display: none;
  color: #666666;
  justify-content: center;
  margin-top: 20px;
  @media only screen and (max-width: 450px) {
    display: flex;
  }
`

const Author = styled.span`
  color: #ff9d00;
`
const Div = styled.div`
  display: flex;
  max-width: 1200px;
  margin: auto;
  justify-content: space-between;
  flex-wrap: wrap;
  @media only screen and (max-width: 1150px) {
    flex-direction: column;
    align-items: center;
  }
`

const AdvertisementContainer = styled.div`
  width: 357px;
  height: 627px;
`
const DisqusContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  width: 90%;
`

const BlogPage = ({ width, data }, props) => {
  const postData = data && data.Post ? data.Post : {}
  return (
    <Container>
      <Heading>
        <TitleContainer>
          <BlogTitle dangerouslySetInnerHTML={{ __html: postData.title }} />
          <BlogSubTitle
            dangerouslySetInnerHTML={{ __html: postData.excerpt }}
          />
          <MobileAuthorContainer>
            {/* <span>
              {'By '}
              <Author>{blogPageData.blogPostData.author}</Author>
              {' - '}
              {blogPageData.blogPostData.time}
              {' Hour Ago'}
            </span> */}
          </MobileAuthorContainer>
        </TitleContainer>
      </Heading>

      <BlogPageImg id={postData.featured_media} />
      <BlogContent>
        <PostContentHeading date={postData.date} authorId={postData.author} />
        <div
          className="blog-page-article"
          dangerouslySetInnerHTML={{ __html: postData.content }}
        >
          {/* <BlogArticle /> */}
        </div>
      </BlogContent>

      {/* {postData.tags && postData.tags.map(id => <Tag key={id} id={id} />)} */}
      <TagsContainer>
        {postData.tags && postData.tags.map(id => <Tag key={id} id={id} />)}
      </TagsContainer>
      <DisqusContainer>
        <ReactDisqusComments
          // shortname="mixtapemadnessuk"
          shortname="//mixtapemadnessuk.disqus.com/embed.js"
          // identifier="/blog/news/dj-semtex-announces-leaving-bbc-1xtra-15-years"

          identifier={window.location.pathname}
          // title="Example Thread"
          url={window.location.href}

          // url="http://mixtape.vobi.io/blog/news/dj-semtex-announces-leaving-bbc-1xtra-15-years"

          // category_id="10431"
          // onNewComment={this.handleNewComment}
        />
      </DisqusContainer>
      {/* <Header bottomBorder />
    {data.getPosts && data.getPosts.length > 0 ? (
      <BlogPost data={data.getPosts[0]} />
    ) : (
        ''
      )}
    {width > 450 && (
      <VideoContainer>
        <YouTubeVideo url={blogPageData.video} />
      </VideoContainer>
    )}
    <TagsContainer>
      {data.getPosts && data.getPosts.length > 0
        ? data.getPosts[0].tags.map(item => (
          <Tag key={item.id}>{item.name}</Tag>
        ))
        : ''}
     */}
      <YouMayLike />
    </Container>
  )
}

export default blogPageEnhancer(BlogPage)
