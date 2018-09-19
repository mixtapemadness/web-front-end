/* eslint react/jsx-one-expression-per-line: 0 */
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import continueReadEnhancer from './continueReadEnhancer'

const Container = styled(Link)`
  color: #ff9600;
  margin: 0 5px;
  cursor: pointer;
  font-weight: 800;
  font-size: 12px;
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
