/* eslint operator-linebreak: 0 */
/* eslint object-curly-newline: 0 */
/* eslint array-callback-return: 0 */
/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint prefer-const: 0 */
/* eslint implicit-arrow-linebreak: 0 */
/* eslint no-unused-vars: 0 */
/* eslint indent: 0 */
/* eslint no-plusplus: 0 */

import React, { Fragment } from 'react';
import styled from 'styled-components';

import PostItem from 'components/postItem';
import Subscribe from 'components/subscribe';
import { CardLoader } from 'components/loaders';
import Spinner from 'components/Spinner';
import Advertisement from 'components/advertisement';
import TopVideoPosts from './TopVideoPosts';

import BlogSlider from './BlogSlider';
import BlogFilter from './BlogFilter';

import blogsEnhancer from './blogEnhancer';
import Page from '../Page';
import Button from '../../components/Button/Button';
import BlogPageMetaTags from '../blogPage/BlogPageMetaTags';

const SubscribeContainer = styled.div`
  width: 100%;
  margin: 40px 0;
`;
const ShowMoreContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
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
    <Fragment>
      <BlogPageMetaTags postTitle={match.params.filter} description={match.params.filter} />
      <div className="category-page">
        <div className="category-page__header">
          <Advertisement
            slot="7632256105"
            responsive="true"
            style={{ display: 'inline-block', width: '728px', height: '90px' }}
          />
          <div className="container">
            <h2 className="category-page__title">{match.params.filter}</h2>
          </div>
        </div>
        {/* <BlogSlider /> */}
        <Page>
          {/* <BlogFilter match={match} /> */}
          <div className="category-page__posts">
            {data.loading &&
            [...Array(9)].map(i => (
              <CardLoader key={`${index++}-blog-loader`} />
            ))}
            {!data.loading && (Data && <PostItems items={Data} />)}
          </div>
          <ShowMoreContainer>
            {!data.loading ? (
              <Button onClick={handleLoadMore}>
                {`See More ${match.params.filter}`}
              </Button>
            ) : (
              <Spinner />
            )}
          </ShowMoreContainer>
        </Page>
      </div>
    </Fragment>
  );
};

export default blogsEnhancer(Blog);
