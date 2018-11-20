/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint operator-linebreak: 0 */
/* eslint no-unused-vars: 0 */
/* eslint indent: 0 */
/* eslint object-curly-newline: 0 */
/* eslint no-unneeded-ternary: 0 */
/* eslint implicit-arrow-linebreak: 0 */

import React from 'react'
import styled from 'styled-components'
import ReactDisqusComments from 'react-disqus-comments'
import YouMayLike from 'components/youMayLike'
import Forward from 'resources/assets/svgComponents/Forward'
import Back from 'resources/assets/svgComponents/Back'
import { Link } from 'react-router-dom'
import window from 'global/window'
import { Helmet } from 'react-helmet'
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
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`

const PagingArrows = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 850px) {
    justify-content: center;
    margin-bottom: 20px;
  }
`

const ForwardArrow = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    transition: 0.3s;
  }
  &:hover {
    color: #ffa019;
    svg {
      fill: #ffa019;
    }
  }
`

const BackArrow = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 20px;
  transition: 0.3s;
  pointer-events: ${props =>
      props.index === 0 || props.isdisabled ? 'none' : 'inherit'}
    svg {
    transition: 0.3s;
    fill: ${props =>
      props.index === 0 || props.isdisabled ? '#ccc' : '#666666'};
  }
  &:hover {
    color: #ffa019;
    svg {
      fill: #ffa019;
    }
  }
`

const ArrowText = styled.div`
  margin: 0 10px;
  font-size: 14px;
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

const BlogPageVideo = styled.div`
  width: 100%;
  height: 60vh;
  background-image: url(${props => props.src});
  background-position: center center;
  background-size: cover;
  embed {
    width: 100%;
    height: 100%;
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
  max-width: 760px;
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
  margin-top: 20px;
`

const BlogArticleContent = styled.div`
  p {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    line-height: 40px;
    img {
      margin: 5px 0;
    }
    @media only screen and (max-width: 575px) {
      embed {
        width: 90%;
        height: 250px;
      }
    }
  }
`

const pathname = window.location ? window.location.pathname : ''

const BlogPage = ({
  width,
  data,
  user,
  match,
  nextRoute,
  prevRoute,
  location,
}) => {
  const userName = user && user.user && user.user.name && user.user.name
  const userSlug = user && user.user && user.user.slug && user.user.slug
  const postData = data && data.Post ? data.Post : {}
  const postTitle = postData && postData.title
  const noHTML = /(<([^>]+)>)/gi
  const Description =
    data &&
    data.Post &&
    data.Post.excerpt &&
    data.Post.excerpt.replace(noHTML, '')
  const categories =
    data && data.Post && data.Post.categories && data.Post.categories
  const isVideoArr =
    categories && categories.filter(item => parseInt(item, 10) === 15)
  const isVideo = isVideoArr && isVideoArr.length > 0 ? true : false
  const PostDate = data && data.Post && data.Post.date && data.Post.date
  const tags = data && data.Post && data.Post.tags && data.Post.tags
  const Content =
    isVideo &&
    postData &&
    postData.content &&
    postData.content.replace(
      /(?:<iframe[^>]*)(?:(?:\/>)|(?:>.*?<\/iframe>))/,
      '',
    )
  const Video =
    isVideo &&
    postData &&
    postData.content &&
    postData.content.match(
      /(?:<iframe[^>]*)(?:(?:\/>)|(?:>.*?<\/iframe>))/,
      '',
    ) &&
    isVideo &&
    postData &&
    postData.content &&
    postData.content
      .match(/(?:<iframe[^>]*)(?:(?:\/>)|(?:>.*?<\/iframe>))/, '')
      .toString()
      .replace('iframe', 'embed')
  // cons HasVideo = Video.
  const disablePrev = !prevRoute
  const renderVideo = data && !data.loading && isVideo && Video ? true : false
  return (
    <React.Fragment>
      <Container>
        <Helmet>
          <title>Turbo Todo</title>
          <meta
            property="og:url"
            content={window.location ? window.location.href : ''}
          />
          <meta property="og:title" content={`${postTitle && postTitle}`} />
          <meta
            property="og:description"
            content={`${Description && Description}`}
          />
          <meta property="og:type" content="website" />

          <meta name="twitter:title" content={`${postTitle && postTitle}`} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@mixtapemadness" />
          <meta
            name="twitter:description"
            content={`${Description && Description}`}
          />
          <meta name="twitter:creator" content="@twitter-username" />
        </Helmet>
        <Heading>
          <PagingArrows>
            <BackArrow
              isdisabled={disablePrev}
              to={{
                pathname: `/blog/${match.params.category}/${prevRoute &&
                  prevRoute}`,
                state: {
                  prevPath:
                    location.state && location.state.prevPath
                      ? location.state.prevPath
                      : pathname,
                  authorId:
                    location.state && location.state.authorId
                      ? location.state.authorId
                      : pathname,
                },
              }}
            >
              <Back fill="#666666" width={20} height={20} />
              <ArrowText>Previous Post</ArrowText>
            </BackArrow>
            <ForwardArrow
              to={{
                pathname: `/blog/${match.params.category}/${nextRoute &&
                  nextRoute}`,
                state: {
                  prevPath:
                    location.state && location.state.prevPath
                      ? location.state.prevPath
                      : pathname,
                  authorId:
                    location.state &&
                    location.state.authorId &&
                    location.state.authorId,
                },
              }}
            >
              <ArrowText> Next Post</ArrowText>
              <Forward fill="#666666" width={20} height={20} />
            </ForwardArrow>
          </PagingArrows>

          <TitleContainer>
            <BlogTitle dangerouslySetInnerHTML={{ __html: postData.title }} />
            <BlogSubTitle
              dangerouslySetInnerHTML={{ __html: postData.excerpt }}
            />
            <MobileAuthorContainer />
          </TitleContainer>
        </Heading>
        {renderVideo && (
          <BlogPageVideo dangerouslySetInnerHTML={{ __html: Video && Video }} />
        )}
        {<BlogPageImg renderVideo={renderVideo} id={postData.featured_media} />}
        <BlogContent>
          <PostContentHeading
            date={postData.date}
            userName={userName}
            userSlug={userSlug}
          />
          {!isVideo && Video ? (
            <BlogArticleContent
              dangerouslySetInnerHTML={{ __html: Content && Content }}
            />
          ) : (
            <BlogArticleContent
              dangerouslySetInnerHTML={{ __html: postData.content }}
            />
          )}
        </BlogContent>
        <TagsContainer>
          {postData.tags && postData.tags.map(id => <Tag key={id} id={id} />)}
        </TagsContainer>
        <DisqusContainer>
          <ReactDisqusComments
            shortname="//mixtapemadnessuk.disqus.com/embed.js"
            identifier={pathname}
            url={window.location ? window.location.href : ''}
          />
        </DisqusContainer>
        <YouMayLike tags={tags} />
      </Container>
    </React.Fragment>
  )
}

export default blogPageEnhancer(BlogPage)
