import React from 'react'
import styled from 'styled-components'

import TwitterIcon from 'resources/assets/svg/twitter-logo.svg'
import FacebookIcon from 'resources/assets/svg/facebook-app-logo.svg'
import InstagramIcon from 'resources/assets/svg/instagram-logo.svg'
import YoutubeIcon from 'resources/assets/svg/youtube.svg'

const Container = styled.div`
  position: absolute;
  width: 100%;
  max-height: ${p => (p.open === true ? '500px' : '0px')};
  border-bottom: ${p => (p.open === true ? '1px solid #e7e7e7' : 'none')};
  padding: ${p => (p.open === true ? '20px' : '0px')};
  overflow: hidden;
  background-color: #ffffff;
  top: 120px;
  z-index: 1;
  transition: 0.3s ease-in-out;
`

const OrangeContainer = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
`

const Span = styled.span`
  color: orange;
  font-weight: 600;
  margin-left: 20px;
  letter-spacing: 1.5px;
  cursor: pointer;
  @media only screen and (max-width: 450px) {
    font-size: 13px;
    margin-left: 5px;
  }
`
const ContactUsContainer = styled.div`
  border: 1px solid orange;
  border-radius: 15px;
  margin-left: 20px;
  padding: 0px 5px;
  color: orange;
  font-weight: 600;
  letter-spacing: 1.5px;
  cursor: pointer;
  @media only screen and (max-width: 450px) {
    font-size: 13px;
    margin-left: 5px;
  }
`
const SocialIconsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  justify-content: center;
`
const SocialIcon = styled.img`
  height: 20px;
  margin-left: 20px;
  ${props => props.facebook && 'height: 17px'};
  ${props => props.youtube && 'height: 22px'};
  cursor: pointer;
`

const MobileBurgerMenu = ({ open }) => (
  <Container open={open}>
    <OrangeContainer>
      <Span>Upload</Span>
      <Span>Register</Span>
      <Span>Log In</Span>
      <ContactUsContainer>Contact Us</ContactUsContainer>
    </OrangeContainer>
    <SocialIconsContainer>
      <a href="https://twitter.com/mixtapemadness">
        <SocialIcon src={TwitterIcon} alt="twitter" />
      </a>
      <a href="https://www.facebook.com/MixtapeMadnessUK/">
        <SocialIcon src={FacebookIcon} facebook alt="facebook" />
      </a>
      <a href="https://www.instagram.com/mixtapemadness/">
        <SocialIcon src={InstagramIcon} facebook alt="insta" />
      </a>
      <a href="https://www.youtube.com/user/madaboutmixtapes">
        <SocialIcon src={YoutubeIcon} youtube alt="youtube" />
      </a>
    </SocialIconsContainer>
  </Container>
)

export default MobileBurgerMenu
