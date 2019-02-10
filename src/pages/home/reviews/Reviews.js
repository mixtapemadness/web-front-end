import React from 'react';
import { Link } from 'react-router-dom';
import PostItem from 'components/postItem';
import SliderComponent from 'components/slider';
import { CardLoader } from 'components/loaders';

import reviewsEnhancer from './reviewsEnhancer';
import { ROUTES } from '../../../constants';

const Reviews = ({ data }) => {
  const posts = data && data.Posts && data.Posts;
  return (
    <SliderComponent
      title={
        <Link to={ROUTES.categories.reviews}>Reviews</Link>
      }
      subTitle="Albums, Videos, EPs and more"
      cta={<Link to={ROUTES.categories.reviews}>see more</Link>}
    >
      {data.loading
        ? [...Array(6)].map(i => <CardLoader key={`${i}-reviews-loader`} />)
        : posts.map(item => <PostItem key={item.id} data={item} />)}
    </SliderComponent>
  );
};

export default reviewsEnhancer(Reviews);
