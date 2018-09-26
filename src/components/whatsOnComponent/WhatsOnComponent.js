/* eslint no-unused-vars: 0 */
/* eslint arrow-body-style: 0 */

import React from 'react'
import styled from 'styled-components'
import PostItemMedia from 'components/postItemMedia'

import whatsOnComponentEnhancer from './whatsOnComponentEnhancer'

const Container = styled.div`
  flex: 1 0 575px;
  margin: 7px;
  @media only screen and (max-width: 1190px) {
    :nth-child(even) {
      margin-left: 20px;
    }
  }
  @media only screen and (max-width: 850px) {
    width: 61.458%;
    margin-top: 20px;
    :nth-child(even) {
      margin-left: 0px;
    }
  }
  @media only screen and (max-width: 450px) {
    width: 90%;
  }
`

const PhotoContainer = styled.div`
  width: 100%;
  height: 300px;
  background: url(${props => props.picture});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`

const ContentContainer = styled.div`
  background-color: #eeeeef;
  width: calc(100% - 30px);
  padding: 20px 15px;
  display: flex;
  box-sizing: content-box;
  @media only screen and (max-width: 850px) {
    height: auto;
  }
`

const Icon = styled.img`
  display: block;
  position: absolute;
  cursor: pointer;
  top: 50%;
  left: 50%;
`

const LeftSide = styled.div`
  width: calc(40% - 15px);
  display: flex;
  flex-direction: column;
`
const Type = styled.span`
  color: #ff9d00;
  font-size: 13px;
  font-weight: bold;
`
const Name = styled.span`
  font-size: 30px;
  color: black;
`
const Line = styled.div`
  height: 100%;
  width: 1px;
  background-color: #e7e7e7;
  margin: 0px 15px;
`
const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(60% - 15px);
`
const Text = styled.span`
  color: #666666;
  font-size: 14px;
  word-break: break-word;
`
const FlexDiv = styled.div`
  display: flex;
  ${p => p.mb && `margin-bottom: ${p.mb}px`};
  ${p => p.mt && `margin-top: ${p.mt}px`};
  ${p => p.ml && `margin-left: ${p.ml}px`};
  ${p => p.mr && `margin-right: ${p.mr}px`};
  ${p => p.jc && `justify-content: ${p.jc}`};
  ${p => p.width && `width: ${p.width}`};
`

const Span = styled.span`
  color: #666666;
  font-size: 13px;
  margin-left: 10px;
  margin-top: 2px;
`
const Img = styled.img`
  ${p => p.height && `height: ${p.height}px`};
`

const WhatsOnComponent = ({ data, mediaId }) => {
  return (
    <Container>
      <PostItemMedia id={mediaId} />

      {/* <ContentContainer>
        <LeftSide>
          <Type>{data.type}</Type>
          <Name>{data.name}</Name>
        </LeftSide>
        <Line />
        <RightSide>
          <Text>{data.text}</Text>
          <FlexDiv mt={18}>
            <FlexDiv jc="space-between" width="100%">
              <FlexDiv>
                <Img src={ViewsIcon} alt="view" height={20} />
                <Span mt={2} ml={10}>
                  {data.views}
                  {' Views'}
                </Span>
              </FlexDiv>
              <Img src={SignalBarsIcon} alt="bars" height={18} />
            </FlexDiv>
          </FlexDiv>
        </RightSide>
      </ContentContainer> */}
    </Container>
  )
}

export default WhatsOnComponent
