/* eslint react/jsx-one-expression-per-line: 0 */
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import ViewsIcon from 'resources/assets/svg/eye.svg'
import SignalBarsIcon from 'resources/assets/svg/signal-bars.svg'

const PostItemContainer = styled(Link)`
  width: 357px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 1150px) {
    width: 61.458%;
    margin-top: 20px;
  }
  @media only screen and (max-width: 450px) {
    width: 90%;
  }
`

const PhotoContainer = styled.div`
  width: 100%;
  height: 200px;
  background: url(${props => props.picture});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media only screen and (max-width: 1150px) {
    height: 300px;
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
const ContentContainerTop = styled.div`
  display: flex;
  flex-direction: column;
`
const ContentContainerBottom = styled.div`
  display: flex;
  flex-direction: column;
`

const TypeContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
`

const Span = styled.span`
  ${p => p.color && `color: ${p.color}`};
  ${p => p.mb && `margin-bottom: ${p.mb}px`};
  ${p => p.maxHeight && `max-height: ${p.maxHeight}`};
  font-size: 12px;
  letter-spacing: 0.7px;
  margin: 15px 0;
`

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

const Title = styled.span`
  color: #000000;
  font-size: 12px;
  letter-spacing: 0.7px;
  font-weight: 600;
`

const Type = styled.span`
  color: #ff9d00;
`

const Header = styled.span`
  font-size: 25px;
  word-break: break-word;
  margin-bottom: 22px;
  ${p => p.height && 'height: 130px'};
  font-weight: bold;
  color: #000000;
  text-transform: capitalize;
  letter-spacing: 1.5px;
  line-height: 1.3;
`
const FlexDiv = styled.div`
  display: flex;
  ${p => p.jc && `justify-content: ${p.jc}`};
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

const PostItem = ({ data, blog }) => (
  <PostItemContainer
    to={`/blog/${
      data.category && data.category.length > 0 ? data.category[0].name : ''
    }/${data.slug && data.slug.length > 0 ? data.slug : ''} `}
  >
    <PhotoContainer
      picture={
        data.media && data.media.length > 0
          ? data.media[0].imgs.featured_image
          : data.img
      }
    />
    <ContentContainer blog={blog && blog}>
      <ContentContainerTop>
        <TypeContainer>
          <Title>
            Trending /{' '}
            <Type>
              {data.category && data.category.length > 0
                ? data.category[0].name
                : ''}
            </Type>
          </Title>
        </TypeContainer>
        <Header>{data.header || data.title}</Header>
      </ContentContainerTop>
      <ContentContainerBottom>
        <DataContentContainer color="#666666">
          {data.content || data.PostDescription}
        </DataContentContainer>
        <Span color="#000000">
          By <Span color="#FF9D00">{data.author.name}</Span>
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
      </ContentContainerBottom>
    </ContentContainer>
  </PostItemContainer>
)

export default PostItem
