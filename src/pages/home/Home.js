/* global googletag */

import React, { Component } from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';
import Helmet from 'react-helmet';

import Advertisement from 'components/advertisement';
import MainSlider from 'components/mainSlider';
import Subscribe from 'components/subscribe';
import Videos from 'components/videos';
import Download from 'components/download';
import WhatsOn from './whatsOn';
import Interviews from './interviews';
import Posts from './posts';
import Reviews from './reviews';
import {
  IMAGES_URL, ROUTES, SEO,
} from '../../constants';

const SubscribeContainer = styled.div`
  margin: 40px;
`;

class Home extends Component {
  componentDidMount() {
    if (googletag) {
      this.pushGoogleTags();
    }
  }

  componentDidUpdate() {
    console.log('here');
    if (googletag) {
      this.pushGoogleTags();
    }
  }

  pushGoogleTags = () => {
    if (googletag) {
      googletag.cmd.push(() => { googletag.display('div-gpt-ad-1550497711029-0'); });
    }
  }

  render() {
    return (
      <div className="page__container">
        <Helmet>
          <title>{`Mixtape Madness | ${SEO.title}`}</title>
          <meta property="og:image" content={`${IMAGES_URL}/assets/images/favicons/favicon-96x96.png`} />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content={ROUTES.base}
          />
          <meta
            property="og:title"
            content={`Mixtape Madness | ${SEO.title}`}
          />
          <meta
            property="og:description"
            content={`${SEO.description}`}
          />
          <link rel="canonical" href={ROUTES.base} />
          <meta name="twitter:title" content={`Mixtape Madness ${SEO.title}`} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:description"
            content={`${SEO.description}`}
          />
          <meta name="keywords" content={SEO.keywords} />
          <meta
            name="description"
            content={SEO.description}
          />
        </Helmet>
        <Advertisement>
          <div id="div-gpt-ad-1550497711029-0" className="center" />
          <script dangerouslySetInnerHTML={{ __html: 'googletag.cmd.push(function() { googletag.display(\'div-gpt-ad-1550497711029-0\'); });' }} />
        </Advertisement>
        <LazyLoad height={400} once offsetVertical={0}>
          <MainSlider />
        </LazyLoad>
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
  }
}

export default Home;
