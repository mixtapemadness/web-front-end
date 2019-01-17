/* eslint react/jsx-indent: 0 */
/* eslint indent: 0 */
/* eslint operator-linebreak: 0 */
/* eslint implicit-arrow-linebreak: 0 */
/* eslint no-unused-vars: 0 */

import React from 'react';
import styled from 'styled-components';
import Advertisement from 'components/advertisement';
import PostItem from 'components/postItem';
import { Link } from 'react-router-dom';
import { CardLoader } from 'components/loaders';
import shuffle from 'helpers/shuffle';
import youMayLikeEnhancer from './youMayLikeEnhancer';

const MayLikeContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: auto;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Div = styled.div`
  display: flex;
  max-width: 1200px;
  margin: auto;
  flex-wrap: wrap;
`;

const AdvertisementContainer = styled(Link)`
  height: 480px;
  width: 100%;
  margin: 5px;
`;

const AlsoLikeHeaderContainer = styled.div`
  width: 100%;
  margin: 40px auto;
  padding: 20px 0;
  border-top: 1px solid #c9c9c9;
  border-bottom: 1px solid #c9c9c9;
  text-align: center;
  font-weight: bold;

  font-size: 30px;
  color: #000000;
`;

const YouMayLike = ({
  width,
  data,
  match,
  postsFromTags,
  postsFromTagsLoading,
}) => {
  const Posts =
    data &&
    data.Posts &&
    data.Posts.filter(item => item.slug !== match.params.slug);
  const shuffledPosts = Posts && shuffle(Posts);
  const postsWithSameTag =
    postsFromTags &&
    postsFromTags.filter(item => item.slug !== match.params.slug);
  const shuffledPostsWithSameTag = postsWithSameTag && shuffle(postsWithSameTag);

  return (
    <MayLikeContainer>
      <AlsoLikeHeaderContainer>
        <span>You may also like</span>
      </AlsoLikeHeaderContainer>
      <Div>
        {shuffledPosts &&
          shuffledPosts.map(
            (item, index) =>
              index < 5 && <PostItem key={item.id} data={item} />,
          )}
        {postsFromTagsLoading && [...Array(9)].map(i => <CardLoader key={Math.random()} />)}
        {!postsFromTagsLoading &&
          shuffledPostsWithSameTag &&
          shuffledPostsWithSameTag.map(
            (item, index) =>
              index < 5 && <PostItem key={item.id} data={item} />,
          )}
      </Div>
    </MayLikeContainer>
  );
};

export default youMayLikeEnhancer(YouMayLike);
