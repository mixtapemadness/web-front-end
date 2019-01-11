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
import SliderPhoto from 'resources/assets/img/Live-Music.jpg';
import SliderPhotoSecond from 'resources/assets/img/music.jpg';
import WhatsOn from './whatsOn';
import Interviews from './interviews';
import Posts from './posts';
import homeEnhancer from './homeEnhancer';
import Reviews from './reviews';

const Container = styled.div`
  margin: auto;
`;

const HaveToListenContainer = styled.div`
  max-width: 1200px;
  margin: 40px auto;
`;

const SubscribeContainer = styled.div`
  margin: 40px;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  ${p => p.mb && `margin-bottom: ${p.mb}px`};
`;

const SectionHeader = styled.span`
  font-weight: 600;
  font-size: 28px;
`;

const SectionSubHeader = styled.span`
  font-size: 17.5px;
  letter-spacing: 1.1px;
  font-weight: 600;
`;

const mainSliderData = [SliderPhoto, SliderPhotoSecond];

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
          <LazyLoad once offsetVertical={0}>
            <MainSlider data={sliderData.Posts} />
          </LazyLoad>
        )}
      <LazyLoad once offset={0}>
        <Videos />
      </LazyLoad>
      <LazyLoad once offset={0}>
        <Posts />
      </LazyLoad>

      <LazyLoad once offset={0}>
        <Interviews />
      </LazyLoad>
      <LazyLoad once offset={0}>
        <Download />
      </LazyLoad>
      <LazyLoad once offset={50}>
        <WhatsOn />
      </LazyLoad>
      <LazyLoad once offset={50}>
        <SubscribeContainer>
          <Subscribe />
        </SubscribeContainer>
      </LazyLoad>
      <LazyLoad once offset={50}>
        <Reviews />
      </LazyLoad>
    </Container>
  </Fragment>
);

export default homeEnhancer(Home);
