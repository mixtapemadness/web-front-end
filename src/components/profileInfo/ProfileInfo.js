/* eslint react/jsx-one-expression-per-line: 0 */

import React from 'react'

import styled from 'styled-components'
import TwitterIcon from 'resources/assets/svg/twitter-logo.svg'
import InstagramIcon from 'resources/assets/svg/instagram-logo.svg'

const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 450px) {
    width: 90%;
    margin: 30px auto 0px auto;
  }
`

const ProfileImg = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const Image = styled.div`
  height: 152px;
  width: 152px;
  border-radius: 100%;
  background-position: ${p => (p.fromTeam ? 'center' : '66%')};
  background-image: url(${props => props.src});
  background-size: cover;
`

const EditProfile = styled.div`
  font-weight: 800;
  margin-top: 15px;
  cursor: pointer;
  letter-spacing: 0.7px;
  font-size: 12px;
  color: #000000;
`

const ProfileDesc = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 1024px) {
    align-items: center;
    text-align: center;
  }
`

const ProfileDescTitle = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`

const MobileProfileDescTitle = styled.div`
  display: none;
  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`

const MobileProfileBottom = styled.div`
  display: flex;
  align-items: center;
`

const ProfileInfo = styled.div`
  dispaly: flex;
  flex-direction: column;
`

const ProfileDescName = styled.h1`
  letter-spacing: 1.4px;
  font-size: 22.5px;
  margin: 0;
`

const ProfileDescOcupation = styled.h3`
  margin: 3px 0 0 0;
  font-weight: 800;
  letter-spacing: 0.9px;
  font-size: 15px;
`

const ProfileDescIcons = styled.div`
  @media only screen and (max-width: 1024px) {
    align-items: center;
    text-align: center;
    display: none;
  }
`

const ProfileDescIcon = styled.img`
  width: 20px;
  margin-left: 10px;
  ${props => props.TwitterIcon && 'height: 17px;'};
`

const ProfileDescContent = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
`

const ProfileDescTxt = styled.span`
  color: #666666;
  font-size: 14px;
  letter-spacing: 0.8px;
  font-weight: 800;
`

const ShowMore = styled.div`
  font-ssize: 18px;
  color: #949494;
  margi-top: 10px;
  cursor: pointer;
`

export default ({ data, fromTeam }) => {
  const { img, name, ocupation, bio } = data //eslint-disable-line
  return (
    <ProfileContainer>
      <ProfileImg>
        <Image src={img} fromTeam={fromTeam} />
        <EditProfile>{fromTeam ? 'View Profile' : 'Edit Profile'}</EditProfile>
      </ProfileImg>
      <ProfileDesc>
        <ProfileDescTitle>
          <ProfileInfo>
            <ProfileDescName>{name}</ProfileDescName>
            <ProfileDescOcupation>{ocupation}</ProfileDescOcupation>
          </ProfileInfo>
          <ProfileDescIcons>
            <ProfileDescIcon src={TwitterIcon} />
            <ProfileDescIcon src={InstagramIcon} />
          </ProfileDescIcons>
        </ProfileDescTitle>

        <MobileProfileDescTitle>
          <ProfileDescName>{name}</ProfileDescName>
          <MobileProfileBottom>
            <ProfileDescOcupation>{ocupation}|</ProfileDescOcupation>
            <ProfileDescIcon src={InstagramIcon} />
            <ProfileDescIcon src={TwitterIcon} />
          </MobileProfileBottom>
        </MobileProfileDescTitle>

        <ProfileDescContent>
          <ProfileDescTxt>{bio}</ProfileDescTxt>
          <ShowMore>+ Show More</ShowMore>
        </ProfileDescContent>
      </ProfileDesc>
    </ProfileContainer>
  )
}
