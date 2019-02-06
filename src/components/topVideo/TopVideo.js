/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint react/jsx-first-prop-new-line: 0 */
/* eslint no-unused-vars: 0 */
/* eslint object-curly-newline: 0 */
/* eslint indent: 0 */
/* eslint operator-linebreak: 0 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import topVideoEnhancer from './topVideoEnhancer';

const TopVideoContainer = styled.div`
  flex: 0 0 115px;
  max-width: 450px;
  display: flex;
  font-size: 16px;
  color: #8c8b8b;
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
  min-height: 115px;
  box-sizing: content-box;
`;

const Video = styled(Link)`
  flex: 1;
  box-sizing: border-box;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  justify-content: center;
  display: flex;
  align-items: center;
`;

const VideoDesc = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
  padding: 5px 0;
`;

const VideoDescTop = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

const VideoDescTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const VideoDescSongName = styled(Link)`
  display: flex;
  color: #111;
  font-weight: 800;
  text-decoration: underline;
  text-decoration-color: transparent;
  transition: 0.4s;
  cursor: pointer;
  &:hover {
    text-decoration-color: #111111;
  }
`;

const VideoDescArtist = styled.div`
  display: flex;
`;

const Icon = styled.div`
  width: 15px;
  height: ${p => (p.play ? '19px' : '15px')};
  background-image: url(${porps => porps.src});
  background-size: cover;
  background-position: center center;
  margin-right: 5px;
  cursor: ${p => (p.play ? 'pointer' : 'default')};
`;

const TopVideo = ({ data, media, category, tags }) => {
  const Image = media && media.img && media.img.thumbnail && media.img.thumbnail;
  const CategoriesData = category && category.category && category.category;
  const tagsData = tags && tags.tags && tags.tags;

  return (
    <TopVideoContainer>
      <Video
        to={`/blog/${CategoriesData &&
          CategoriesData[0] &&
          CategoriesData[0].slug}/${data.slug}`}
        src={Image}
      />
      <VideoDesc>
        <VideoDescTop>
          <VideoDescTitle>
            {data &&
              CategoriesData &&
              CategoriesData.length && (
                <VideoDescSongName
                  to={`/blog/${CategoriesData[0].slug}/${data.slug}`}
                  dangerouslySetInnerHTML={{ __html: data.title }}
                />
              )}
          </VideoDescTitle>
          {tagsData &&
            tagsData.length && (
              <VideoDescArtist>{tagsData[0].name}</VideoDescArtist>
            )}
        </VideoDescTop>
      </VideoDesc>
    </TopVideoContainer>
  );
};

export default topVideoEnhancer(TopVideo);
