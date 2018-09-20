/* eslint react/jsx-one-expression-per-line: 0 */
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import authorNameEnhancer from './authorNameEnhancer'

const Container = styled(Link)`
  color: #ff9600;
  margin: 0 5px;
  cursor: pointer;
  font-weight: 800;
`

const AuthorName = ({ data: { user } }) => {
  const userName = user && user.name
  const userSlug = user && user.slug

  return <Container to={`/author/${userSlug}`}>{userName}</Container>
}

export default authorNameEnhancer(AuthorName)
