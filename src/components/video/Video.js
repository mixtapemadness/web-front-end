import React from 'react'
import styled from 'styled-components'

import PlayIcon from 'resources/assets/svg/Play.svg'
import ViewsIcon from 'resources/assets/svg/eye.svg'
import SignalBarsIcon from 'resources/assets/svg/signal-bars.svg'
import DotsIcon from 'resources/assets/svg/dots.svg'

const Container = styled.div`
  width: 375px;
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
  position: relative;
  @media only screen and (max-width: 1150px) {
    height: 300px;
  }
`
const ContentContainer = styled.div`
  background-color: #eeeeef;
  width: calc(100% - 30px);
  padding: 20px 15px;
  max-height: 65px;
  display: flex;
  justify-content: space-between;
  box-sizing: content-box;
  @media only screen and (max-width: 1150px) {
    height: auto;
  }
`
const Icon = styled.img`
  display: block;
  position: absolute;
  cursor: pointer;
  top: 50%;
  left: 50%;
  height: 30px;
`
const Dots = styled.img`
  display: block;
  position: absolute;
  cursor: pointer;
  bottom: 10px;
  right: 10px;
  height: 22px;
`
const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
`

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
`
const FlexDiv = styled.div`
  display: flex;
  width: 100%;
  ${p => p.jc && `justify-content: ${p.jc}`};
  ${p => p.align && `align-items: ${p.align}`};
  ${p => p.height && `height: ${p.height}`};
`
const Img = styled.img`
  ${p => p.height && `height: ${p.height}px`};
`
const Name = styled.span`
  font-weight: 600;
  font-size: 19.5px;
  letter-spacing: 1.2px;
  line-height: 1.08;
  margin-bottom: 16px;
`
const Text = styled.span`
  color: #666666;
  word-break: break-word;
  font-size: 14.5px;
  line-height: 1.45;
  letter-spacing: 0.9px;
`

const Views = styled.span`
  font-size: 12.5px;
  letter-spacing: 0.8px;
  color: #666666;
  margin-left: 7px;
`
const Video = ({ data }) => (
  <Container>
    <PhotoContainer picture={data.picture}>
      <Icon src={PlayIcon} />
      <Dots src={DotsIcon} />
    </PhotoContainer>
    <ContentContainer>
      <LeftSide>
        <Name>{data.songName}</Name>
        <Text>{data.songAuthor}</Text>
      </LeftSide>
      <RightSide>
        <FlexDiv>
          <Img src={ViewsIcon} alt="view" height={20} />
          <Views>
            {data.views}
            {' Views'}
          </Views>
        </FlexDiv>
        <FlexDiv jc="flex-end" height="100%" align="flex-end">
          <Img src={SignalBarsIcon} alt="bars" height={18} />
        </FlexDiv>
      </RightSide>
    </ContentContainer>
  </Container>
)

export default Video
