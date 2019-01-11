/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint operator-linebreak: 0 */

import React from 'react';
import styled from 'styled-components';
import Bg from '../../../resources/assets/img/profilePageBg.png';

const Container = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${Bg});
  background-size: cover;
`;

const Title = styled.h1`
  width: 350px;
  text-align: center;
  font-weight: 800;
  color: #fff;
  font-size: 36px;
`;

const MusicProfilePage = () => (
  <Container>
    <Title>Your Profile On Mixtape Madness</Title>
  </Container>
);

export default MusicProfilePage;
