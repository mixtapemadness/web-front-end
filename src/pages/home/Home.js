import React, { Component } from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';
import Helmet from 'react-helmet';

import Advertisement from 'components/advertisement';
import MainSlider from 'components/mainSlider';
import Subscribe from 'components/subscribe';
import Videos from 'components/videos';
import Download from 'components/download';
import window from 'global';
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
  constructor(props) {
    super(props);
    this.state = {
      isMobile: window && window.matchMedia && window.matchMedia('(max-width: 768px)').matches,
      adUnitSlot: '5406499701',
      adUnitStyle: {
        display: 'inline-block',
        width: '320px',
        height: '100px',
      },
    };
  }

  componentDidMount() {
    const { isMobile } = this.state;
    if (!isMobile) {
      this.setState({
        adUnitSlot: '7632256105',
        adUnitStyle: {
          display: 'inline-block',
          width: '728px',
          height: '90px',
        },
      });
    }
  }

  render() {
    const { adUnitSlot, adUnitStyle } = this.state;
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
        <Advertisement
          slot={adUnitSlot}
          format="auto"
          style={adUnitStyle}
        />
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
