import React from 'react';
import { Link } from 'react-router-dom';
import PostItem from 'components/postItem';
import SliderComponent from 'components/slider';
import { CardLoader } from 'components/loaders';
import postsEnhancer from './postsEnhancer';
import { ROUTES } from '../../../constants';

const Posts = ({ data }) => {
  const posts = data && data.Posts && data.Posts;
  return (
    <SliderComponent
      title={<Link to={ROUTES.categories.news}>News</Link>}
      subTitle="This week's hottest news"
      cta={<Link to={ROUTES.categories.news}>see more</Link>}
    >
      {data.loading
      && [...Array(8)].map(i => <CardLoader key={`${i}-reviews-loader`} />)}
      {posts && posts.map(item => <PostItem key={item.id} data={item} />)}
    </SliderComponent>
  );
};

export default postsEnhancer(Posts);
