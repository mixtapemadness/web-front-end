/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint operator-linebreak: 0 */
/* eslint react/jsx-indent: 0 */
/* eslint indent: 0 */

import React from 'react'
import styled from 'styled-components'
import MusicSection from 'components/musicSection'
import Footer from 'components/footer'
import MainSection from './mainSection'
import MusicFilter from './musicFilter'
import MostPlayed from './mostPlayedSongs'
import MostPlayedPlaylists from './mostPlayedPlayLists'

const Container = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin: auto;
`

const VideoPlayer = styled.div`
  width: 100%;
  height: 60px;
  background: #ff9600;
  margin: 20px 0;
`

const MusicProfilePage = () => (
  <Container>
    <MainSection />
    <MusicFilter />
    <MusicSection>
      <MostPlayed />
    </MusicSection>
    <MusicSection>
      <MostPlayed />
    </MusicSection>
    <MusicSection>
      <MostPlayedPlaylists />
    </MusicSection>
    <VideoPlayer />
    <Footer />
  </Container>
)

export default MusicProfilePage
