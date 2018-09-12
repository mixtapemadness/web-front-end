/* eslint react/jsx-one-expression-per-line: 0 */

import React from 'react'
import styled from 'styled-components'
import EyeIcon from 'resources/assets/svg/eye.svg'
import ClockIcon from 'resources/assets/svg/clock.svg'
import SignalBars from 'resources/assets/svg/signal-bars.svg'
import PlayIcon from 'resources/assets/svg/Play.svg'

const TopVideo = styled.div`
  flex: 0 0 115px;
  max-width: 450px;
  display: flex;
  font-size: 16px;
  color: #8c8b8b;
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
  min-height: 115px;
  box-sizing: content-box;
`

const Video = styled.div`
  flex: 1;
  box-sizing: border-box;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  justify-content: center;
  display: flex;
  align-items: center;
`

const VideoDesc = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
  padding: 5px 0;
`

const VideoDescTop = styled.div`
  display: flex;
  flex-direction: column;
`

const VideoDescTitle = styled.div`
  display: flex;
  justify-content: space-between;
`

const VideoDescSongName = styled.div`
  display: flex;
  color: #111;
  font-weight: 800;
`

const VideoDescDuration = styled.div`
  display: flex;
  align-items: center;
`

const VideoDescArtist = styled.div`
  display: flex;
`

const VideoDescBottom = styled.div``

const VideoDescView = styled.div`
  color: #302d2d;
  display: flex;
  align-items: center;
`

const Icon = styled.div`
  width: 15px;
  height: ${p => (p.play ? '19px' : '15px')};
  background-image: url(${porps => porps.src});
  background-size: cover;
  background-position: center center;
  margin-right: 5px;
  cursor: ${p => (p.play ? 'pointer' : 'default')};
`

export default ({ data }) => (
  <TopVideo>
    <Video src={data.img}>
      <Icon src={PlayIcon} play />
    </Video>
    <VideoDesc>
      <VideoDescTop>
        <VideoDescTitle>
          <VideoDescSongName>{data.songName}</VideoDescSongName>
          <VideoDescDuration>
            <Icon src={ClockIcon} />
            {data.duration}
          </VideoDescDuration>
        </VideoDescTitle>
        <VideoDescArtist>{data.songAuthor}</VideoDescArtist>
      </VideoDescTop>
      <VideoDescBottom>
        <VideoDescView>
          <Icon src={EyeIcon} />
          {data.comments} Views
        </VideoDescView>
        <Icon src={SignalBars} />
      </VideoDescBottom>
    </VideoDesc>
  </TopVideo>
)
