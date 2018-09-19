/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint operator-linebreak: 0 */
import React from 'react'
import styled from 'styled-components'
import AlbumItem from 'components/albumItem'

const Container = styled.div`
  width: 100%;
  display: flex;
  margin: auto;
  flex-wrap: wrap;
`

const MostPlayedPlaylists = () => (
  <Container>
    <AlbumItem />
    <AlbumItem />
    <AlbumItem />
    <AlbumItem />
  </Container>
)

export default MostPlayedPlaylists
