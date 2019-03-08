import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PostItem from 'components/postItem';
import SliderComponent from 'components/slider';
import { CardLoader } from 'components/loaders';
import { ROUTES } from '../../constants';
import ContentSliderEnhancer from './ContentSliderEnhancer';

const ContentSlider = ({
  data, category, title, subTitle,
}) => {
  const posts = data && data.Posts && data.Posts;
  return (
    <SliderComponent
      title={<Link to={ROUTES.categories[category]}>{title}</Link>}
      subTitle={subTitle}
      cta={<Link to={ROUTES.categories[category]}>see more</Link>}
    >
      {data.loading
        ? [...Array(6)].map(i => <CardLoader key={`${i}-${category}-loader`} />)
        : posts.map(item => <PostItem key={item.id} data={item} />)
      }
    </SliderComponent>
  );
};

ContentSlider.propTypes = {
  data: PropTypes.object,
  category: PropTypes.string.isRequired,
  title: PropTypes.string,
  subTitle: PropTypes.string,
};
export default ContentSliderEnhancer(ContentSlider);
