import React from 'react'
import styled from 'styled-components'

import SoundCloudIcon from 'resources/assets/svg/soundcloud-logo.svg'
import TwitterIcon from 'resources/assets/svg/twitter-black.svg'
import FacebookIcon from 'resources/assets/svg/facebook-black.svg'
import CircleIcon from 'resources/assets/svg/filled-circle.svg'

const MobileFooterContainer = styled.div`
  max-width: 310px;
  margin: auto;
  padding-bottom: 20px;
`

const MobileContentContainer = styled.div`
  display: flex;
  justify-content: center;
  justify-content: ${p => p.jc && 'space-between'};
`
const SocialIcon = styled.img`
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
  color: #000000;
  font-weight: bold;
  margin-right: ${p => p.mr && '10px'};
`

const MobileFooter = () => (
  <MobileFooterContainer>
    <SocialContainer>
      <SocialIcon hg={20} src={TwitterIcon} alt="soc" />
      <SocialIcon hg={17} src={FacebookIcon} alt="soc" />
      <SocialIcon hg={17} src={CircleIcon} alt="soc" />
      <SocialIcon hg={35} src={SoundCloudIcon} alt="soc" />
      <SocialIcon hg={20} alt="soc" />
      <SocialIcon hg={20} alt="soc" />
    </SocialContainer>
    <MobileContentContainer jc>
      <Span>About</Span>
      <Span>Careers</Span>
      <Span>Contact</Span>
      <Span>Advertise</Span>
    </MobileContentContainer>
    <MobileContentContainer>
      <Span mr>Privacy Policy</Span>
      <Span>Terms</Span>
    </MobileContentContainer>
  </MobileFooterContainer>
)

export default MobileFooter
