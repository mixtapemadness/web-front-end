/* eslint operator-linebreak: 0 */
/* eslint implicit-arrow-linebreak: 0 */
/* eslint arrow-body-style: 0 */
/* eslint no-unused-vars: 0 */

import React from 'react';
import { Link } from 'react-router-dom';
import PostItem from 'components/postItem';
import SliderComponent from 'components/slider';
import { CardLoader } from 'components/loaders';
import postsEnhancer from './postsEnhancer';

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

const Posts = ({ data }) => {
  const posts = data && data.Posts && data.Posts;
  return (
    <SliderComponent
      title={<Link to="/blog/category/news">News</Link>}
      subTitle="This week's hottest news"
      settings={settings}
    >
      {posts && posts.map(item => <PostItem key={item.id} data={item} />)}
    </SliderComponent>
  );
};

export default postsEnhancer(Posts);
