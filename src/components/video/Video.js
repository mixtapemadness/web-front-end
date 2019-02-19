/* eslint no-unused-vars: 0 */
/* eslint object-curly-newline: 0 */
/* eslint indent: 0 */
/* eslint operator-linebreak: 0 */

import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ReactImageFallback from 'react-image-fallback';
import moment from 'moment';

import videoEnhancer from './videoEnhancer';
import truncate from '../../helpers/textHelpers';
import { RESPONSIVE_BREAKPOINTS } from '../../constants';
import CardLoader from '../loaders/CardLoader';
import placeholderImg from '../../resources/assets/img/placeholderImg.jpg';
import IconButton from '../IconButton/IconButton';

const Container = styled.div`
  @media only screen and (min-width: ${RESPONSIVE_BREAKPOINTS.tablet}) {
    margin: 5px;
  }
`;

const PhotoContainer = styled(Link)`
   img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ContentContainer = styled.div`
  background-color: #eeeeef;
  width: calc(100% - 30px);
  padding: 20px 15px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: content-box;
`;


const LeftSide = styled.div`
  height: 100%;
`;

const Name = styled(Link)`
   width: 100%;
  font-weight: 800;
  margin-bottom: 10px;
  font-size: 16px;
  display: block;
`;

const Excerpt = styled.div`
  color: #333333;
  line-height: 26px;
`;

const Video = ({ data, media, tags, category }) => {
  const categoriesData = category && category.category && category.category;

  if (!data || !categoriesData) {
    return <CardLoader />;
  }
  let postDate = new Date(data.date);
  postDate = postDate && moment(postDate).startOf('day').fromNow();
  const Image =
    media && media.img && media.img.medium && media.img.medium;
  const categorySlug = categoriesData && categoriesData.map(({ slug }) => slug)[0];
  const postUrl = `blog/${categorySlug}/${data.slug}`;
  return (
    <Container>
      <div className="video-thumbnail__image">
        <PhotoContainer
          className="video-thumbnail__image-pic"
          to={postUrl}
        >
          <ReactImageFallback
            src={Image}
            fallbackImage={placeholderImg}
            initialImage={placeholderImg}
          />
          <i className="fa fa-play video-thumbnail__image-icon" />
        </PhotoContainer>
      </div>
      <ContentContainer>
        <LeftSide>
          <Fragment>
            <Name
              dangerouslySetInnerHTML={{ __html: data.title }}
              to={postUrl}
            />
          </Fragment>
          <div className="post-item__meta">
            <span className="post-item__date"><IconButton iconClassName="far fa-clock" /> {postDate}</span>
          </div>
        </LeftSide>
      </ContentContainer>
    </Container>
  );
};

export default videoEnhancer(Video);
