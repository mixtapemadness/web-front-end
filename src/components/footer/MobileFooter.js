import React from 'react'
import styled from 'styled-components'

import InstagramIcon from 'resources/assets/svgComponents/Instagram'
import YoutubeIcon from 'resources/assets/svgComponents/Youtube'
import FacebookIcon from 'resources/assets/svgComponents/Facebook'
import TwitterIcon from 'resources/assets/svgComponents/Twitter'
import CircleIcon from 'resources/assets/svgComponents/Circle'
import SoundCloudIcon from 'resources/assets/svgComponents/SoundCloud'

const MobileFooterContainer = styled.div`
  max-width: 310px;
  margin: 20px auto;
  padding-bottom: 20px;
  @media only screen and (max-width: 1050px) {
    height: 200px;
  }
`

const MobileContentContainer = styled.div`
  display: flex;
  justify-content: center;
  justify-content: ${p => p.jc && 'space-between'};
  color: ${p => (p.menuOpened ? '#ffffff' : '#000000')};
`
const SocialIcon = styled.a`
  margin-right: 10px;
  cursor: pointer;
  ${p => p.hg && `height: ${p.hg}px`};
`
const SocialContainer = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 17px;
  align-items: center;
  justify-content: space-between;
`
const Span = styled.span`
  font-weight: bold;
  margin-right: ${p => p.mr && '10px'};
`

const MobileFooter = ({ menuOpened }) => (
  <MobileFooterContainer>
    <SocialContainer>
      <SocialIcon target="_blank" href="https://twitter.com/mixtapemadness">
        <TwitterIcon height="20px" color={menuOpened ? '#ffffff' : '#666666'} />
      </SocialIcon>
      <SocialIcon
        target="_blank"
        href="https://www.facebook.com/MixtapeMadnessUK/"
      >
        <FacebookIcon
          height="17px"
          color={menuOpened ? '#ffffff' : '#666666'}
        />
      </SocialIcon>
      <SocialIcon>
        <CircleIcon height="17px" color={menuOpened ? '#ffffff' : '#666666'} />
      </SocialIcon>
      <SocialIcon
        target="_blank"
        href="https://soundcloud.com/mixtapemadnessuk"
      >
        <SoundCloudIcon
          height="35px"
          color={menuOpened ? '#ffffff' : '#666666'}
        />
      </SocialIcon>
      <SocialIcon
        target="_blank"
        href="https://www.youtube.com/user/madaboutmixtapes"
      >
        <YoutubeIcon height="23px" color={menuOpened ? '#ffffff' : '#666666'} />
      </SocialIcon>
      <SocialIcon
        target="_blank"
        href="https://www.instagram.com/mixtapemadness/"
      >
        <InstagramIcon
          height="19px"
          color={menuOpened ? '#ffffff' : '#666666'}
        />
      </SocialIcon>
    </SocialContainer>
    <MobileContentContainer jc menuOpened={menuOpened}>
      <Span>About</Span>
      <Span>Careers</Span>
      <Span>Contact</Span>
      <Span>Advertise</Span>
    </MobileContentContainer>
    <MobileContentContainer menuOpened={menuOpened}>
      <Span mr>Privacy Policy</Span>
      <Span>Terms</Span>
    </MobileContentContainer>
  </MobileFooterContainer>
)

export default MobileFooter
