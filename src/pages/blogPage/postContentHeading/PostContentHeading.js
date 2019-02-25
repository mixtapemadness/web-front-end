/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint operator-linebreak: 0 */
/* eslint no-unused-vars: 0 */
/* eslint react/jsx-curly-brace-presence: 0 */
/* eslint arrow-body-style: 0 */
/* eslint indent: 0 */
/* eslint react/jsx-indent: 0 */
/* eslint react/jsx-indent-props: 0 */
/* eslint react/jsx-closing-tag-location: 0 */
/* eslint react/jsx-boolean-value: 0 */
/* eslint object-curly-newline: 0 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { dateStringify } from 'helpers/';
import blogPageImgEnhancer from './postContentHeadingEnhancer';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  text-align: center;
`;

const ContainerBottom = styled.div`
  width: 100%;
  text-align: center;
  padding-bottom: 10px;
  font-weight: bold;
  font-size: 14px;
`;
const AuthorName = styled(Link)`
  color: #ff9600;
  margin: 0 5px;
  cursor: pointer;
`;

const DateHeader = styled.span`
  border-right: 1px solid #ccc;
  padding-right: 10px;
`;

const PostContentHeading = ({ date, userName, location, userSlug }) => {
  const postDate = new Date(date);
  const formattedDate = moment(postDate).format('LL');
  return (
    <Container>
      <ContainerBottom>
        <DateHeader>{formattedDate}</DateHeader>{' '}
        <AuthorName to={`/author/${userSlug}`}>{userName}</AuthorName>
      </ContainerBottom>
    </Container>
  );
};

export default blogPageImgEnhancer(PostContentHeading);
