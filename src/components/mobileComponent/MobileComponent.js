/* eslint react/jsx-one-expression-per-line: 0 */

import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  border-bottom: 1px solid #ccc;
  padding: 40px 0;
  width: 100%;
`
const PhotoContainer = styled.div`
  width: 50%;
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
  color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const TimeContainer = styled.div`
  display: flex;
  font-size: 13px;
  color: #ccc;
`

const MobileComponent = ({ data }) => (
  <Container>
    <PhotoContainer background={data.picture} />
    <ContentContainer>
      <span>{data.header}</span>
      <TimeContainer>{data.time} Hour Ago</TimeContainer>
    </ContentContainer>
  </Container>
)

export default MobileComponent
