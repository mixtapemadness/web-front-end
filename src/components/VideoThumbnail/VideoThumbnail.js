/* eslint no-unused-vars: 0 */
/* eslint object-curly-newline: 0 */
/* eslint indent: 0 */
/* eslint operator-linebreak: 0 */

import React from 'react';
import { Link } from 'react-router-dom';
import ReactImageFallback from 'react-image-fallback';
import moment from 'moment';

import videoEnhancer from './videoEnhancer';
import CardLoader from '../loaders/CardLoader';
import placeholderImg from '../../resources/assets/img/placeholderImg.jpg';
import IconButton from '../IconButton/IconButton';

const VideoThumbnail = ({ data, media, tags, category }) => {
  const categoriesData = category && category.category && category.category;

  if (!data || !categoriesData) {
    return <CardLoader />;
  }
  let postDate = new Date(data.date);
  postDate = postDate && moment(postDate).startOf('day').fromNow();
  const Image =
    media && media.img && media.img.medium && media.img.medium;
  const altText = media && media.img && (media.img.alt_text || data.title);
  const categorySlug = categoriesData && categoriesData.map(({ slug }) => slug)[0];
  const postUrl = `blog/${categorySlug}/${data.slug}`;
  return (
    <div className="video-thumbnail">
      <div className="video-thumbnail__image">
        <Link
          className="video-thumbnail__image-pic"
          to={postUrl}
        >
          <ReactImageFallback
            src={Image}
            fallbackImage={placeholderImg}
            initialImage={placeholderImg}
            alt={altText}
          />
          <i className="fa fa-play video-thumbnail__image-icon" />
        </Link>
      </div>
      <div className="video-thumbnail__content">
        <Link
          className="video-thumbnail__title"
          dangerouslySetInnerHTML={{ __html: data.title }}
          to={postUrl}
        />
        <div className="post-item__meta">
          <span className="post-item__date"><IconButton iconClassName="far fa-clock" /> {postDate}</span>
        </div>
      </div>
    </div>
  );
};

export default videoEnhancer(VideoThumbnail);
