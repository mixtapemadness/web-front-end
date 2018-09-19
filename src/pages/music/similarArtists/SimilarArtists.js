/* eslint disable-line: 0 */
/* eslint indent: 0 */
/* eslint react/jsx-indent: 0 */
/* eslint react/jsx-curly-brace-presence: 0 */

import React from 'react'
import styled from 'styled-components'
import AlbumItem from 'components/albumItem'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

export default () => (
  <Container>
    <AlbumItem />
    <AlbumItem />
    <AlbumItem />
    <AlbumItem />
  </Container>
)
