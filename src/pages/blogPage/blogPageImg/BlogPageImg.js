/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint operator-linebreak: 0 */
/* eslint no-unused-vars: 0 */
import React from 'react';
import styled from 'styled-components';
import ReactImageFallback from 'react-image-fallback';
import { Helmet } from 'react-helmet';
import blogPageImgEnhancer from './blogPageImgEnhancer';
import placeholderImg from '../../../resources/assets/img/placeholderImg.jpg';

const Container = styled.div`
  width: 100%;
  height: auto;
  background-image: url(${props => props.src});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const BlogPageImg = ({ data, renderVideo }) => {
  const fullImage = data && data.img && data.img.large;
  const thumbnail = data && data.img && data.img.medium;
  return (
    <Container renderVideo={renderVideo}>
      <Helmet>
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image" content={thumbnail} />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="200" />
        <meta property="og:image:url" content={thumbnail} />
        <meta property="og:image:secure_url" content={thumbnail} />
        <meta name="twitter:image" content={thumbnail} />
        <meta name="twitter:image:src" content={thumbnail} />
      </Helmet>
      {!renderVideo && (
        <ReactImageFallback
          src={fullImage && fullImage}
          fallbackImage={placeholderImg}
          initialImage={placeholderImg}
        />
      )}
    </Container>
  );
};

export default blogPageImgEnhancer(BlogPageImg);
