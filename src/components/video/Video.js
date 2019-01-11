/* eslint no-unused-vars: 0 */
/* eslint object-curly-newline: 0 */
/* eslint indent: 0 */
/* eslint operator-linebreak: 0 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import videoEnhancer from './videoEnhancer';
import truncate from '../../helpers/textHelpers';

const Container = styled.div`
  margin: 7px;
  flex: 1;
  max-width: 386px;
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
  height: 100%;
  justify-content: space-between;
`;

const Name = styled(Link)`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 16px;
  display: block;
`;
const Text = styled.span`
  color: #666666;
  word-break: break-word;
  font-size: 14.5px;
  line-height: 1.45;
  letter-spacing: 0.9px;
  margin-right: 10px;
`;

const Views = styled.span`
  font-size: 12.5px;
  letter-spacing: 0.8px;
  color: #666666;
  margin-left: 7px;
`;

const TagsContainer = styled.span`
  display: flex;
`;

const Excerpt = styled.span`
  color: #666;
  margin-top: 20px;
  p {
    line-height: 26px;
  }
  overflow: hidden;
  font-size: 12px;
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
  const tagsData = tags && tags.tags && tags.tags;
  const Image =
    media && media.img && media.img.featured_image && media.img.featured_image;
  // const CategoriesData = category && category.category && category.category
  return (
    <Container>
      {categoriesData &&
        data && (
          <PhotoContainer
            picture={Image && Image}
            to={`/blog/${categoriesData[0].slug}/${data.slug}`}
          />
        )}
      <ContentContainer>
        <LeftSide>
          {data &&
            categoriesData && (
              <Name
                dangerouslySetInnerHTML={{ __html: data.title }}
                to={`/blog/${categoriesData[0].slug}/${data.slug}`}
              />
            )}
          {categoriesData && (
            <WatchMore
              to={{
                pathname: `/blog/${categoriesData[0].slug}/${data.slug}`,
              }}
            >
              Watch Video
            </WatchMore>
          )}
        </LeftSide>
      </ContentContainer>
    </Container>
  );
};

export default videoEnhancer(Video);
