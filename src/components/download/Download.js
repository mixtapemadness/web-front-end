import React from 'react'
import styled from 'styled-components'

import PhoneImage from 'resources/assets/img/phone.jpg'
import AppStoreIcon from 'resources/assets/img/appstore.png'
import GooglePlayIcon from 'resources/assets/img/googleplay.png'

const DownloadContainer = styled.div`
  max-width: 1200px;
  max-height: 553px;
  margin: 60px auto;
  background-image: url(${PhoneImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`
const ContentContainer = styled.div`
  padding: 100px 50px;
  width: 60%;
  @media only screen and (max-width: 700px) {
    width: 90%;
    padding: 20px 10px;
  }
`
const Header = styled.span`
  font-size: 26px;
  line-height: 1;
  letter-spacing: 1.6px;
  font-weight: 600;
  color: #ffffff;
  @media only screen and (max-width: 450px) {
    font-size: 20px;
  }
`
const SubHeader = styled.span`
  font-size: 19px;
  font-weight: 300;
  line-height: 1;
  letter-spacing: 1.1px;
  margin-top: 42px;
  color: #ffffff;
  @media only screen and (max-width: 450px) {
    font-size: 16px;
  }
`
const DownloadButton = styled.button`
  background: transparent;
  width: 300px;
  border: 2px solid #ff9d00;
  color: white;
  font-weight: bold;
  font-size: 20px;
  margin-top: 40px;
  height: 45px;
  cursor: pointer;
`
const FlexDiv = styled.div`
  display: flex;
  margin-top: 40px;
`
const Icon = styled.img`
  width: auto;
  height: 38px;
  margin-right: 10px;
`
const Div = styled.div`
  display: flex;
  flex-direction: column;
`

const Download = () => (
  <DownloadContainer>
    <ContentContainer>
      <Div>
        <Header>
          Keep Up To Date With The Latest
          <br />
          News And Stream Brand New Music
        </Header>
        <SubHeader>
          The UK&apos;s No.1 Platform For Urban Music
          <br />
          Download The App Now
        </SubHeader>
      </Div>
      <DownloadButton>Download</DownloadButton>
      <FlexDiv>
        <Icon src={AppStoreIcon} />
        <Icon src={GooglePlayIcon} />
      </FlexDiv>
    </ContentContainer>
  </DownloadContainer>
)

export default Download
