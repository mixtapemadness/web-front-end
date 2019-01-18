/* eslint no-unused-vars: 0 */
/* eslint object-curly-newline: 0 */
/* eslint indent: 0 */
/* eslint operator-linebreak: 0 */

import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import videoEnhancer from './videoEnhancer';
import truncate from '../../helpers/textHelpers';
import { RESPONSIVE_BREAKPOINTS } from '../../constants';
import CardLoader from '../loaders/CardLoader';
import './_VideoThumbnail.scss';

const Container = styled.div`
  flex: 1;
  @media only screen and (min-width: ${RESPONSIVE_BREAKPOINTS.tablet}) {
    margin: 7px;
    max-width: 386px;
  }
`;

const PhotoContainer = styled(Link)`
  background: url(${props => props.picture});
`;

const ContentContainer = styled.div`
  background-color: #eeeeef;
  width: calc(100% - 30px);
  padding: 20px 15px;
  height: 140px;
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

const Excerpt = styled.span`
  color: #333333;
  font-size: 14px;
  line-height: 26px;
`;

const Video = ({ data, media, tags, category }) => {
  const categoriesData = category && category.category && category.category;
  const Image =
    media && media.img && media.img.featured_image && media.img.featured_image;
  if (!data || !categoriesData) {
    return <CardLoader />;
  }
  return (
    <Container>
      <div className="video-thumbnail__image">
        <PhotoContainer
          className="video-thumbnail__image-pic"
          picture={Image && Image}
          to={`/blog/${categoriesData[0].slug}/${data.slug}`}
        >
          <i className="fa fa-play video-thumbnail__image-icon" />
        </PhotoContainer>
      </div>
      <ContentContainer>
        <LeftSide>
          <Fragment>
            <Name
              dangerouslySetInnerHTML={{ __html: data.title }}
              to={`/blog/${categoriesData[0].slug}/${data.slug}`}
            />
            <Excerpt
              dangerouslySetInnerHTML={{ __html: truncate(data.excerpt, 90) }}
            />
          </Fragment>
        </LeftSide>
      </ContentContainer>
    </Container>
  );
};

export default videoEnhancer(Video);
