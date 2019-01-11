/* eslint disable-line: 0 */
/* eslint indent: 0 */
/* eslint react/jsx-indent: 0 */
/* eslint operator-linebreak: 0 */

import React from 'react';
import styled from 'styled-components';
import Bg from '../../../resources/assets/img/musicBg.png';
import albumCover from '../../../resources/assets/img/albumCover.png';

const MusicMainSection = styled.div`
  width: 100%;
  height: calc(100vh - 120px);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background-image: url(${Bg});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

const musicSliderImg =
  'https://static1.squarespace.com/static/52c723b4e4b0b6f0473fa0c7/52c73e8ee4b0b674fecbb8d6/5ab0190303ce6497ede69670/1521490244848/music_Autonomics_coBandcamp_4344.jpg?format=1000w';

const MainSectionBlock = styled.div`
  width: 850px;
  height: 280px;
  background: #fff;
  display: flex;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
`;

const MainSectioLeft = styled.div`
  width: 250px;
  height: 250px;
  background-image: url(${albumCover});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

const MainSectionRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 50px;
`;

const AlbumName = styled.h2`
  flex: 1;
  font-size: ${props => props.size};
  color: ${props => props.color};
`;

const Artist = styled.h4`
  flex: 1;
`;

// const ArtistName = styled.span`

// `

const QuantityAndTime = styled.h4`
  flex: 1;
  color: #666666;
  margin-top: 10px;
`;

const AlbumDescription = styled.span`
  flex: 1;
  color: #7e7e7e;
  margin-top: 5px;
`;

export default () => (
  <MusicMainSection>
    <MainSectionBlock>
      <MainSectioLeft src={musicSliderImg} />
      <MainSectionRight>
        <AlbumName>SoundCheck</AlbumName>
        <Artist>Section Boyz</Artist>
        <QuantityAndTime>19 Hours - 1 Hours 50 Minutes</QuantityAndTime>
        <AlbumDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          maxime perferendis ratione impedit necessitatibus, assumenda nulla
          error.
        </AlbumDescription>
      </MainSectionRight>
    </MainSectionBlock>
  </MusicMainSection>
);
