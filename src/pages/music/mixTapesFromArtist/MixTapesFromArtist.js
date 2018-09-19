import React from 'react'

import styled from 'styled-components'
import AlbumItem from 'components/albumItem'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

const MixTapesFromArtist = () => (
  <Container>
    <AlbumItem />
    <AlbumItem />
    <AlbumItem />
    <AlbumItem />
  </Container>
)

export default MixTapesFromArtist
