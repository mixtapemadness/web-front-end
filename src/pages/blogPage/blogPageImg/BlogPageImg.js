/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint operator-linebreak: 0 */
/* eslint no-unused-vars: 0 */
import React from 'react'
import styled from 'styled-components'
import ReactImageFallback from 'react-image-fallback'
import { Helmet } from 'react-helmet'
import blogPageImgEnhancer from './blogPageImgEnhancer'
import placeholderImg from '../../../resources/assets/img/placeholderImg.jpg'

const Container = styled.div`
  width: 100%;
  height: ${props => (!props.renderVideo ? '60vh' : '0vh')};
  background-image: url(${props => props.src});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const BlogPageImg = ({ data, renderVideo }) => {
  const fullImage = data && data.img && data.img.full
  return (
    <Container renderVideo={renderVideo}>
      <Helmet>
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image" content={`${fullImage}`} />
        <meta property="og:image:url" content={`${fullImage}`} />
        <meta property="og:image:secure_url" content={`${fullImage}`} />
        <meta name="twitter:image" content={`${fullImage}`} />
        <meta name="twitter:image" content={`${fullImage}`} />
      </Helmet>
      {!renderVideo && (
        <ReactImageFallback
          src={fullImage && fullImage}
          fallbackImage={placeholderImg}
          initialImage={placeholderImg}
        />
      )}
    </Container>
  )
}

export default blogPageImgEnhancer(BlogPageImg)
