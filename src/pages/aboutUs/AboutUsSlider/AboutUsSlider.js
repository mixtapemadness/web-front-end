import React from 'react'
import styled from 'styled-components'

import JoinNowBtn from '../JoinNowBtn'

const imgUrl = //eslint-disable-line
  'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?cs=srgb&dl=adult-blur-brick-walls-846741.jpg&fm=jpg' //eslint-disable-line

const SliderContainer = styled.div`
  width: 100%;
  height: 800px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${props => props.image});
  background-position: center center;
  background-size: cover;
`

const SliderHeader = styled.h1`
  width: 70%;
  color: #fff;
  font-size: 48px;
  text-align: center;
`

const AboutUsSlider = () => (
  <SliderContainer image={imgUrl}>
    <SliderHeader>
      Join Music Music Madness To Have Your Music Played Around The World
    </SliderHeader>
    <JoinNowBtn />
  </SliderContainer>
)

export default AboutUsSlider
