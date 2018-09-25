import React from 'react'
import styled from 'styled-components'

import BackgroundImage from 'resources/assets/img/music.jpg'

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  flex: 1;
  background-size: cover;
  display: flex;
  flex-direction: column;
  background-position: center;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const Upload = styled.span`
  font-size: 51px;
  text-transform: capitalize;
  color: #ffffff;
  font-weight: 600;
  @media only screen and (max-width: 450px) {
    font-size: 40px;
  }
`
const MixTape = styled.span`
  font-size: 76.5px;
  letter-spacing: -2.3px;
  line-height: 1;
  text-transform: capitalize;
  color: #ffffff;
  font-weight: 600;
  @media only screen and (max-width: 450px) {
    font-size: 60px;
  }
`
const ContactUs = styled.span`
  font-size: 17.5px;
  font-weight: 600;
  text-transform: capitalize;
  color: #ffffff;
`
const Advertisement = ({ news }) => (
  <Container fromNews={news}>
    <Upload>Upload To</Upload>
    <MixTape>MixTape</MixTape>
    <MixTape>Madness</MixTape>
    <ContactUs>
      Click To Contact Us
      <br />
      and Find More
    </ContactUs>
  </Container>
)

export default Advertisement
