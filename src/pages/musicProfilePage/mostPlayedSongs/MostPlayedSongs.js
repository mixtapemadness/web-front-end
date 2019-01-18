/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint operator-linebreak: 0 */
import React from 'react';
import styled from 'styled-components';
import SongItem from 'components/songItem';

const Container = styled.div`
  width: 100%;
  display: flex;
  margin: auto;
  flex-wrap: wrap;
`;

const MostPlayedSongs = () => (
  <Container>
    <SongItem />
    <SongItem />
    <SongItem />
    <SongItem />
    <SongItem />
    <SongItem />
  </Container>
);

export default MostPlayedSongs;
