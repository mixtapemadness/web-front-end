/* eslint react/jsx-one-expression-per-line: 0 */

import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 2px solid #f5f5f5;
`

const FilterItem = styled(Link)`
  flex: 1;
  text-align: center;
  color: 111;
  font-size: 26px;
  padding: 20px;
  box-sizing: border-box;
  font-weight: 800;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: #ff9600;
  }
  @media only screen and (max-width: 850px) {
    font-size: 20px;
  }
`

export default () => (
  <FilterContainer>
    {/* <FilterItem to="/news/news">Trending</FilterItem> */}
    <FilterItem to="/blog/category/videos">Videos</FilterItem>
    <FilterItem to="/blog/category/articles">Articles</FilterItem>
    <FilterItem to="/blog/category/events">Events</FilterItem>
    <FilterItem to="/blog/category/reviews">Reviews</FilterItem>
    <FilterItem to="/blog/category/news">News</FilterItem>
    <FilterItem to="/blog/category/interviews">Interviews</FilterItem>
  </FilterContainer>
)
