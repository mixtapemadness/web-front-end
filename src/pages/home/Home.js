/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint no-unused-vars: 0 */
/* eslint operator-linebreak: 0 */
/* eslint indent: 0 */
/* eslint quotes: 0 */
import React, { Fragment } from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';
import { Helmet } from 'react-helmet';

import MainSlider from 'components/mainSlider';
import Download from 'components/download';
import Subscribe from 'components/subscribe';
import Videos from 'components/videos';
import WhatsOn from './whatsOn';
import Interviews from './interviews';
import Posts from './posts';
import homeEnhancer from './homeEnhancer';
import Reviews from './reviews';

const Container = styled.div`
  margin: auto;
`;

const SubscribeContainer = styled.div`
  margin: 40px;
`;

const Home = ({ sliderData }) => (
  <Fragment>
    <Helmet>
      <meta
        name="description"
        content={`We showcase the best of British urban music by presenting Music videos, Mixtape premieres, Audios & freestyle shows such as 'Mad About Bars' & 'Next Up', We are proud to have featured many great artists such as J Hus, Abra Cadabra, Potter Payper, M Huncho, Jay Silva and many more.`}
      />
    </Helmet>
    <Container>
      {sliderData &&
        sliderData.Posts && (
          <LazyLoad height={400} once offsetVertical={0}>
            <MainSlider data={sliderData.Posts} />
          </LazyLoad>
        )}
      <LazyLoad height={400} once offset={0}>
        <Videos />
      </LazyLoad>
      <LazyLoad height={400} once offset={0}>
        <Posts />
      </LazyLoad>
      <LazyLoad height={400} once offset={0}>
        <Interviews />
      </LazyLoad>
      {/* <LazyLoad once offset={0}> */}
      {/* <Download /> */}
      {/* </LazyLoad> */}
      <LazyLoad height={400} once offset={50}>
        <WhatsOn />
      </LazyLoad>
      <LazyLoad height={400} once offset={50}>
        <SubscribeContainer>
          <Subscribe />
        </SubscribeContainer>
      </LazyLoad>
      <LazyLoad height={400} once offset={50}>
        <Reviews />
      </LazyLoad>
    </Container>
  </Fragment>
);

export default homeEnhancer(Home);
