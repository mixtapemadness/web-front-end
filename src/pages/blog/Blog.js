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
import window from 'global';
import TopVideoPosts from './TopVideoPosts';

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
  if (index === 8) {
    return (
      <React.Fragment key={item.id}>
        <PostItem data={item} />
        <SubscribeContainer>
          <Subscribe />
        </SubscribeContainer>
        <TopVideoPosts />
      </React.Fragment>
    );
  }
  if (item && item.id === 'adunit') {
    return (
      <div key={Math.random()} className="category-page__ad-unit post-item">
        <Advertisement border>
          <div
            id="div-gpt-ad-1550497747165-0"
            style={{ height: '250px', width: '300px' }}
          />
          <script dangerouslySetInnerHTML={{ __html: 'googletag.cmd.push(function() { googletag.display(\'div-gpt-ad-1550497747165-0\'); });' }} />
        </Advertisement>
      </div>
    );
  }
  return <PostItem key={item.id} data={item} />;
};
const PostItems = ({ items }) =>
  items.map((item, index) => PostItemT(item, index));

const Blog = ({ data, page, handleLoadMore, match, isMoreData }) => {
  const Data = data.Posts && data.Posts.length > 0 && data.Posts;
    let dataWithAds = Data && [...Data];

  if (dataWithAds) {
    let adUnitIndexes = [];
    adUnitIndexes.push(2);
    adUnitIndexes.forEach((count, index) => {
      dataWithAds.splice(count, 0, { id: 'adunit' });
    });
  }

  let index = 0;
  return (
    <Fragment>
      <BlogPageMetaTags postTitle={match.params.filter} description={match.params.filter} />
      <div className="category-page">
        <div className="category-page__header">
          <div className="container">
            <h2 className="category-page__title">{match.params.filter}</h2>
          </div>
        </div>
        {/* <BlogSlider /> */}
        <Page>
          {/* <BlogFilter match={match} /> */}
          <div className="category-page__posts">
            {data.loading ?
            [...Array(9)].map(i => (
              <CardLoader key={`${index++}-blog-loader`} />
            )) : (dataWithAds && <PostItems items={dataWithAds} />)}
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
