/* eslint react/jsx-one-expression-per-line: 0 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 2px solid #f5f5f5;
  flex-wrap: wrap;
`;

const FilterItem = styled(Link)`
  flex: 1;
  text-align: center;
  color: ${p => (p.active === 'true' ? '#ff9600' : '#111')};
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
`;

export default ({ match }) => (
  <FilterContainer>
    {/* <FilterItem to="/news/news">Trending</FilterItem> */}
    <FilterItem
      to="/blog/category/videos"
      active={match.url === '/blog/category/videos' ? 'true' : 'false'}
    >
      Videos
    </FilterItem>
    <FilterItem
      to="/blog/category/articles"
      active={match.url === '/blog/category/articles' ? 'true' : 'false'}
    >
      Articles
    </FilterItem>
    <FilterItem
      to="/blog/category/events"
      active={match.url === '/blog/category/events' ? 'true' : 'false'}
    >
      Events
    </FilterItem>
    <FilterItem
      to="/blog/category/reviews"
      active={match.url === '/blog/category/reviews' ? 'true' : 'false'}
    >
      Reviews
    </FilterItem>
    <FilterItem
      to="/blog/category/news"
      active={match.url === '/blog/category/news' ? 'true' : 'false'}
    >
      News
    </FilterItem>
    <FilterItem
      to="/blog/category/interviews"
      active={match.url === '/blog/category/interviews' ? 'true' : 'false'}
    >
      Interviews
    </FilterItem>
  </FilterContainer>
);
