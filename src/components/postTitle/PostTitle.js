/* eslint operator-linebreak: 0 */
/* eslint object-curly-newline: 0 */
/* eslint react/jsx-curly-brace-presence: 0 */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CLOSE_MEGAMENU } from 'constants';
import postTitleEnhancer from './postTitleEnhancer';

import eventEmitter from '../../eventEmitter';

const Container = styled(Link)`
  width: 100%;
  font-weight: 800;
  font-size: ${p => (p.fontSize ? p.fontSize : '26px')};
  line-height: 1.3;
  transition: 0.4s;
  color: ${p => (p.color ? p.color : '#111111')};
  &:hover {
    text-decoration: underline;
  }
`;

const PostTitle = ({ data, PostSlug, title, color, fontSize }) => {
  const categorySlug = data.category ? data.category.slug : '';
  return (
    <Container
      fontSize={fontSize}
      color={color}
      to={`/blog/${categorySlug}/${PostSlug}`}
      dangerouslySetInnerHTML={{ __html: title }}
      onClick={() => eventEmitter.emit(CLOSE_MEGAMENU)}
    />
  );
};

export default postTitleEnhancer(PostTitle);
