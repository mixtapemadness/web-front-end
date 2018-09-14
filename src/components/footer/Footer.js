import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import AppStoreIcon from 'resources/assets/img/appstore.png'
import GooglePlayIcon from 'resources/assets/img/googleplay.png'
import FacebookIcon from 'resources/assets/svgComponents/Facebook'
import TwitterIcon from 'resources/assets/svgComponents/Twitter'
import InstagramIcon from 'resources/assets/svgComponents/Instagram'
import YoutubeIcon from 'resources/assets/svgComponents/Youtube'
import CircleIcon from 'resources/assets/svgComponents/Circle'
import SoundCloudIcon from 'resources/assets/svgComponents/SoundCloud'

import footerEnhancer from './footerEnhancer'
import MobileFooter from './MobileFooter'

const FooterContainer = styled.footer`
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${p => (p.menuOpened ? 'transparent' : '#efefef')};
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
  color: ${p => (p.menuOpened ? '#ffffff' : '#000000')};
  font-weight: 600;
`
const List = styled.ul`
  margin: 0;
  padding: 0;
  margin-top: 20px;
  color: ${p => (p.menuOpened ? '#ffffff' : 'rgba(0, 0, 0, 0.5)')};
  opacity: ${p => (p.menuOpened ? '1' : '0.5')};
`
const ListItem = styled.li`
  text-transform: uppercase;
  margin-bottom: 15px;
  letter-spacing: 1px;
  font-weight: 600;
  list-style: none;
  letter-spacing: 0.8px;
  font-size: 13px;
`
const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const UploadButton = styled.button`
  border: 1px solid ${p => (p.menuOpened ? '#ffffff' : '#000000')};
  color: ${p => (p.menuOpened ? '#ffffff' : '#000000')};
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
  border: 1px solid ${p => (p.menuOpened ? '#ffffff' : '#000000')};
  padding-left: 15px;
  border-right: 0;
  outline: none;
  background-color: transparent;
  font-size: 12px;
  box-sizing: content-box;
  ::-webkit-input-placeholder {
    font-size: 10.5px;
    color: ${p => (p.menuOpened ? '#ffffff' : 'rgba(0, 0, 0, 0.8)')};
    font-weight: 600;
  }
  ::-moz-placeholder {
    font-size: 10.5px;
    color: ${p => (p.menuOpened ? '#ffffff' : 'rgba(0, 0, 0, 0.8)')};
    font-weight: 600;
  }
  :-ms-input-placeholder {
    font-size: 10.5px;
    color: ${p => (p.menuOpened ? '#ffffff' : 'rgba(0, 0, 0, 0.8)')};
    font-weight: 600;
  }
  :-moz-placeholder {
    font-size: 10.5px;
    color: ${p => (p.menuOpened ? '#ffffff' : 'rgba(0, 0, 0, 0.8)')};
    font-weight: 600;
  }
`
const SignUpButton = styled.button`
  height: 47px;
  width: 100px;
  background-color: ${p => (p.menuOpened ? '#ffffff' : '#000000')};
  color: ${p => (p.menuOpened ? '#ff9600' : '#ffffff')};
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
  background-color: ${p => (p.menuOpened ? '#ffffff' : '#979797')};
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
const SocialIcon = styled.a`
  margin-right: 10px;
  cursor: pointer;
`

const Footer = ({ width, menuOpened }) => (
  <div>
    {width > 900 && (
      <FooterContainer menuOpened={menuOpened}>
        <ContentContainer>
          <FlexDiv>
            <ListContainer>
              <ContentHeader menuOpened={menuOpened}>Music</ContentHeader>
              <List menuOpened={menuOpened}>
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
              <ContentHeader menuOpened={menuOpened}>
                Mixtape Madness
              </ContentHeader>
              <List menuOpened={menuOpened}>
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
              <ContentHeader menuOpened={menuOpened}>For Artists</ContentHeader>
              <UploadButton menuOpened={menuOpened}>Upload to mm</UploadButton>
            </UploadContainer>
            <div>
              <ContentHeader menuOpened={menuOpened}>
                Sign up for our newsletter
              </ContentHeader>
              <SignUpContainer>
                <Input
                  placeholder="email@example.com"
                  menuOpened={menuOpened}
                />
                <SignUpButton menuOpened={menuOpened}>SIGN UP</SignUpButton>
              </SignUpContainer>
              <ContentHeader menuOpened={menuOpened}>
                Connect with Mixtape Madness
              </ContentHeader>
              <SocialContainer>
                <SocialIcon href="https://twitter.com/mixtapemadness">
                  <TwitterIcon
                    height="20px"
                    color={menuOpened ? '#ffffff' : '#666666'}
                  />
                </SocialIcon>
                <SocialIcon href="https://www.facebook.com/MixtapeMadnessUK/">
                  <FacebookIcon
                    height="17px"
                    color={menuOpened ? '#ffffff' : '#666666'}
                  />
                </SocialIcon>
                <SocialIcon>
                  <CircleIcon
                    height="17px"
                    color={menuOpened ? '#ffffff' : '#666666'}
                  />
                </SocialIcon>
                <SocialIcon href="https://soundcloud.com/mixtapemadnessuk">
                  <SoundCloudIcon
                    height="35px"
                    color={menuOpened ? '#ffffff' : '#666666'}
                  />
                </SocialIcon>
                <SocialIcon href="https://www.youtube.com/user/madaboutmixtapes">
                  <YoutubeIcon
                    height="23px"
                    color={menuOpened ? '#ffffff' : '#666666'}
                  />
                </SocialIcon>
                <SocialIcon href="https://www.instagram.com/mixtapemadness/">
                  <InstagramIcon
                    height="19px"
                    color={menuOpened ? '#ffffff' : '#666666'}
                  />
                </SocialIcon>
              </SocialContainer>
              <Line mb={10} menuOpened={menuOpened} />
              <FlexDiv>
                <Anchor href="https://itunes.apple.com/us/app/mixtape-madness-latest-uk-mixtapes-singles/id1090862433?mt=8&ign-mpt=uo%3D4">
                  <AppStore src={AppStoreIcon} />
                </Anchor>
                <Anchor href="https://play.google.com/store/apps/details?id=com.mixtape.madness">
                  <GooglePlay src={GooglePlayIcon} />
                </Anchor>
              </FlexDiv>
            </div>
          </FlexDiv>
          <Line mt={20} mb={20} menuOpened={menuOpened} />
          <FlexDiv>
            <div>
              <Span fsize={13} color={menuOpened ? '#ffffff' : '#000000'}>
                Mixtape Madness
              </Span>
            </div>
            <Flex>
              <Span fsize={13} color={menuOpened ? '#ffffff' : '#000000'}>
                Help
              </Span>
              <Span
                fsize={13}
                color={menuOpened ? '#ffffff' : '#000000'}
                ml={10}
              >
                Terms
              </Span>
              <Span
                fsize={13}
                color={menuOpened ? '#ffffff' : '#000000'}
                ml={10}
              >
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
