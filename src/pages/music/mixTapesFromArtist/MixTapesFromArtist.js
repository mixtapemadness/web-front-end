/* eslint react/jsx-curly-brace-presence: 0 */

import React from 'react';

import styled from 'styled-components';
import AlbumItem from 'components/albumItem';
import MusicSection from 'components/musicSection';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const MixTapesFromArtist = () => (
  <MusicSection
    title={'Mixtapes'}
    subTitle={'Check Out Some More Mixtapes From'}
    artist={'AJ Tracey'}
  >
    <Container>
      <AlbumItem />
      <AlbumItem />
      <AlbumItem />
      <AlbumItem />
    </Container>
  </MusicSection>
);

export default MixTapesFromArtist;
