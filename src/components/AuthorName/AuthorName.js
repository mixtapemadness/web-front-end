/* eslint react/jsx-one-expression-per-line: 0 */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import authorNameEnhancer from './authorNameEnhancer';
import { ROUTES } from '../../constants';

const Container = styled(Link)`
  color: #ff9600;
  margin: 0 5px;
  cursor: pointer;
  font-weight: 800;
`;

const AuthorName = ({ data }) => {
  const userName = data && data.user && data.user.name;
  const userSlug = data && data.user && data.user.slug;
  return <Container to={`${ROUTES.author}/${userSlug}`}>{userName}</Container>;
};

export default authorNameEnhancer(AuthorName);
