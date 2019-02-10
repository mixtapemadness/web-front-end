/* eslint react/jsx-indent: 0 */
/* eslint indent: 0 */
/* eslint operator-linebreak: 0 */
/* eslint implicit-arrow-linebreak: 0 */
/* eslint no-unused-vars: 0 */

import React from 'react';
import styled from 'styled-components';
import PostItem from 'components/postItem';
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


function removeDuplicates(myArr, prop) {
  return myArr.filter((obj, pos, arr) => arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos);
}

const YouMayLike = ({
  width,
  data,
  match,
  id,
  postsFromTags,
}) => {
  let allPosts = [];
  const posts = data && data.Posts;
  const postWithTags = postsFromTags && postsFromTags;
  if (posts && postWithTags) {
    allPosts = shuffle([...postWithTags, ...posts]);
  }
  const uniquePosts = removeDuplicates(allPosts, 'id').filter(post => post.id !== id);
  return (
    <MayLikeContainer>
      <AlsoLikeHeaderContainer>
        <span>You may also like</span>
      </AlsoLikeHeaderContainer>
      <Div>
        {uniquePosts.length && uniquePosts ?
          uniquePosts.map((item) => <PostItem key={item.id} data={item} />) :
          [...Array(6)].map(i => <CardLoader key={`${Math.random()}-ymal-posts`} />)
        }
      </Div>
    </MayLikeContainer>
  );
};

export default youMayLikeEnhancer(YouMayLike);
