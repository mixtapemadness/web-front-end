import React from 'react';
import { Link } from 'react-router-dom';
import ReactImageFallback from 'react-image-fallback';
import moment from 'moment';
import { CardLoader } from 'components/loaders';
import mainSliderEnhancer from './sliderContentEnhancer';
import placeholderImg from '../../../resources/assets/img/placeholderImg.jpg';

const MainSlider = ({ media, category, data }) => {
  const Image = media && media.img && media.img.large && media.img.large;
  const CategoriesData = category && category.category;
  const altText = media && media.img && (media.img.alt_text || data.title);

  if (data && CategoriesData) {
    let postDate = new Date(data.date);
    postDate = postDate && moment(postDate).fromNow();
    const postLink = CategoriesData && `blog/${CategoriesData[0].slug}/${data.slug}`;
    return (
      <Link to={postLink}>
        <div className="slider-content">
          <ReactImageFallback
            className="slider-content__img"
            src={Image && Image}
            fallbackImage={placeholderImg}
            initialImage={placeholderImg}
            alt={altText}
          />
          <div className="slider-content__overlay" />
          <div className="slider-content__text">
            <div className="slider-content__category">
              {CategoriesData[0].name}
            </div>
            <span className="slider-content__title" dangerouslySetInnerHTML={{ __html: data.title }} />
            <span className="slider-content__date"><i className="far fa-clock" /> {postDate}</span>
          </div>
        </div>
      </Link>
    );
  }

  return <CardLoader />;
};

export default mainSliderEnhancer(MainSlider);
