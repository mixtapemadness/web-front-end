import React from 'react';
import styled from 'styled-components';
import { SOCIAL_MEDIA } from '../../constants';

const SocialIconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  > a {
      color: ${p => p.menuOpened && '#fff'};
  }
`;

const SocialIcon = styled.a`
font-size: 24px;
  margin: 0 20px;
  cursor: pointer;
  color: ${p => p.color};
  &:hover {
    color: #ff9600;
  }
`;
const SocialIcons = ({ menuOpened }) => (
  <SocialIconsContainer menuOpened={menuOpened}>
    <SocialIcon target="_blank" href={SOCIAL_MEDIA.twitter} color="#00aced">
      <i className="fab fa-twitter" />
    </SocialIcon>
    <SocialIcon target="_blank" href={SOCIAL_MEDIA.soundcloud} color="#ff7700">
      <i className="fab fa-soundcloud" />
    </SocialIcon>
    <SocialIcon target="_blank" href={SOCIAL_MEDIA.facebook} color="#3C5A99">
      <i className="fab fa-facebook" />
    </SocialIcon>
    <SocialIcon target="_blank" href={SOCIAL_MEDIA.instagram} color="#282828">
      <i className="fab fa-instagram" />
    </SocialIcon>
    <SocialIcon target="_blank" href={SOCIAL_MEDIA.youtube} color="#FF0000">
      <i className="fab fa-youtube" />
    </SocialIcon>
    <SocialIcon target="_blank" href={SOCIAL_MEDIA.spotify} color="#1db954">
      <i className="fab fa-spotify" />
    </SocialIcon>
    <SocialIcon target="_blank" href={`mailto:${SOCIAL_MEDIA.email}`} color="#282828">
      <i className="far fa-envelope" />
    </SocialIcon>
  </SocialIconsContainer>
);
export default SocialIcons;
