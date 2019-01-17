/* eslint operator-linebreak: 0 */
/* eslint implicit-arrow-linebreak: 0 */
/* eslint arrow-body-style: 0 */
/* eslint no-unused-vars: 0 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PostItem from 'components/postItem';
import SliderComponent from 'components/slider';
import { CardLoader } from 'components/loaders';
import whatsOnEnhancer from './whatsOnEnhancer';

const Container = styled.div`
  width: 100%;
  margin: 40px auto;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  ${p => p.mb && `margin-bottom: ${p.mb}px`};
`;

const SectionHeader = styled.span`
  font-weight: 800;
  font-size: 38px;
`;

const WhatsOnItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media only screen and (max-width: 1190px) {
    align-items: center;
    justify-content: center;
  }
`;

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  rows: 3,
  slidesPerRow: 2,
  slidesToShowResponsive: 2,
  slidesToScrollResponsive: 2,
  centerPadding: '0px',
  responsive: [
    {
      breakpoint: 1050,
      settings: {
        rows: 1,
        slidesPerRow: 1,
      },
    },
  ],
};

const WhatsOn = ({ data }) => {
  const Posts = data && data.Posts && data.Posts;

  return (
    <Container>
      <HeaderContainer mb={0}>
        <SectionHeader>
          <Link to="/blog/category/events">Events</Link>
        </SectionHeader>
      </HeaderContainer>
      <WhatsOnItemsContainer>
        <SliderComponent settings={settings}>
          {data.loading &&
            [...Array(8)].map(i => (
              <CardLoader key={`${i}-interview-loader`} />
            ))}
          {!data.loading &&
            Posts &&
            Posts.map(item => <PostItem key={item.id} data={item} />)}
        </SliderComponent>
      </WhatsOnItemsContainer>
    </Container>
  );
};

export default whatsOnEnhancer(WhatsOn);
