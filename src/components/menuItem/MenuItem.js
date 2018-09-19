import React from 'react'
import styled from 'styled-components'

import SignalBarsIcon from 'resources/assets/svgComponents/SignalBars'
import ViewsIcon from 'resources/assets/svgComponents/Views'

const Container = styled.div`
  @media only screen and (max-width: 850px) {
    margin-top: 10px;
  }
`
const PhotoContainer = styled.div`
  width: 260px;
  height: 170px;
  background-image: url(${p => p.pic});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 260px;
`
const Type = styled.span`
  font-size: 9.5px;
  letter-spacing: 0.6px;
  color: #ffffff;
`
const Title = styled.span`
  font-size: 20px;
  letter-spacing: 1.2px;
  font-weight: 600;
  color: #ffffff;
  height: 120px;
`
const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
`
const ViewsContainer = styled.div`
  display: flex;
  color: #ffffff;
  align-items: center;
`
const Span = styled.span`
  color: #ffffff;
  font-size: 8.5px;
  margin-left: 7px;
`
const MenuItem = ({ data }) => (
  <Container>
    <PhotoContainer pic={data.picture} />
    <ContentContainer>
      <Type>{data.type}</Type>
      <Title>{data.title}</Title>
      <FlexDiv>
        <ViewsContainer>
          <ViewsIcon color="#ffffff" height="20px" />
          <Span>
            {data.views}
            {' Views'}
          </Span>
        </ViewsContainer>
        <SignalBarsIcon color="#ffffff" height="13px" />
      </FlexDiv>
    </ContentContainer>
  </Container>
)

export default MenuItem
