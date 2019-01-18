/* eslint operator-linebreak: 0 */
/* eslint implicit-arrow-linebreak: 0 */
/* eslint arrow-body-style: 0 */
/* eslint no-unused-vars: 0 */

import React from 'react';
import { Link } from 'react-router-dom';
import PostItem from 'components/postItem';
import SliderComponent from 'components/slider';
import { CardLoader } from 'components/loaders';
import whatsOnEnhancer from './whatsOnEnhancer';

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
      title={<Link to="/blog/category/events">Events</Link>
      }
      subTitle="Looking for something to do?"
      settings={settings}
    >
      {data.loading &&
      [...Array(8)].map(i => (
        <CardLoader key={`${i}-interview-loader`} />
      ))}
      {!data.loading &&
      Posts &&
      Posts.map(item => <PostItem key={item.id} data={item} />)}
    </SliderComponent>
  );
};

export default whatsOnEnhancer(WhatsOn);
