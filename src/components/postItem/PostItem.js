/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint indent: 0 */
/* eslint react/jsx-indent-props: 0 */
/* eslint react/jsx-indent: 0 */
/* eslint implicit-arrow-linebreak: 0 */
/* eslint operator-linebreak: 0 */
/* eslint no-unused-expressions: 0 */
/* eslint no-unused-vars: 0 */
/* eslint object-curly-newline: 0 */
/* eslint react/jsx-closing-tag-location: 0 */

import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import window from 'global/window'
import ReactImageFallback from 'react-image-fallback'
import imageExists from 'image-exists'
import postItemEnhancer from './postItemEnhancer'
import placeholderImg from '../../resources/assets/img/placeholderImg.jpg'
import truncate from '../../helpers/textHelpers'

const PostItemContainer = styled.div`
  flex: 1 0 357px;
  height: 440px;
  max-width: 386px;
  display: flex;
  flex-direction: column;
  margin: 20px 10px;
  @media only screen and (max-width: 1150px) {
    flex: 1 0 auto;
  }
`

const ContentContainer = styled.div`
  background-color: #eeeeef;
  width: 100%;
  padding: 15px 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  ${p => p.blog === true && 'height: 373px'};
  @media only screen and (max-width: 1150px) {
    height: auto;
  }
`

const ContentContainerTop = styled.div``

const Media = styled(Link)`
  width: 100%;
  height: 200px;
  background: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: 0.8s;
  /* img {
    width: 100%;
  } */
  &:hover {
    /* background-size: 120%; */
  }
  @media only screen and (max-width: 1150px) {
    background-size: cover;
    &:hover {
      background-size: cover;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const PostTitle = styled(Link)`
  width: 100%;
  font-weight: 800;
  font-size: ${p => (p.fontSize ? p.fontSize : '16px')};
  line-height: 1.3;
  transition: 0.4s;
  color: ${p => (p.color ? p.color : '#111111')};
  text-decoration: underline;
  text-decoration-color: transparent;
  transition: 0.4s;

  &:hover {
    text-decoration-color: #111111;
  }
`

const Category = styled(Link)`
  color: #ff9600;
  margin: 0 5px;
  cursor: pointer;
`

const ContentContainerBottom = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`

const Span = styled.span`
  ${p => p.color && `color: ${p.color}`};
  ${p => p.mb && `margin-bottom: ${p.mb}px`};
  ${p => p.maxHeight && `max-height: ${p.maxHeight}`};
  font-size: 12px;
  letter-spacing: 0.7px;
  display: flex;
  font-weight: 800;
  margin-top: 10px;
`

// const AuthorLink = styled(Link)`
//   color: 'FF9D00';
//   cursor: pointer;
//   font-size: 12px;
//   letter-spacing: 0.7px;
//   margin: 15px 0;
// `

const DataContentContainer = styled.span`
  color: #666;
  overflow: hidden;
  font-size: 12px;

  p {
    line-height: 24px;
  }
  position:relative &:before {
    content: '...';
    position: absolute;
  }
`

const AuthorName = styled(Link)`
  color: #ff9600;
  margin: 0 5px;
  cursor: pointer;
  font-weight: 800;
`

const FlexDiv = styled.div`
  display: flex;
  ${p => p.jc && `justify-content: ${p.jc}`};
  margin: 3px 0;
`
const Img = styled.img`
  ${p => p.height && `height: ${p.height}px`};
`

const Views = styled.span`
  margin-left: 10px;
  color: #666666;
  font-size: 12px;
  letter-spacing: 0.7px;
`

const CategoryContainer = styled.div`
  width: 100%;
  color: #000;
  display: flex;
  flex-wrap: wrap;
  font-weight: 800;
  font-size: 12px;
  margin-bottom: 10px;
`

const ContinueReadContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  @media only screen and (max-width: 1150px) {
    justify-content: flex-start;
  }
`

const ContinueRead = styled(Link)`
  color: #ff9600;
  cursor: pointer;
  font-weight: 800;
  font-size: 12px;
  margin-top: 10px;
  position: relative;
`

const Categories = ({ data }) => {
  let newData
  data && data.length > 0
    ? (newData = data.map((item, index) => {
        if (index > 0) {
          return (
            <React.Fragment key={item.id}>
              ,
              <Category to={`/blog/category/${item.slug}`}>
                {item.name}
              </Category>
            </React.Fragment>
          )
        }
        return (
          <Category key={item.id} to={`/blog/category/${item.slug}`}>
            {item.name}
          </Category>
        )
      }))
    : (newData = null)
  return newData
}

const pathname = window.location ? window.location.pathname : ''

const PostItem = ({ media, category, user, data }) => {
  const Image =
    media && media.img && media.img.featured_image && media.img.featured_image
  const CategoriesData = category && category.category && category.category
  const User = user && user.user && user.user
  return (
    <PostItemContainer>
      <Media
        to={{
          pathname:
            data &&
            CategoriesData &&
            `/blog/${CategoriesData[0].slug}/${data.slug}`,
          state: {
            prevPath: pathname,
            authorId: User && User.id,
          },
        }}
        // img={imageExists(Image, (exists) => !!exists) ? Image : placeholderImg}
      >
        <ReactImageFallback
          src={Image && Image}
          fallbackImage={placeholderImg}
          initialImage={placeholderImg}
        />
      </Media>
      <ContentContainer>
        <ContentContainerTop>
          <CategoryContainer>
            {CategoriesData && <Categories data={CategoriesData} />}
          </CategoryContainer>
          {CategoriesData &&
            data && (
              <PostTitle
                dangerouslySetInnerHTML={{ __html: data.title }}
                to={{
                  pathname: `/blog/${CategoriesData[0].slug}/${data.slug}`,
                  state: {
                    prevPath: pathname,
                    authorId: User && User.id,
                  },
                }}
              />
            )}
        </ContentContainerTop>
        <ContentContainerBottom>
          <DataContentContainer
            dangerouslySetInnerHTML={{ __html: truncate(data.excerpt, 112) }}
          />
          <Span color="#000000">
            By{' '}
            {User && (
              <AuthorName
                to={`/author/${User.slug}`}
                dangerouslySetInnerHTML={{ __html: User.name }}
              />
            )}
          </Span>
          {data &&
            CategoriesData && (
              <ContinueReadContainer>
                <ContinueRead
                  to={{
                    pathname: `/blog/${CategoriesData[0].slug}/${data.slug}`,
                    state: {
                      prevPath: pathname,
                      authorId: User && User.id,
                    },
                  }}
                >
                  Read More
                </ContinueRead>
              </ContinueReadContainer>
            )}
        </ContentContainerBottom>
      </ContentContainer>
    </PostItemContainer>
  )
}

export default postItemEnhancer(PostItem)
