/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint operator-linebreak: 0 */
/* eslint no-unused-vars: 0 */

import React from 'react'
import styled from 'styled-components'
// import { Link } from 'react-router-dom'
import Share from '../../resources/assets/svgComponents/Share'
import Dots from '../../resources/assets/svgComponents/Dots'
import albumCover from '../../resources/assets/img/albumCover.png'

const musicSliderImg =
  'https://static1.squarespace.com/static/52c723b4e4b0b6f0473fa0c7/52c73e8ee4b0b674fecbb8d6/5ab0190303ce6497ede69670/1521490244848/music_Autonomics_coBandcamp_4344.jpg?format=1000w'

const SongItemContainer = styled.div`
  flex: 1 0 550px;
  margin: 15px;
  box-sizing: border-box;
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  :nth-child(4n + 1) {
    border: 0;
  }
  :nth-child(5n + 1) {
    border: 0;
  }
`

const SongItemLeft = styled.div`
  display: flex;
`

const SongIndex = styled.div`
  width: 15px;
  height: 100%;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`

const AlbumImg = styled.div`
  width: 120px;
  height: 120px;
  background-image: url(${albumCover});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`

const SongItemRight = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  align-items: center;
  margin: 0 10px;
`

const SongItemRightCol = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.4;
  &:nth-child(3) {
    flex-direction: row;
  }
`

const SongDescTitle = styled.h4``

const SongDescArtist = styled.span`
  color: #666666;
  font-weight: 800;
`

const SongDescYear = styled.h4``
// const SongPlays = styled.h4`

// `

const SongPlaysQuantity = styled.h4`
  font-weight: 400;
`
const SongPlaysTxt = styled.h4``

const SongItemIcons = styled.div`
  min-width: 60px;
  display: flex;
  justify-content: space-between;
`

const SongItem = ({ data, blog }) => (
  <SongItemContainer>
    <SongItemLeft>
      <SongIndex>02</SongIndex>
      <AlbumImg src={musicSliderImg} />
    </SongItemLeft>
    <SongItemRight>
      <SongItemRightCol>
        <SongDescTitle>Setp In</SongDescTitle>
        <SongDescArtist>Section Boyz</SongDescArtist>
        <SongDescYear>2018</SongDescYear>
      </SongItemRightCol>
      <SongItemRightCol>
        <SongPlaysQuantity>100</SongPlaysQuantity>
        <SongPlaysTxt>Plays</SongPlaysTxt>
      </SongItemRightCol>
      <SongItemRightCol>
        <SongItemIcons>
          <Share width={25} />
          <Dots width={25} />
        </SongItemIcons>
      </SongItemRightCol>
    </SongItemRight>
  </SongItemContainer>
)

export default SongItem
