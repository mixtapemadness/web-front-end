import React from 'react'

import styled from 'styled-components'
import SongItem from 'components/songItem'

const SongsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

const Songs = () => (
  <SongsContainer>
    <SongItem />
    <SongItem />
    <SongItem />
    <SongItem />
    <SongItem />
    <SongItem />
  </SongsContainer>
)

export default Songs
