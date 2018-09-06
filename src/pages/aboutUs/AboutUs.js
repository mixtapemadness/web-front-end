import React from 'react'
import styled from 'styled-components'

import Header from 'components/header'
import Footer from 'components/footer'
import AboutUsSlider from './AboutUsSlider'
import Grid from './Grid'

const AboutUsContainer = styled.div`
  width: 1200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: auto;
`

const FooterContainer = styled.div`
  margin-top: 100px;
  width: 100%;
`

const girdData = [
  {
    id: 1,
    icon: 'https://image.flaticon.com/icons/svg/149/149646.svg',
    title: 'Upload Music',
    helperTxt: 'Anytime, Anywhere',
  },

  {
    id: 2,
    icon: 'https://image.flaticon.com/icons/svg/0/191.svg',
    title: 'No Ads',
    helperTxt: 'Non Stop',
  },
  {
    id: 3,
    icon: 'https://image.flaticon.com/icons/svg/109/109197.svg',
    title: 'Any Song',
    helperTxt: 'On Mobile',
  },
  {
    id: 4,
    icon: 'https://image.flaticon.com/icons/svg/0/191.svg',
    title: 'Unlimited Skips',
    helperTxt: 'Wherever, Whenever',
  },
]

export default () => (
  <AboutUsContainer>
    About Us
    <Header />
    <AboutUsSlider />
    <Grid data={girdData} />
    <FooterContainer>
      <Footer />
    </FooterContainer>
  </AboutUsContainer>
)
