import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import AppStoreIcon from 'resources/assets/img/appstore.png'
import GooglePlayIcon from 'resources/assets/img/googleplay.png'
import SoundCloudIcon from 'resources/assets/svg/soundcloud-logo.svg'
import TwitterIcon from 'resources/assets/svg/twitter-black.svg'
import FacebookIcon from 'resources/assets/svg/facebook-black.svg'
import CircleIcon from 'resources/assets/svg/filled-circle.svg'

import footerEnhancer from './footerEnhancer'
import MobileFooter from './MobileFooter'

const FooterContainer = styled.footer`
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  ${p => p.backgroundColor && `background-color: ${p.backgroundColor}`};
`
const ContentContainer = styled.div`
  padding: 40px 20px;
  max-width: 1200px;
  margin: auto;
`
const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
const ListContainer = styled.div`
  ${props => props.mr && `margin-right: ${props.mr}px`};
`
const ContentHeader = styled.span`
  font-size: 16.5px;
  letter-spacing: 1px;
  color: #000000;
  font-weight: 600;
`
const List = styled.ul`
  margin: 0;
  padding: 0;
  margin-top: 20px;
`
const ListItem = styled.li`
  text-transform: uppercase;
  margin-bottom: 15px;
  letter-spacing: 1px;
  font-weight: 600;
  list-style: none;
  letter-spacing: 0.8px;
  opacity: 0.5;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.5);
`
const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const UploadButton = styled.button`
  border: 1px solid black;
  background-color: transparent;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 2px;
  margin-top: 20px;
  width: 219px;
  height: 47px;
`
const SocialContainer = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 17px;
  align-items: center;
`
const SignUpContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`
const Input = styled.input`
  height: 45px;
  width: 160px;
  border: 1px solid black;
  padding-left: 15px;
  border-right: 0;
  outline: none;
  background-color: transparent;
  font-size: 12px;
  box-sizing: content-box;
  ::-webkit-input-placeholder {
    font-size: 10.5px;
    color: rgba(0, 0, 0, 0.8);
    font-weight: 600;
  }
  ::-moz-placeholder {
    font-size: 10.5px;
    color: rgba(0, 0, 0, 0.8);
    font-weight: 600;
  }
  :-ms-input-placeholder {
    font-size: 10.5px;
    color: rgba(0, 0, 0, 0.8);
    font-weight: 600;
  }
  :-moz-placeholder {
    font-size: 10.5px;
    color: rgba(0, 0, 0, 0.8);
    font-weight: 600;
  }
`
const SignUpButton = styled.button`
  height: 47px;
  width: 100px;
  background-color: black;
  color: #ffffff;
  border: 1px solid black;
  border-left: none;
  font-weight: bold;
  letter-spacing: 1.5px;
  font-size: 14px;
  outline: none;
  cursor: pointer;
  box-sizing: content-box;
  border: 0;
`
const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #979797;
  ${props => props.mr && `margin-right: ${props.mr}px;`}
  ${props => props.ml && `margin-left: ${props.ml}px;`}
  ${props => props.mt && `margin-top: ${props.mt}px;`}
  ${props => props.mb && `margin-bottom: ${props.mb}px;`}
`
const AppStore = styled.img`
  width: auto;
  height: 38px;
`
const GooglePlay = styled.img`
  width: auto;
  height: 38px;
`
const Flex = styled.div`
  display: flex;
`
const Span = styled.span`
  font-weight: 600;
  ${props => props.fsize && `font-size: ${props.fsize}px`};
  ${props => props.color && `color: ${props.color}`};
  ${props => props.mr && `margin-right: ${props.mr}px;`}
  ${props => props.ml && `margin-left: ${props.ml}px;`}
  ${props => props.mt && `margin-top: ${props.mt}px;`}
  ${props => props.mb && `margin-bottom: ${props.mb}px;`}
`
const Anchor = styled.a`
  outline: none;
  text-decoration: none;
`
const SocialIcon = styled.img`
  margin-right: 10px;
  cursor: pointer;
  ${p => p.hg && `height: ${p.hg}px`};
`

const Footer = ({ width }) => (
  <div>
    {width > 900 && (
      <FooterContainer backgroundColor="#eeeeee">
        <ContentContainer>
          <FlexDiv>
            <ListContainer>
              <ContentHeader>Music</ContentHeader>
              <List>
                <ListItem>Artists</ListItem>
                <ListItem>Mixtapes</ListItem>
                <ListItem>Singles</ListItem>
                <ListItem>Hip Hop</ListItem>
                <ListItem>Drill</ListItem>
                <ListItem>Rap</ListItem>
                <ListItem>Trap</ListItem>
                <ListItem>Grime</ListItem>
                <ListItem>All Genres</ListItem>
              </List>
            </ListContainer>
            <ListContainer>
              <ContentHeader>Mixtape Madness</ContentHeader>
              <List>
                <ListItem>
                  <Link to="/aboutus">About</Link>
                </ListItem>
                <ListItem>Company</ListItem>
                <ListItem>Help</ListItem>
                <ListItem>Contact</ListItem>
                <ListItem>Press</ListItem>
                <ListItem>FAQ</ListItem>
              </List>
            </ListContainer>
            <UploadContainer>
              <ContentHeader>For Artists</ContentHeader>
              <UploadButton>Upload to mm</UploadButton>
            </UploadContainer>
            <div>
              <ContentHeader>Sign up for our newsletter</ContentHeader>
              <SignUpContainer>
                <Input placeholder="email@example.com" />
                <SignUpButton>SIGN UP</SignUpButton>
              </SignUpContainer>
              <ContentHeader>Connect with Mixtape Madness</ContentHeader>
              <SocialContainer>
                <SocialIcon hg={20} src={TwitterIcon} alt="soc" />
                <SocialIcon hg={17} src={FacebookIcon} alt="soc" />
                <SocialIcon hg={17} src={CircleIcon} alt="soc" />
                <SocialIcon hg={35} src={SoundCloudIcon} alt="soc" />
                <SocialIcon hg={20} alt="soc" />
                <SocialIcon hg={20} alt="soc" />
              </SocialContainer>
              <Line mb={10} />
              <FlexDiv>
                <Anchor href="/">
                  <AppStore src={AppStoreIcon} />
                </Anchor>
                <Anchor href="/">
                  <GooglePlay src={GooglePlayIcon} />
                </Anchor>
              </FlexDiv>
            </div>
          </FlexDiv>
          <Line mt={20} mb={20} />
          <FlexDiv>
            <div>
              <Span fsize={13} color="#000000">
                Mixtape Madness
              </Span>
            </div>
            <Flex>
              <Span fsize={13} color="#000000">
                Help
              </Span>
              <Span fsize={13} color="#000000" ml={10}>
                Terms
              </Span>
              <Span fsize={13} color="#000000" ml={10}>
                Privacy
              </Span>
            </Flex>
          </FlexDiv>
        </ContentContainer>
      </FooterContainer>
    )}
    {width <= 900 && <MobileFooter />}
  </div>
)

export default footerEnhancer(Footer)
