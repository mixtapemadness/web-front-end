/* eslint react/jsx-one-expression-per-line: 0 */
import React from 'react'
import styled from 'styled-components'
import postItemMediaEnhancer from './postItemMediaEnhancer'

const Container = styled.div`
  width: 100%;
  height: 200px;
  width: 100%;
  height: 200px;
  background: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media only screen and (max-width: 1150px) {
    height: 300px;
  }
`

const PostItemMedia = ({ data }) => {
  const image = data.img ? data.img.featured_image : ''
  return <Container img={image} />
}

export default postItemMediaEnhancer(PostItemMedia)
