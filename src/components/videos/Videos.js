import React from 'react';
import { Link } from 'react-router-dom';
import Video from 'components/video';
import SliderComponent from 'components/slider';
import { CardLoader } from 'components/loaders';
import videosEnhancer from './videosEnhancer';
import { ROUTES } from '../../constants';

const Videos = ({ data }) => {
  const Posts = data && data.Posts && data.Posts;
  return (
    <SliderComponent
      title={<Link to={ROUTES.categories.videos}>Latest Videos</Link>}
      subTitle="Our selection of bangers"
      cta={<Link to={ROUTES.categories.videos}>see more</Link>}
    >
      {data.loading
      && [...Array(8)].map(i => <CardLoader key={`${i}-videos-loader`} />)}
      {!data.loading
      && Posts
      && Posts.map(item => <Video key={item.id} data={item} />)}
    </SliderComponent>
  );
};

export default videosEnhancer(Videos);
