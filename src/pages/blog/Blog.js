/* eslint operator-linebreak: 0 */
/* eslint object-curly-newline: 0 */
/* eslint array-callback-return: 0 */
/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint prefer-const: 0 */
/* eslint implicit-arrow-linebreak: 0 */
/* eslint no-unused-vars: 0 */
/* eslint indent: 0 */
/* eslint no-plusplus: 0 */

import React from 'react';
import styled from 'styled-components';
import PostItem from 'components/postItem';
import Subscribe from 'components/subscribe';
import { CardLoader } from 'components/loaders';
import Spinner from 'components/Spinner';
import TopVideoPosts from './TopVideoPosts';
import BlogSlider from './BlogSlider';
import BlogFilter from './BlogFilter';

import blogsEnhancer from './blogEnhancer';
import Page from '../Page';

const PostsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
  // justify-content: space-between;
`;

const SubscribeContainer = styled.div`
  width: 100%;
  margin: 40px 0;
`;
const ShowMoreContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const ShowMore = styled.button`
  cursor: pointer;
  font-weight: 800;
  border: 2px solid black;
  padding: 10px 30px;
  text-decoration: uppercase;
  position: relative;
  margin-top: 50px;
  text-transform: uppercase;
  transition: 0.4s;
  pointer-events:${props => (props.isMoreData ? 'inherit' : 'none')}
  &:after {
    width: 0%;
    height: 2px;
    position: absolute;
    background: #656464;
    bottom: 0;
    left: 0;
    transition: 0.4s;
  }
  &:hover {
  background: #000;
  color:#fff;
    &:after {
      width: 100%;
    }
  }
`;

const PostItemT = (item, index) => {
  if (index === 5) {
    return (
      <React.Fragment key={item.id}>
        <PostItem data={item} />
        <TopVideoPosts />
        <SubscribeContainer>
          <Subscribe />
        </SubscribeContainer>
      </React.Fragment>
    );
  }
  return <PostItem key={item.id} data={item} />;
};
const PostItems = ({ items }) =>
  items.map((item, index) => PostItemT(item, index));

const Blog = ({ data, page, handleLoadMore, match, isMoreData }) => {
  const Data = data.Posts && data.Posts.length > 0 && data.Posts;
  let index = 0;
  return (
    <div>
      <BlogSlider />
      <Page>
        <BlogFilter match={match} />
        <PostsContainer>
          {data.loading &&
          [...Array(9)].map(i => (
            <CardLoader key={`${index++}-blog-loader`} />
          ))}
          {!data.loading && (Data && <PostItems items={Data} />)}
        </PostsContainer>
        <ShowMoreContainer>
          {!data.loading ? (
            <ShowMore isMoreData={isMoreData} onClick={handleLoadMore}>
              {`See More ${match.params.filter}`}
            </ShowMore>
          ) : (
            <Spinner />
          )}
        </ShowMoreContainer>
      </Page>
    </div>
  );
};

export default blogsEnhancer(Blog);
