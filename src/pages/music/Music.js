/* eslint react/jsx-curly-brace-presence: 0 */
import React from 'react';
import styled from 'styled-components';
import Footer from 'components/footer';
import Advertisement from 'components/advertisement';
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
    <Advertisement>
      <div id="div-gpt-ad-1550568793125-0" style={{ height: '1px', width: '1px' }} />

      <script dangerouslySetInnerHTML={{ __html: 'googletag.cmd.push(function() { googletag.display(\'div-gpt-ad-1550568793125-0\'); });' }} />
    </Advertisement>
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
