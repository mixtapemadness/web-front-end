/* eslint react/jsx-one-expression-per-line: 0 */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import PhoneImage from 'resources/assets/img/phone.jpg';
import MixtapeLogo from 'resources/assets/img/mixtape-logo.png';

import { ROUTES } from '../../constants';

const DownloadContainer = styled.div`
  max-width: 1200px;
  max-height: 553px;
  margin: 60px auto;
  background-image: url(${PhoneImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
const ContentContainer = styled.div`
  padding: 100px 50px;
  width: 60%;
  @media only screen and (max-width: 700px) {
    width: 90%;
    padding: 20px 10px;
  }
`;
const Header = styled.span`
 line-height: 26px;
  line-height: 1;
  color: #ffffff;
  img {
    width: 100px;
  }
  @media only screen and (max-width: 450px) {
    font-size: 20px;
  }
`;

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
`;


const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const Download = () => (
  <DownloadContainer>
    <ContentContainer>
      <Div>
        <Header>
          <img src={MixtapeLogo} alt="MM Logo" />
          <h2>
          Keep up with the latest music & entertainment.
          </h2>
        </Header>
        <DownloadButton>
          <Link to={ROUTES.about}>Find Out More</Link>
        </DownloadButton>
      </Div>
    </ContentContainer>
  </DownloadContainer>
);

export default Download;
