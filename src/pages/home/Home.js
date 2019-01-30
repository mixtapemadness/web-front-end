import React from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

import MainSlider from 'components/mainSlider';
import Subscribe from 'components/subscribe';
import Videos from 'components/videos';
import WhatsOn from './whatsOn';
import Interviews from './interviews';
import Posts from './posts';
import homeEnhancer from './homeEnhancer';
import Reviews from './reviews';

const SubscribeContainer = styled.div`
  margin: 40px;
`;

const Home = ({ sliderData }) => (
  <div className="page__container">
    {sliderData
    && sliderData.Posts && (
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
  </div>
);

export default homeEnhancer(Home);
