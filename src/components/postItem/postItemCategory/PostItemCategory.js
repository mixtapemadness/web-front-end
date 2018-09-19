/* eslint react/jsx-one-expression-per-line: 0 */
import React from 'react'
import styled from 'styled-components'
import postItemCategoryEnhancer from './postItemCategoryEnhancer'

const Container = styled.div`
  color: #ff9600;
  margin: 0 5px;
  cursor: pointer;
`

const PostItemCategory = ({ data }) => {
  const name = data.category ? data.category.name : ''
  return <Container>{name}</Container>
}

export default postItemCategoryEnhancer(PostItemCategory)
