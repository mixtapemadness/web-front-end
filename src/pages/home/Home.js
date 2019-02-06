import React from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';
import Helmet from 'react-helmet';

import MainSlider from 'components/mainSlider';
import Subscribe from 'components/subscribe';
import Videos from 'components/videos';
import Download from 'components/download';
import WhatsOn from './whatsOn';
import Interviews from './interviews';
import Posts from './posts';
import homeEnhancer from './homeEnhancer';
import Reviews from './reviews';
import { ROUTES, SEO, TWITTER_HANDLE } from '../../constants';

const SubscribeContainer = styled.div`
  margin: 40px;
`;

const Home = ({ sliderData }) => (
  <div className="page__container">
    <Helmet>
      <title>{`Mixtape Madness | ${SEO.title}`}</title>
      <meta property="og:image" content="/resources/assets/favicons/favicon-96x96.png" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_UK" />
      <meta
        property="og:url"
        content={ROUTES.base}
      />
      <meta
        property="og:title"
        content={`Mixtape Madness ${SEO.title}`}
      />
      <meta
        property="og:description"
        content={`${SEO.description}`}
      />
      <link rel="canonical" href={ROUTES.base} />
      <meta name="twitter:title" content={`Mixtape Madness ${SEO.title}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:creator" content={TWITTER_HANDLE} />
      <meta
        name="twitter:description"
        content={`${SEO.description}`}
      />
      <meta name="keywords" content={SEO.keywords} />
      <meta
        name="description"
        content={SEO.description}
      />
      <meta name="twitter:creator" content={`${TWITTER_HANDLE}`} />
    </Helmet>
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
    <LazyLoad height={200} once offset={0}>
      <Download />
    </LazyLoad>
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
