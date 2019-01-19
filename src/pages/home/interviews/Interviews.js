import React from 'react';
import { Link } from 'react-router-dom';
import PostItem from 'components/postItem';
import SliderComponent from 'components/slider';
import { CardLoader } from 'components/loaders';
import InterviewsEnhancer from './interviewsEnhancer';
import { ROUTES } from '../../../constants';

const Interviews = ({ data }) => {
  const posts = data && data.Posts && data.Posts;
  return (
    <SliderComponent
      title={<Link to={ROUTES.categories.interviews}>Interviews</Link>}
      cta={<Link to={ROUTES.categories.interviews}>see more</Link>}

    >
      {data.loading
      && [...Array(8)].map(i => <CardLoader key={`${i}-interview-loader`} />)}
      {!data.loading
      && posts
      && posts.map(item => <PostItem key={item.id} data={item} />)}
    </SliderComponent>
  );
};

export default InterviewsEnhancer(Interviews);
