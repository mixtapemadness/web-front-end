import React from 'react';
import { Link } from 'react-router-dom';
import PostItem from 'components/postItem';
import SliderComponent from 'components/slider';
import { CardLoader } from 'components/loaders';
import whatsOnEnhancer from './whatsOnEnhancer';
import { ROUTES } from '../../../constants';


const WhatsOn = ({ data }) => {
  const Posts = data && data.Posts && data.Posts;

  return (
    <SliderComponent
      title={<Link to={ROUTES.categories.events}>Events</Link>}
      subTitle="Looking for something to do?"
      cta={<Link to={ROUTES.categories.events}>see more</Link>}
    >
      {data.loading ? [...Array(6)].map(i => (
        <CardLoader key={`${i}-events-loader`} />
      )) : Posts.map(item => <PostItem key={item.id} data={item} />)}
    </SliderComponent>
  );
};

export default whatsOnEnhancer(WhatsOn);
