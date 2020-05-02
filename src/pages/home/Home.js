import React, { Component } from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';
import Helmet from 'react-helmet';

import window from 'global/window';
import Advertisement from 'components/advertisement';
import MainSlider from 'components/mainSlider';
import Subscribe from 'components/subscribe';
import Videos from 'components/videos';
import {
  IMAGES_URL, ROUTES, SEO,
} from '../../constants';
import ContentSlider from '../../components/ContentSlider/ContentSlider';

const SubscribeContainer = styled.div`
  margin: 30px 0;
`;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: window && window.matchMedia && window.matchMedia('(max-width: 768px)').matches,
    };
  }

  render() {
    const { isMobile } = this.state;
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
        </Advertisement>
        <LazyLoad height={400} once offsetVertical={0}>
          <MainSlider />
        </LazyLoad>
        <LazyLoad height={400} once offset={0}>
          <Videos isMobile={isMobile} />
          {isMobile && (
            <Advertisement key="div-gpt-ad-1550497747165-0" border hideDesktop>
              <div
                id="div-gpt-ad-1550497747165-0"
                className="center"
                style={{ height: '250px', width: '300px' }}
              />
            </Advertisement>
          )}
        </LazyLoad>
        <LazyLoad height={400} once offset={0}>
          <ContentSlider title="News" category="news" />
        </LazyLoad>
        <LazyLoad height={400} once offset={50}>
          <ContentSlider title="Articles" category="articles" />
        </LazyLoad>
        <LazyLoad height={400} once offset={50}>
          <ContentSlider title="Features" category="features" />
        </LazyLoad>
        <LazyLoad height={400} once offset={0}>
          <ContentSlider title="Interviews" category="interviews" />
        </LazyLoad>
        <LazyLoad height={400} once offset={50}>
          <SubscribeContainer>
            <Subscribe />
          </SubscribeContainer>
        </LazyLoad>
        <LazyLoad height={400} once offset={50}>
          <ContentSlider title="Reviews" category="reviews" />
        </LazyLoad>
      </div>
    );
  }
}

export default Home;
