/* eslint operator-linebreak: 0 */
/* eslint implicit-arrow-linebreak: 0 */
/* eslint no-unused-vars: 0 */

import React from 'react';
import { Link } from 'react-router-dom';
import Video from 'components/video';
import SliderComponent from 'components/slider';
import { CardLoader } from 'components/loaders';
import videosEnhancer from './videosEnhancer';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  rows: 3,
  slidesPerRow: 2,
  slidesToScroll: 3,
  slidesToShowResponsive: 2,
  slidesToScrollResponsive: 2,
  centerPadding: '0px',
  responsive: [
    {
      breakpoint: 1154,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        rows: 2,
      },
    },
    {
      breakpoint: 751,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 1,
        slidesPerRow: 1,
      },
    },
  ],
};
const Videos = ({ data }) => {
  const Posts = data && data.Posts && data.Posts;
  return (
    <SliderComponent
      title={<Link to="/blog/category/videos">Latest Videos</Link>}
      subTitle="Our selection of bangers"
      settings={settings}
    >
      {data.loading &&
      [...Array(8)].map(i => <CardLoader key={`${i}-videos-loader`} />)}
      {!data.loading &&
      Posts &&
      Posts.map(item => <Video key={item.id} data={item} />)}
    </SliderComponent>
  );
};

export default videosEnhancer(Videos);
