import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Header from 'components/header'
import MainSlider from 'components/mainSlider'
import TrendingItem from 'components/trendingItem'
import Footer from 'components/footer'
import Download from 'components/download'
import WhatsOnComponent from 'components/whatsOnComponent'
import Subscribe from 'components/subscribe'
import Video from 'components/video'
import PlaylistSlider from 'components/playlistSlider'
import MobileSubscribe from 'components/mobileSubscribe'

import SliderPhoto from 'resources/assets/img/Live-Music.jpg'
import SliderPhotoSecond from 'resources/assets/img/music.jpg'
import Musician from 'resources/assets/img/musician1.png'
import Musician1 from 'resources/assets/img/2pac.jpg'
import Musician2 from 'resources/assets/img/eminem.jpg'

import homeEnhancer from './homeEnhancer'

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
`

const FlexDiv = styled.div`
  display: flex;
  ${p => p.jc && `justify-content: ${p.jc}`};
  ${p => p.width && `width: ${p.width}`};
  ${p => p.margin && 'margin: auto'};
  ${p => p.mb && `margin-bottom: ${p.mb}px`};
  ${p => p.mt && `margin-top: ${p.mt}px`};
  ${p => p.ml && `margin-left: ${p.ml}px`};
  ${p => p.mr && `margin-right: ${p.mr}px`};
  @media only screen and (max-width: 850px) {
    flex-direction: column;
    align-items: center;
  }
`

const TrendingContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 40px auto;
  justify-content: space-between;
  @media only screen and (max-width: 1150px) {
    flex-direction: column;
    align-items: center;
  }
`
const HaveToListenContainer = styled.div`
  max-width: 1200px;
  margin: 40px auto;
`

const WhatsOn = styled.div`
  max-width: 1200px;
  margin: 40px auto;
`
const SubscribeContainer = styled.div`
  margin-top: 100px;
`
const VideosContainer = styled.div`
  max-width: 1200px;
  margin: 60px auto;
  margin-bottom: 100px;
`
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  ${p => p.mb && `margin-bottom: ${p.mb}px`};
`
const Videos = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 1150px) {
    flex-direction: column;
    align-items: center;
  }
`

const SectionHeader = styled.span`
  font-weight: 600;
  font-size: 28px;
`
const SectionSubHeader = styled.span`
  font-size: 17.5px;
  letter-spacing: 1.1px;
  font-weight: 600;
`
// trendingData, haveToListenData, whatsOnVideos, whatsOnData, videoData, mainSliderData,)

const mainSliderData = [SliderPhoto, SliderPhotoSecond]

const trendingData = [
  {
    picture: Musician,
    type: 'Music',
    header: 'Skepta & Wizkid Team Up On "No Energy"',
    text:
      'Lorem ipsum dolor sit amet. consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis   natoque penatibus et',
    author: 'Mohhammed Patel',
    views: '10,000',
    id: 0,
  },
  {
    picture: Musician1,
    type: 'Music',
    header: 'Lady Leshurr Drops Her New Freestyle',
    text:
      'Lorem ipsum dolor sit amet. consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
    author: 'Mohhammed Patel',
    views: '10,000',
    id: 1,
  },
  {
    picture: Musician2,
    type: 'News',
    header: 'Inside UK Drill, With 67',
    text:
      'Lorem ipsum dolor sit amet. consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
    author: 'Mohhammed Patel',
    views: '10,000',
    id: 2,
  },
]

