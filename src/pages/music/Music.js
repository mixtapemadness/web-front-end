import React from 'react'

import styled from 'styled-components'

import MusicSection from 'components/musicSection'
import Footer from 'components/footer'
import musicEnhancer from './musicEnhancer'
import MusicMainSection from './musicMainSection'
import Songs from './songs'
import MixTapesFromArtist from './mixTapesFromArtist'
import SimilarMixtapes from './similarMixtapes'
import SimilarArtists from './similarArtists'

const MusicContainer = styled.div`
  width: 100%;
`

const MusicSections = styled.div`
  width: 70%;
  margin: auto;
`

const Music = () => (
  <MusicContainer>
    <MusicMainSection />
    <MusicSections>
      <MusicSection>
        <Songs />
      </MusicSection>
      <MusicSection>
        <MixTapesFromArtist />
      </MusicSection>
      <MusicSection>
        <SimilarMixtapes />
      </MusicSection>
      <MusicSection>
        <SimilarArtists />
      </MusicSection>
    </MusicSections>
    <Footer />
  </MusicContainer>
)

export default musicEnhancer(Music)
