/* eslint disable-line: 0 */
/* eslint indent: 0 */
/* eslint react/jsx-indent: 0 */
/* eslint react/jsx-curly-brace-presence: 0 */

import React from 'react'
import styled from 'styled-components'
import AlbumItem from 'components/albumItem'
import MusicSection from 'components/musicSection'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

export default () => (
  <MusicSection
    title={'Similar Artists'}
    subTitle={'Suggested Artists You May Enjoy'}
    artist={'Dave, Stefflon, Notes, Yxng Bane'}
  >
    <Container>
      <AlbumItem />
      <AlbumItem />
      <AlbumItem />
      <AlbumItem />
    </Container>
  </MusicSection>
)
