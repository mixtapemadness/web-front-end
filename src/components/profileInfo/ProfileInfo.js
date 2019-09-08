/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint no-unused-vars: 0 */

import React from 'react';

import styled from 'styled-components';
import TwitterIcon from 'resources/assets/svg/twitter-logo.svg';
import InstagramIcon from 'resources/assets/svg/instagram-logo.svg';
import profileInfoEnhancer from './profileInfoEnhancer';
import BlogPageMetaTags from '../../pages/blogPage/BlogPageMetaTags';
import CardLoader from '../loaders/CardLoader';

const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 450px) {
  text-align: center;
    margin: 30px auto 0px auto;
  }
`;

const ProfileImg = styled.div`
font-size: 100px;
`;

const ProfileDesc = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 1024px) {
    align-items: center;
    text-align: center;
  }
`;

const ProfileDescTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

const MobileProfileDescTitle = styled.div`
  display: none;
  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

const MobileProfileBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileDescName = styled.h1`
  letter-spacing: 1.4px;
  font-size: 22.5px;
  margin: 0;
`;

const ProfileDescOcupation = styled.h3`
  margin: 3px 0 0 0;
  font-weight: 800;
  letter-spacing: 0.9px;
  font-size: 15px;
`;

const ProfileDescIcons = styled.div`
  @media only screen and (max-width: 1024px) {
    align-items: center;
    text-align: center;
    display: none;
  }
`;

const ProfileDescIcon = styled.img`
  width: 20px;
  margin-left: 10px;
  ${props => props.TwitterIcon && 'height: 17px;'};
`;

const ProfileDescContent = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
`;

const ProfileDescTxt = styled.span`
  color: #666666;
  font-size: 14px;
  letter-spacing: 0.8px;
  font-weight: 800;
  transition: 0.3s;
`;
const ProfileInformation = ({ data, showAuthorBio, handleShowAuthorBio }) => {
  if (!data) {
    return <CardLoader />;
  }
  const { name = '', description = '', url = '' } = data;
  return (
    <ProfileContainer>
      <BlogPageMetaTags description={description} postTitle={`${name} | Author`} type="article" />

      <ProfileImg>
        <i className="fas fa-user-circle " />
      </ProfileImg>

      <ProfileDesc>
        <ProfileDescTitle>
          <ProfileInfo>
            <ProfileDescName>{name}</ProfileDescName>
          </ProfileInfo>
        </ProfileDescTitle>

        <MobileProfileDescTitle>
          <ProfileDescName>{name}</ProfileDescName>
          <MobileProfileBottom>
            {url && <a href={url}><ProfileDescIcon src={TwitterIcon} /></a>}
          </MobileProfileBottom>
        </MobileProfileDescTitle>

        <ProfileDescContent>
          <ProfileDescTxt>
            {description}
          </ProfileDescTxt>
        </ProfileDescContent>
      </ProfileDesc>
    </ProfileContainer>
  );
};

export default profileInfoEnhancer(ProfileInformation);
