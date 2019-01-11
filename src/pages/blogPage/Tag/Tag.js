/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint operator-linebreak: 0 */
/* eslint no-unused-vars: 0 */
/* eslint react/jsx-curly-brace-presence: 0 */
/* eslint arrow-body-style: 0 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import tagEnhancer from './tagEnhancer';

const TagItem = styled(Link)`
  border: solid 2px #cacaca;
  color: #cacaca;
  border-radius: 15px;
  padding: 5px 10px;
  margin: 15px 5px;
`;

const Tag = ({ data }) => {
  const TagName = data && data.tag && data.tag.name;
  const Slug = data && data.tag && data.tag.slug;
  return <TagItem to={`/searchresult/all/${Slug}`}>{TagName}</TagItem>;
};

export default tagEnhancer(Tag);
