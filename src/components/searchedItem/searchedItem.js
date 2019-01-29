/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint no-unused-vars: 0 */
/* eslint object-curly-newline: 0 */
/* eslint operator-linebreak: 0 */
/* eslint react/jsx-wrap-multilines: 0 */
/* eslint indent: 0 */

import React from 'react';

import styled from 'styled-components';
import window from 'global/window';

import { Link } from 'react-router-dom';
import ReactImageFallback from 'react-image-fallback';
import searchedItemEnhancer from './searchedItemEnhancer';

import placeholderImg from '../../resources/assets/img/placeholderImg.jpg';

import './_SearchedItem.scss';
import CardLoader from '../loaders/CardLoader';

const searchedItem = ({ toggleSearch, data, category, tags, media, color }) => {
  const categoriesData = category && category.category && category.category;
  const tagsData = tags && tags.tags && tags.tags;
  const Image = media && media.img && media.img.full && media.img.full;
  if (!Image && !categoriesData) {
    return <CardLoader />;
  }
  return (
    <div className="searched-item">
      <Link
        className="searched-item__image"
        to={{
          pathname:
            data &&
            categoriesData &&
            `/blog/${categoriesData[0].slug}/${data.slug}`,
          state: {
            prevPath: window.location ? window.location.pathname : '',
          },
        }}
        onClick={() => toggleSearch()}
      >
        <ReactImageFallback
          src={Image && Image}
          fallbackImage={placeholderImg}
          initialImage={placeholderImg}
        />
      </Link>

      <div className="searched-item__content">
        <span className="searched-item__category">{categoriesData && categoriesData[0].slug}</span>
        {categoriesData &&
          categoriesData.length &&
          data && (
            <h2 className="searched-item__title">
              <Link
                color={color}
                to={`/blog/${categoriesData[0].slug}/${data.slug}`}
                dangerouslySetInnerHTML={{ __html: data.title }}
                onClick={() => toggleSearch()}
              />
            </h2>
          )}
      </div>
    </div>
  );
};

export default searchedItemEnhancer(searchedItem);
