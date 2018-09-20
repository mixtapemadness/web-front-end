/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint indent: 0 */
/* eslint react/jsx-indent-props: 0 */
/* eslint react/jsx-indent: 0 */
/* eslint implicit-arrow-linebreak: 0 */
/* eslint operator-linebreak: 0 */
/* eslint no-unused-expressions: 0 */

import React from 'react'
import styled from 'styled-components'
// import { Link } from 'react-router-dom'

import ViewsIcon from 'resources/assets/svg/eye.svg'
import SignalBarsIcon from 'resources/assets/svg/signal-bars.svg'

import AuthorName from 'components/AuthorName'
import PostItemMedia from './postItemMedia'
import PostItemCategory from './postItemCategory'
import ContinueRead from './continueRead'

const PostItemContainer = styled.div`
  width: 357px;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  @media only screen and (max-width: 1150px) {
    width: 61.458%;
    margin-top: 20px;
  }
  @media only screen and (max-width: 450px) {
    width: 90%;
  }
`

const ContentContainer = styled.div`
  background-color: #eeeeef;
  width: calc(100% - 40px);
  padding: 27px 20px;
  display: flex;
  flex-direction: column;
  box-sizing: content-box;
  justify-content: space-between;
  flex: 1;
  ${p => p.blog === true && 'height: 373px'};
  @media only screen and (max-width: 1150px) {
    height: auto;
  }
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
  margin-top: 3px;
`

// const AuthorLink = styled(Link)`
//   color: 'FF9D00';
//   cursor: pointer;
//   font-size: 12px;
//   letter-spacing: 0.7px;
//   margin: 15px 0;
// `

const DataContentContainer = styled.span`
  ${p => p.color && `color: ${p.color}`};
  height: 10ch;
  overflow: hidden;
  font-size: 12px;
  letter-spacing: 0.7px;
  position:relative &:before {
    content: '...';
    position: absolute;
  }
`
const FlexDiv = styled.div`
  display: flex;
  ${p => p.jc && `justify-content: ${p.jc}`};
  margin-top: 3px;
`
const Img = styled.img`
  ${p => p.height && `height: ${p.height}px`};
`
const Views = styled.span`
  margin-top: 2px;
  margin-left: 10px;
  color: #666666;
  font-size: 12px;
  letter-spacing: 0.7px;
`

const CategoryContainer = styled.div`
  width: 100%;
  color: #000;
  display: flex;
  font-weight: 800;
  font-size: 12px;
`

const Header = styled.div`
  width: 100%;
  font-weight: 800;
  font-size: 26px;
  line-height: 1.3;
`
const ContentContainerTop = styled.div``

const Categories = data => {
  let newData
  data.data
    ? (newData = data.data.map((item, index) => {
        if (index > 0) {
          return (
            <React.Fragment>
              ,<PostItemCategory id={item} />
            </React.Fragment>
          )
        }
        return <PostItemCategory id={item} />
      }))
    : (newData = null)

  return newData
}

const PostItem = ({ data }) => {
  const categoriesData =
    data.categories && data.categories.length > 0 ? data.categories : ''
  return (
    <PostItemContainer>
      <PostItemMedia id={data.featured_media} />
      <ContentContainer>
        <ContentContainerTop>
          <CategoryContainer>
            Trending / <Categories data={categoriesData} />
          </CategoryContainer>
          <Header dangerouslySetInnerHTML={{ __html: data.title }} />
        </ContentContainerTop>

        <ContentContainerBottom>
          <DataContentContainer
            color="#666666"
            dangerouslySetInnerHTML={{ __html: data.excerpt }}
          />
          <Span color="#000000">
            By <AuthorName id={data.author} />
          </Span>
          <FlexDiv jc="space-between">
            <FlexDiv>
              <Img src={ViewsIcon} alt="view" height={20} />
              <Views>
                {data.views}
                {' Views'}
              </Views>
            </FlexDiv>
            <Img src={SignalBarsIcon} alt="bars" height={18} />
          </FlexDiv>
          <ContinueRead categoryId={categoriesData} PostSlug={data.slug} />
        </ContentContainerBottom>
      </ContentContainer>
    </PostItemContainer>
  )
}

export default PostItem
