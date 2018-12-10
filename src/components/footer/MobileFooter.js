import React from 'react'
import styled from 'styled-components'

import InstagramIcon from 'resources/assets/svgComponents/Instagram'
import YoutubeIcon from 'resources/assets/svgComponents/Youtube'
import FacebookIcon from 'resources/assets/svgComponents/Facebook'
import TwitterIcon from 'resources/assets/svgComponents/Twitter'
import CircleIcon from 'resources/assets/svgComponents/Circle'
import SoundCloudIcon from 'resources/assets/svgComponents/SoundCloud'
import { Link } from 'react-router-dom'

const MobileFooterContainer = styled.div`
  max-width: 310px;
  margin: 20px auto;
`

const MobileContentContainer = styled.div`
  display: flex;
  justify-content: center;
  color: '#000000';
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
const List = styled.ul`
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
`

const ListItem = styled.li`
  margin-bottom: 15px;
  font-weight: 600;
  list-style: none;
  font-size: 14px;
  margin-right: 20px;
  display: inline-block;
`

const MobileFooter = ({ menuOpened }) => (
  <MobileFooterContainer>
    <SocialContainer>
      <SocialIcon target="_blank" href="https://twitter.com/mixtapemadness">
        <TwitterIcon height="20px" color="#666666" />
      </SocialIcon>
      <SocialIcon
        target="_blank"
        href="https://www.facebook.com/MixtapeMadnessUK/"
      >
        <FacebookIcon height="17px" color="#666666" />
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
        <YoutubeIcon height="23px" color="#666666" />
      </SocialIcon>
      <SocialIcon
        target="_blank"
        href="https://www.instagram.com/mixtapemadness/"
      >
        <InstagramIcon height="19px" color="#666666" />
      </SocialIcon>
    </SocialContainer>
    <MobileContentContainer jc menuOpened={menuOpened}>
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
    </MobileContentContainer>
  </MobileFooterContainer>
)

export default MobileFooter
