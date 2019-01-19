import React from 'react';
import { Link } from 'react-router-dom';
import PostItem from 'components/postItem';
import SliderComponent from 'components/slider';
import { CardLoader } from 'components/loaders';
import whatsOnEnhancer from './whatsOnEnhancer';
import { ROUTES } from '../../../constants';

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
    <SliderComponent
      title={<Link to={ROUTES.categories.events}>Events</Link>
      }
      subTitle="Looking for something to do?"
      cta={<Link to={ROUTES.categories.events}>see more</Link>}
      settings={settings}
    >
      {data.loading
      && [...Array(8)].map(i => (
        <CardLoader key={`${i}-interview-loader`} />
      ))}
      {!data.loading
      && Posts
      && Posts.map(item => <PostItem key={item.id} data={item} />)}
    </SliderComponent>
  );
};

export default whatsOnEnhancer(WhatsOn);