const haveToListenData = [
  {
    picture: Musician,
    type: 'Playlists',
    name: 'Grime Up North',
    text:
      'Lorem ipsum dolor sit amet. consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
    tracksCount: 15,
    followersCount: 69000,
    id: 0,
  },
  {
    picture: Musician2,
    type: 'Playlists',
    name: 'Grime Essentials',
    text:
      'Lorem ipsum dolor sit amet. consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
    tracksCount: 15,
    followersCount: 69000,
    id: 1,
  },
  {
    picture: Musician1,
    type: 'Playlists',
    name: 'Grime Up North',
    text:
      'Lorem ipsum dolor sit amet. consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
    tracksCount: 15,
    followersCount: 69000,
    id: 2,
  },
  {
    picture: Musician,
    type: 'Playlists',
    name: 'Grime Up North',
    text:
      'Lorem ipsum dolor sit amet. consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
    tracksCount: 15,
    followersCount: 69000,
    id: 3,
  },
]

const whatsOnVideos = [
  {
    picture: Musician,
    type: 'Video',
    name: 'Grime Up North',
    text:
      'Lorem ipsum dolor sit amet. consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
    views: '10,000',
    id: 0,
  },
  {
    picture: Musician1,
    type: 'Video',
    name: 'Grime Up North',
    text:
      'Lorem ipsum dolor sit amet. consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
    views: '10,000',
    id: 1,
  },
]

const whatsOnData = [
  {
    picture: Musician2,
    type: 'News',
    name: 'Grime Up North',
    text:
      'Lorem ipsum dolor sit amet. consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
    views: '10,000',
    id: 2,
  },
  {
    picture: Musician1,
    type: 'Playlist',
    name: 'Grime Up North',
    text:
      'Lorem ipsum dolor sit amet. consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
    views: '10,000',
    id: 3,
  },
]

const videoData = [
  {
    picture: Musician,
    songName: "I'm Upset",
    views: '10k',
    songAuthor: 'Drake',
    id: 0,
  },
  {
    picture: Musician1,
    songName: 'Praise The Lord',
    songAuthor: 'A$AP Rocky Feat Skepta',
    views: '10k',
    id: 1,
  },
  {
    picture: Musician2,
    songName: 'What You Want',
    songAuthor: 'Belly Feat. The Weeknd',
    views: '10k',
    id: 2,
  },
]

const Home = ({ width }) => (
  <div>
    <Header />
    <MainSlider data={mainSliderData} />
    <TrendingContainer>
      {trendingData.map(item => (
        <StyledLink to={`/blog/${item.type}/${item.id}`} key={item.id}>
          <TrendingItem data={item} />
        </StyledLink>
      ))}
    </TrendingContainer>
    <HaveToListenContainer>
      <HeaderContainer>
        <SectionHeader>You Have To Listen</SectionHeader>
        <SectionSubHeader size={17.5}>
          Mixtape Madness Share Their Top Playlists
        </SectionSubHeader>
      </HeaderContainer>
      <PlaylistSlider data={haveToListenData} />
    </HaveToListenContainer>
    <Download />
    <WhatsOn>
      <HeaderContainer mb={60}>
        <SectionHeader>What&apos;s On</SectionHeader>
        <SectionSubHeader>
          Check Out The Latest Music And News This Week
        </SectionSubHeader>
      </HeaderContainer>
      <FlexDiv jc="space-between" mb={33}>
        {whatsOnVideos.map(item => (
          <WhatsOnComponent data={item} key={item.id} />
        ))}
      </FlexDiv>
      <FlexDiv jc="space-between">
        {whatsOnData.map(item => (
          <WhatsOnComponent data={item} key={item.id} />
        ))}
      </FlexDiv>
    </WhatsOn>
    <SubscribeContainer>
      {width > 450 && <Subscribe />}
      {width <= 450 && <MobileSubscribe />}
    </SubscribeContainer>
    <VideosContainer>
      <HeaderContainer mb={60}>
        <SectionHeader>Videos</SectionHeader>
        <SectionSubHeader>
          Mixtape Madness Share Their Top Videos This Week
        </SectionSubHeader>
      </HeaderContainer>
      <Videos>
        {videoData.map(item => (
          <Video data={item} key={item.id} />
        ))}
      </Videos>
    </VideosContainer>
    <Footer />
  </div>
)

export default homeEnhancer(Home)
