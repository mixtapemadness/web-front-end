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

const Container = styled.div`
  flex: 1;
  @media only screen and (min-width: ${RESPONSIVE_BREAKPOINTS.tablet}) {
    margin: 7px;
    max-width: 386px;
  }
`;

const PhotoContainer = styled(Link)`
  display: block;
  width: 100%;
  height: 200px;
  background: url(${props => props.picture});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  cursor: pointer;
  background-size: cover;

  @media only screen and (max-width: 1150px) {
    height: 300px;
    background-size: cover;
  }
`;

const ContentContainer = styled.div`
  background-color: #eeeeef;
  width: calc(100% - 30px);
  padding: 20px 15px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: content-box;
`;

const Icon = styled.img`
  display: block;
  position: absolute;
  cursor: pointer;
  top: 50%;
  left: 50%;
  height: 30px;
`;

const Dots = styled.img`
  display: block;
  position: absolute;
  cursor: pointer;
  bottom: 10px;
  right: 10px;
  height: 22px;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const Name = styled(Link)`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 16px;
  display: block;
`;

const Excerpt = styled.span`
    color: #666;
  overflow: hidden;
  font-size: 12px;

  p {
    line-height: 24px;
  }
  position:relative &:before {
    content: '...';
    position: absolute;
  }
`;
const WatchMore = styled(Link)`
  color: #ff9600;
  cursor: pointer;
  font-weight: 800;
  font-size: 12px;
  margin-top: 10px;
  position: relative;
  display: block;
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
      <PhotoContainer
        picture={Image && Image}
        to={`/blog/${categoriesData[0].slug}/${data.slug}`}
      />
      <ContentContainer>
        <LeftSide>
          <Fragment>
            <Name
              dangerouslySetInnerHTML={{ __html: data.title }}
              to={`/blog/${categoriesData[0].slug}/${data.slug}`}
            />
            <Excerpt
              dangerouslySetInnerHTML={{ __html: truncate(data.excerpt, 112) }}
            />
            <WatchMore to={`/blog/${categoriesData[0].slug}/${data.slug}`}>
              Watch Video
            </WatchMore>
          </Fragment>
        </LeftSide>
      </ContentContainer>
    </Container>
  );
};

export default videoEnhancer(Video);
