/* eslint react/jsx-one-expression-per-line: 0 */
import React from 'react'
import styled from 'styled-components'
import searchMediaEnhancer from './searchEnhancer'

const Container = styled.div`
  width: 50%;
  height: 150px;
  background: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media only screen and (max-width: 1150px) {
    height: 300px;
  }
`

const searchMedia = ({ data }) => {
  const image = data.img ? data.img.featured_image : ''
  return <Container img={image} />
}

export default searchMediaEnhancer(searchMedia)
