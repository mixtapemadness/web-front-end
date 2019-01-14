import React from 'react'
import styled from 'styled-components'

import BackgroundImage from 'resources/assets/img/music.jpg'

const Container = styled.div`
  width: 100%;
  background-image: url(${BackgroundImage});
  height: 500px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  justify-content: center;
  align-items: center;
`
const Span = styled.span`
  font-size: 37.5px;
  font-weight: 600;
  color: #ffffff;
`
const Mixtape = styled.span`
  font-size: 56.5px;
  letter-spacing: -1.7px;
  color: #ffffff;
  font-weight: 600;
`
const ContactUs = styled.span`
  font-size: 25px;
  color: #ffffff;
  font-weight: 600;
`

const EventAdvertisement = () => (
  <Container>
    <Span>Want To Post Your Events To</Span>
    <Mixtape>Mixtape Madness?</Mixtape>
    <ContactUs>Click To Contact Us And Find Out More</ContactUs>
  </Container>
)

export default EventAdvertisement
