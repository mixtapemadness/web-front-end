/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint no-unused-vars: 0 */
/* eslint object-curly-newline: 0 */
/* eslint operator-linebreak: 0 */
/* eslint react/jsx-wrap-multilines: 0 */
/* eslint indent: 0 */

import React from 'react';

import styled from 'styled-components';
import window from 'global/window';
import ClockIcon from 'resources/assets/svgComponents/Clock';

import { Link } from 'react-router-dom';
import dateStringify from 'helpers/dateStringify';
import ReactImageFallback from 'react-image-fallback';
import searchedItemEnhancer from './searchedItemEnhancer';

import placeholderImg from '../../resources/assets/img/placeholderImg.jpg';

const Item = styled.div`
  width: 550px;
  padding-bottom: 20px;
  margin-top: 20px;
  border-bottom: 1px solid #ccc;
  display: flex;
  @media only screen and (max-width: 680px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  @media only screen and (max-width: 529px) {
    width: 100%;
  }
`;

const SearchMedia = styled(Link)`
  width: 50%;
  height: 150px;
  background: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media only screen and (max-width: 529px) {
    width: 100%;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ContentContainer = styled.div`
  width: 50%;
  margin-left: 10px;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #666666;
  @media only screen and (max-width: 529px) {
    width: 100%;
  }
`;

const ContentContainerBottom = styled.div``;

const Title = styled(Link)`
  font-weight: 600;
  font-size: 19.5px;
  letter-spacing: 1.2px;
  line-height: 1.08;
  margin-bottom: 16px;
  text-decoration: underline;
  text-decoration-color: transparent;
  transition: 0.4s;
  cursor: pointer;
  color: ${p => (p.color ? p.color : '')};
  &:hover {
    text-decoration-color: ${p => (p.color ? p.color : '#111111')};
  }
  @media only screen and (max-width: 680px) {
    margin-top: 10px;
  }
`;

const TimeContainer = styled.div`
  display: flex;
  font-size: 13px;
  @media only screen and (max-width: 680px) {
    display: flex;
    justify-content: center;
  }
`;

const Time = styled.span`
  margin-left: 10px;
  color: ${p => (p.color ? p.color : '#666666')};
`;

const ContinueRead = styled(Link)`
  width: auto;
  color: ${p => (p.color ? p.color : '#ff9600')};
  cursor: pointer;
  font-weight: 800;
  font-size: 12px;
  transition: 0.4s;
  margin-top: 10px;
  color: ${p => (p.color ? p.color : '')};
  &:hover {
    opacity: 0.8;
  }
  &:after {
    width: 100%;
    height: 10px;
    background: #ff9600;
  }
`;

const searchedItem = ({ toggleSearch, data, category, tags, media, color }) => {
  const categoriesData = category && category.category && category.category;
  const tagsData = tags && tags.tags && tags.tags;
  const Image = media && media.img && media.img.full && media.img.full;

  return (
    <Item>
      <SearchMedia
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
      </SearchMedia>

      <ContentContainer>
        {categoriesData &&
          categoriesData.length &&
          data && (
            <Title
              color={color}
              to={`/blog/${categoriesData[0].slug}/${data.slug}`}
              dangerouslySetInnerHTML={{ __html: data.title }}
              onClick={() => toggleSearch()}
            />
          )}
        <ContentContainerBottom>
          <TimeContainer>
            <ClockIcon height="20px" color={color} />
            <Time color={color}>{dateStringify(data.date, false, true)}</Time>
          </TimeContainer>
          {categoriesData &&
            categoriesData.length &&
            data && (
              <ContinueRead
                color={color}
                to={`/blog/${categoriesData[0].slug}/${data.slug}`}
                onClick={() => toggleSearch()}
              >
                Continue Reading
              </ContinueRead>
            )}
        </ContentContainerBottom>
      </ContentContainer>
    </Item>
  );
};

export default searchedItemEnhancer(searchedItem);
