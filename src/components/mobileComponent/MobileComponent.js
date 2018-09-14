/* eslint react/jsx-one-expression-per-line: 0 */

import React from 'react'
import styled from 'styled-components'

// import ClockIcon from 'resources/assets/svg/clock.svg'
import ClockIcon from 'resources/assets/svgComponents/Clock'

const Container = styled.div`
  display: flex;
  border-bottom: 1px solid ${p => (p.fromSearch ? '#ffffff' : '#ccc')};
  padding: 40px 0;
  width: 100%;
`
const PhotoContainer = styled.div`
  width: ${p => (p.fromSearch ? '20%' : '50%')};
  height: 150px;
  background-image: url(${p => p.background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`

const ContentContainer = styled.div`
  width: 50%;
  margin-left: 10px;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${p => (p.fromSearch ? '#ffffff' : '#000000')};
`
const TimeContainer = styled.div`
  display: flex;
  font-size: 13px;
  color: #ccc;
`

const Span = styled.span`
  color: ${p => (p.fromSearch ? '#ffffff' : '#ccc')};
  margin-left: 10px;
`
const MobileComponent = ({ data, fromSearch }) => (
  <Container fromSearch={fromSearch}>
    {console.log(data)}
    <PhotoContainer
      fromSearch={fromSearch}
      background={data.picture || data.img || data.media[0].imgs.featured_image}
    />
    <ContentContainer fromSearch={fromSearch}>
      <span>{data.header || data.title}</span>
      <TimeContainer>
        <ClockIcon height="20px" color={fromSearch ? '#ffffff' : '#ccc'} />
        <Span fromSearch={fromSearch}>
          {data.time || data.date} {!fromSearch && 'Ago'}
        </Span>
      </TimeContainer>
    </ContentContainer>
  </Container>
)

export default MobileComponent
