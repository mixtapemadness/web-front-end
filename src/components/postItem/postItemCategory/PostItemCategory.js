/* eslint react/jsx-one-expression-per-line: 0 */
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import postItemCategoryEnhancer from './postItemCategoryEnhancer'

const Container = styled(Link)`
  color: #ff9600;
  margin: 0 5px;
  cursor: pointer;
`

const PostItemCategory = ({ data }) => {
  const name = data.category ? data.category.name : ''
  const slug = data.category ? data.category.slug : ''
  return <Container to={`/blog/category/${slug}`}>{name}</Container>
}

export default postItemCategoryEnhancer(PostItemCategory)
