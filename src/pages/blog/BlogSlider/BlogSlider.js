import React from 'react'
import styled from 'styled-components'

const NewsSlliderContainer = styled.div`
  width: 100%;
  flex-direction: column;
`

const SlliderImg = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
`

const NewsSlliderWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  text-align: center;
`

const SliderText = styled.h1`
  width: 80%;
  color: #fff;
  @media only screen and (max-width: 450px) {
    font-size: 22px;
  }
`

export default () => (
  <NewsSlliderContainer>
    <SlliderImg>
      <NewsSlliderWrapper>
        <SliderText>Latest news on Mixtape Madness</SliderText>
      </NewsSlliderWrapper>
    </SlliderImg>
  </NewsSlliderContainer>
)
