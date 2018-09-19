/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint operator-linebreak: 0 */
/* eslint no-unused-vars: 0 */

import React from 'react'
import styled from 'styled-components'
import blogPageImgEnhancer from './blogPageImgEnhancer'

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.image});
  background-position: center center;
  background-size: cover;
`

const BlogPageImg = ({ data }) => {
  console.log('data', data)
  const fullImage = data && data.img
  console.log('fullImage', fullImage)
  return <Container>asdf</Container>
}

export default blogPageImgEnhancer(BlogPageImg)
