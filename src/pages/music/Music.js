/* eslint react/jsx-curly-brace-presence: 0 */
import React from 'react';
import styled from 'styled-components';
import Footer from 'components/footer';
import MusicMainSection from './musicMainSection';
import Songs from './songs';
import MixTapesFromArtist from './mixTapesFromArtist';
import SimilarMixtapes from './similarMixtapes';
import SimilarArtists from './similarArtists';
import Page from '../Page';

const MusicSections = styled.div`
  width: 70%;
  margin: auto;
`;

const Music = () => (
  <Page>
    <MusicMainSection />
    <MusicSections>
      <Songs />
      <MixTapesFromArtist />
      <SimilarMixtapes />
      <SimilarArtists />
    </MusicSections>
    <Footer />
  </Page>
);

export default Music;
