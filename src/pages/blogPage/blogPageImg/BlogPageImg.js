/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint operator-linebreak: 0 */
/* eslint no-unused-vars: 0 */

import React from 'react'
import styled from 'styled-components'
import blogPageImgEnhancer from './blogPageImgEnhancer'

const Container = styled.div`
  width: 100%;
  height: 60vh;
  background-image: url(${props => props.src});
  background-position: center center;
  background-size: cover;
`

const BlogPageImg = ({ data }) => {
  const fullImage = data && data.img && data.img.full
  return <Container src={fullImage} />
}

export default blogPageImgEnhancer(BlogPageImg)
