/* eslint react/jsx-one-expression-per-line: 0 */
import React from 'react'
import styled from 'styled-components'
import postItemAuthorEnhancer from './postItemAuthorEnhancer'

const Container = styled.div`
  color: #ff9600;
  margin: 0 5px;
  cursor: pointer;
  font-weight: 800;
`

const PostItemCategory = ({ data: { user } }) => {
  const userName = user && user.name
  return <Container>{userName}</Container>
}

export default postItemAuthorEnhancer(PostItemCategory)
