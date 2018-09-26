/* eslint react/jsx-one-expression-per-line: 0 */
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { CLOSE_MEGAMENU } from 'constants'
import continueReadEnhancer from './continueReadEnhancer'
import eventEmitter from '../../eventEmitter'

const Container = styled(Link)`
  width: auto;
  color: ${p => (p.color ? p.color : '#ff9600')};
  cursor: pointer;
  font-weight: 800;
  font-size: 12px;
  transition: 0.4s;
  margin-top: 10px;
  &:hover {
    opacity: 0.8;
  }
  &:after {
    width: 100%;
    height: 10px;
    background: #ff9600;
  }
`

const continueRead = ({ data, PostSlug, color }) => {
  const categorySlug = data.category ? data.category.slug : ''
  return (
    <Container
      onClick={() => eventEmitter.emit(CLOSE_MEGAMENU)}
      color={color}
      to={`/blog/${categorySlug}/${PostSlug}`}
    >
      Continue Reading
    </Container>
  )
}

export default continueReadEnhancer(continueRead)
