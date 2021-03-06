/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint operator-linebreak: 0 */
/* eslint no-unused-vars: 0 */
/* eslint react/jsx-curly-brace-presence: 0 */
/* eslint arrow-body-style: 0 */

import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import tagEnhancer from './tagEnhancer';

const TagItem = styled(Link)`
  border: solid 2px #cacaca;
  color: #cacaca;
  border-radius: 15px;
  padding: 5px 10px;
  margin: 5px;
`;

const Tag = ({ data }) => {
  const TagName = data && data.tag && data.tag.name;
  const Slug = data && data.tag && data.tag.slug;
  return (
    <Fragment>
      <Helmet>
        <meta property="article:tag" content={TagName} />
      </Helmet>
      <TagItem to={`/searchresult/all/${Slug}`}>{TagName}</TagItem>
    </Fragment>
  );
};

export default tagEnhancer(Tag);
