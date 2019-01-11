/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint operator-linebreak: 0 */
/* eslint no-unused-vars: 0 */
/* eslint react/no-unescaped-entities: 0 */

import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom'
// import Share from '../../resources/assets/svgComponents/Share'
// import Dots from '../../resources/assets/svgComponents/Dots'
import AlbumCover from '../../resources/assets/img/album2.png';

const musicSliderImg =
  'https://static1.squarespace.com/static/52c723b4e4b0b6f0473fa0c7/52c73e8ee4b0b674fecbb8d6/5ab0190303ce6497ede69670/1521490244848/music_Autonomics_coBandcamp_4344.jpg?format=1000w';

const Container = styled.div`
  flex: 1 0 250px;
  margin: 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.div`
  width: 100%;
  height: 250px;
  background-image: url(${AlbumCover});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

const Name = styled.h3``;

const Artist = styled.h4`
  color: #666666;
`;

const AlbumItem = ({ data, blog }) => (
  <Container>
    <Img img={musicSliderImg} />
    <Name>Don't Panic</Name>
    <Artist>Sectoin Boyz</Artist>
  </Container>
);

export default AlbumItem;
