/* eslint react/jsx-curly-brace-presence: 0 */
import React from 'react'

import styled from 'styled-components'
import SongItem from 'components/songItem'
import MusicSection from 'components/musicSection'

const SongsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

const Songs = () => (
  <MusicSection
    title={'SoundCheck'}
    subTitle={'Secure The Bag! By'}
    artist={'Section Boyz'}
  >
    <SongsContainer>
      <SongItem />
      <SongItem />
      <SongItem />
      <SongItem />
      <SongItem />
      <SongItem />
    </SongsContainer>
  </MusicSection>
)

export default Songs
