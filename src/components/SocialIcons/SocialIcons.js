import React from 'react';
import styled from 'styled-components';
import InstagramIcon from 'resources/assets/svgComponents/Instagram';
import YoutubeIcon from 'resources/assets/svgComponents/Youtube';
import FacebookIcon from 'resources/assets/svgComponents/Facebook';
import TwitterIcon from 'resources/assets/svgComponents/Twitter';
import SoundCloudIcon from 'resources/assets/svgComponents/SoundCloud';
import { SOCIAL_MEDIA } from '../../constants';

const SocialIconsContainer = styled.div`
  display: flex;
  align-items: center;
      justify-content: center;
`;

const SocialIcon = styled.a`
  margin: 0 20px;
  cursor: pointer;
  :hover {
    color: #ff9600;
  }
`;
const SocialIcons = ({ menuOpened }) => (
  <SocialIconsContainer>
    <SocialIcon target="_blank" href={SOCIAL_MEDIA.twitter}>
      <TwitterIcon height="20px" color={menuOpened ? '#ffffff' : '#666666'} />
    </SocialIcon>
    <SocialIcon target="_blank" href={SOCIAL_MEDIA.soundcloud}>
      <SoundCloudIcon height="35px" color="#666666" />
    </SocialIcon>
    <SocialIcon target="_blank" href={SOCIAL_MEDIA.facebook}>
      <FacebookIcon height="17px" color={menuOpened ? '#ffffff' : '#666666'} />
    </SocialIcon>
    <SocialIcon target="_blank" href={SOCIAL_MEDIA.instagram}>
      <InstagramIcon height="17px" color={menuOpened ? '#ffffff' : '#666666'} />
    </SocialIcon>
    <SocialIcon target="_blank" href={SOCIAL_MEDIA.youtube}>
      <YoutubeIcon height="22px" color={menuOpened ? '#ffffff' : '#666666'} />
    </SocialIcon>
  </SocialIconsContainer>
);
export default SocialIcons;
