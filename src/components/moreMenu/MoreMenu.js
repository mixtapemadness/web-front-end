import React from 'react'
import styled from 'styled-components'

import Musician from 'resources/assets/img/musician1.png'
import Musician1 from 'resources/assets/img/2pac.jpg'
import Musician2 from 'resources/assets/img/eminem.jpg'

import MoreMenuItem from './MoreMenuItem'

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding-top: 42px;
`
const ItemContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`
const Search = styled.input`
  width: 100%;
  text-align: center;
  outline: none;
  font-size: 12.5px;
  border-radius: 10px;
  border: 1px solid #dbdbdb;
  margin-top: 24px;
  height: 27px;
  :-webkit-input-placeholder {
    color: rgba(0, 0, 0, 0.8);
    font-size: 12.5px;
    letter-spacing: 0.8px;
    opacity: 0.8;
    text-align: center;
  }
  ::-moz-placeholder {
    color: rgba(0, 0, 0, 0.8);
    font-size: 12.5px;
    letter-spacing: 0.8px;
    opacity: 0.8;
    text-align: center;
  }
  :-ms-input-placeholder {
    color: rgba(0, 0, 0, 0.8);
    font-size: 12.5px;
    letter-spacing: 0.8px;
    opacity: 0.8;
    text-align: center;
  }
  :-moz-placeholder {
    color: rgba(0, 0, 0, 0.8);
    font-size: 12.5px;
    letter-spacing: 0.8px;
    opacity: 0.8;
    text-align: center;
  }
`

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  ${p => p.mt && `margin-top: ${p.mt}px`};
  ${p => p.width && 'width: 111px'};
`
const Span = styled.span`
  letter-spacing: 0.5px;
  color: #000000;
  font-weight: 600;
  font-size: 8px;
  cursor: pointer;
`

const dummyData = [
  {
    img: Musician,
    title: 'Charts',
    subTitle: 'Latest Charts',
  },
  {
    img: Musician1,
    title: 'Playlists',
    subTitle: 'Latest Playlists',
  },
  {
    img: Musician2,
    title: 'Mixtapes',
    subTitle: 'Latest Mixtapes',
  },
  {
    img: Musician,
    title: 'Videos',
    subTitle: 'Latest Videos',
  },
  {
    img: Musician,
    title: 'Singles',
    subTitle: 'Latest Singles',
  },
]

const MoreMenu = () => (
  <Container>
    <ItemContainer>
      {dummyData.map(item => (
        <MoreMenuItem data={item} />
      ))}
    </ItemContainer>
    <Search placeholder="Search Mixtape Madness" />
    <FlexDiv mt={26}>
      <Span>Mixtape Madness</Span>
      <FlexDiv width>
        <Span>Help</Span>
        <Span>Terms</Span>
        <Span>Privacy</Span>
      </FlexDiv>
    </FlexDiv>
  </Container>
)

export default MoreMenu
