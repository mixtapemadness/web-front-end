/* eslint jsx-quotes: 0 */
/* eslint react/jsx-first-prop-new-line: 0 */
/* eslint react/jsx-closing-tag-location: 0 */
/* eslint no-unused-vars: 0 */

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
import MixtapeLogo from 'resources/assets/img/mixtape-logo.png'

import { CLOSE_MEGAMENU } from 'constants'
import footerEnhancer from './footerEnhancer'
import MobileFooter from './MobileFooter'
import eventEmitter from '../../eventEmitter'

const FooterContainer = styled.footer`
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${p => (p.menuOpened ? 'transparent' : '#efefef')};
  margin-top: 50px;
`

const ContentContainer = styled.div`
  padding: 40px 20px;
  max-width: 1200px;
  margin: auto;
`

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
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
  color: #666;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;
`

const ListItem = styled.li`
  margin-bottom: 15px;
  font-weight: 600;
  list-style: none;
  font-size: 14px;
  display: inline-block;
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
const NewsletterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Footer = ({ width, menuOpened }) => (
  <div>
    {width > 900 && (
      <FooterContainer menuOpened={menuOpened}>
        <ContentContainer>
          <FlexDiv>
            <ListContainer>
              <List menuOpened={menuOpened}>
                <ListItem>
                  <Link to="/aboutus">About</Link>
                </ListItem>
                <ListItem>
                  <Link to="/blog/category/videos">Videos</Link>
                </ListItem>
                <ListItem>
                  <Link to="/blog/category/articles">Articles</Link>
                </ListItem>
                <ListItem>
                  <Link to="/blog/category/events">Events</Link>
                </ListItem>
                <ListItem>
                  <Link to="/blog/category/reviews">Reviews </Link>
                </ListItem>
                <ListItem>
                  <Link to="/blog/category/news">News</Link>
                </ListItem>
                <ListItem>
                  <Link to="/blog/category/interviews">Interviews</Link>
                </ListItem>
              </List>
            </ListContainer>
            <NewsletterContainer>
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
                <SocialIcon
                  target="_blank"
                  href="https://twitter.com/mixtapemadness"
                >
                  <TwitterIcon height="20px" color="#666666" />
                </SocialIcon>
                <SocialIcon
                  target="_blank"
                  href="https://www.facebook.com/MixtapeMadnessUK/"
                >
                  <FacebookIcon height="17px" color="#666666" />
                </SocialIcon>
                <SocialIcon>
                  <CircleIcon height="17px" color="#666666" />
                </SocialIcon>
                <SocialIcon
                  target="_blank"
                  href="https://soundcloud.com/mixtapemadnessuk"
                >
                  <SoundCloudIcon height="35px" color="#666666" />
                </SocialIcon>
                <SocialIcon
                  target="_blank"
                  href="https://www.youtube.com/user/madaboutmixtapes"
                >
                  <YoutubeIcon height="23px" color="#666666" />
                </SocialIcon>
                <SocialIcon
                  target="_blank"
                  href="https://www.instagram.com/mixtapemadness/"
                >
                  <InstagramIcon height="19px" color="#666666" />
                </SocialIcon>
              </SocialContainer>
              <Line mb={10} menuOpened={menuOpened} />
              <FlexDiv>
                {/* <Anchor
                  target="_blank"
                  href="https://itunes.apple.com/us/app/mixtape-madness-latest-uk-mixtapes-singles/id1090862433?mt=8&ign-mpt=uo%3D4"
                >
                  <AppStore src={AppStoreIcon} />
                </Anchor>
                <Anchor
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=com.mixtape.madness"
                >
                  <GooglePlay src={GooglePlayIcon} />
                </Anchor> */}
              </FlexDiv>
            </NewsletterContainer>
          </FlexDiv>
          <FlexDiv>
            <div>
              <Span fsize={13} color="#000000">
                Mixtape Madness
              </Span>
            </div>
            <Flex>
              <Span fsize={13} color="#000000">
                <Link to="/termsconditions">Terms </Link>
              </Span>
              <Span fsize={13} color="#000000" ml={10}>
                <Link to="/privacy">Privacy </Link>
              </Span>
            </Flex>
          </FlexDiv>
        </ContentContainer>
      </FooterContainer>
    )}
    {width <= 900 && <MobileFooter menuOpened={menuOpened} />}
  </div>
)

export default footerEnhancer(Footer)
