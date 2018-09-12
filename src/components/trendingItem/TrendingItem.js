/* eslint react/jsx-one-expression-per-line: 0 */

import React from 'react'
import styled from 'styled-components'

import ViewsIcon from 'resources/assets/svg/eye.svg'
import SignalBarsIcon from 'resources/assets/svg/signal-bars.svg'

const TrendingItemContainer = styled.div`
  width: 357px;
  @media only screen and (max-width: 1150px) {
    width: 61.458%;
    margin-top: 20px;
  }
  @media only screen and (max-width: 450px) {
    width: 90%;
  }
`
const PhotoContainer = styled.div`
  width: 100%
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
  height: 313px;
  justify-content: space-between;
  ${p => p.blog === true && 'height: 373px'};
  @media only screen and (max-width: 1150px) {
    height: auto;
  }
`
const TypeContainer = styled.div`
  display: flex;
`
const Span = styled.span`
  ${p => p.color && `color: ${p.color}`};
  ${p => p.mb && `margin-bottom: ${p.mb}px`};
  ${p => p.maxHeight && `max-height: ${p.maxHeight}`};
  font-size: 12px;
  letter-spacing: 0.7px;
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
  ${p => p.height && 'height: 130px'};
  font-weight: bold;
  color: #000000;
  text-transform: capitalize;
  letter-spacing: 1.5px;
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

const Description = styled.div`
  color: #666666;
  font-size: 12px;
  letter-spacing: 0.7px;
  height: 150px;
`

const TrendingItem = ({ data, blog }) => (
  <TrendingItemContainer>
    <PhotoContainer picture={data.picture || data.img} />
    <ContentContainer blog={blog}>
      <TypeContainer>
        <Title>
          Trending / <Type>{data.type}</Type>
        </Title>
      </TypeContainer>
      <Header>{data.header || data.title}</Header>
      <Description>{data.text || data.PostDescription}</Description>
      <Span color="#000000">
        By <Span color="#FF9D00">{data.author}</Span>
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
    </ContentContainer>
  </TrendingItemContainer>
)

export default TrendingItem
