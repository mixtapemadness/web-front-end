/* eslint react/jsx-one-expression-per-line: 0 */
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import continueReadEnhancer from './continueReadEnhancer'

const Container = styled(Link)`
  width: auto;
  color: #ff9600;
  cursor: pointer;
  font-weight: 800;
  font-size: 12px;
  margin-top: 5px;
  &:after {
    width: 100%;
    height: 10px;
    background: #ff9600;
  }
`

const continueRead = ({ data, PostSlug }) => {
  const categorySlug = data.category ? data.category.slug : ''
  return (
    <Container to={`/blog/${categorySlug}/${PostSlug}`}>
      Continue Reading
    </Container>
  )
}

export default continueReadEnhancer(continueRead)
