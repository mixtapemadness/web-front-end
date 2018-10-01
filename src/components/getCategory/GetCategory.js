/* eslint react/jsx-one-expression-per-line: 0 */
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import getCategoryEnhancer from './getCategoryEnhancer'

const Container = styled(Link)`
  color: #ff9600;
  cursor: pointer;
  color: ${props => (props.color ? props.color : '#e68600')};
  font-weight: 800;
  text-align: center;
  width: 100%;
`

const getCategory = ({ data, color }) => {
  const name = data.category ? data.category.name : ''
  const slug = data.category ? data.category.slug : ''
  return (
    <Container color={color && color} to={`/blog/category/${slug}`}>
      <span>{name}</span>
    </Container>
  )
}

export default getCategoryEnhancer(getCategory)
