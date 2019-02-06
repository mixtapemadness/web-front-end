import React from 'react';
import { Link } from 'react-router-dom';
import featuredSliderContentEnhancer from './featuredSliderContentEnhancer';
import CardLoader from '../loaders/CardLoader';

const FeaturedSliderContent = ({
  media, category, data,
}) => {
  const Image = media && media.img && media.img.medium && media.img.medium;
  const CategoriesData = category && category.category;
  const postLink = CategoriesData && `blog/${CategoriesData[0].slug}/${data.slug}`;
  if (!Image && !CategoriesData) {
    return <CardLoader />;
  }
  return (
    <div
      className="featured-slider__content"
      style={{ backgroundImage: `url('${Image}')` }}
    >
      <div className="center">
        <h1 dangerouslySetInnerHTML={{ __html: data.title }} />
        <Link to={postLink} />
      </div>
    </div>
  );
};

export default featuredSliderContentEnhancer(FeaturedSliderContent);
