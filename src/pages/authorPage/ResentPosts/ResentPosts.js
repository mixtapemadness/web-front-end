import React from 'react';
import styled from 'styled-components';
import PostItem from 'components/postItem';
import { CardLoader } from 'components/loaders';
import resentPostsEnhancer from './resentPostsEnhancer';

const PostsContainer = styled.div`
  width: 100%;
  margin: 40px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media only screen and (max-width: 1150px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ShowMoreContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ShowMore = styled.div`
  cursor: pointer;
  font-weight: 800;
  color: #111;
  position: relative;
  transition: 0.4s;
  &:after {
    content: '';
    width: 0%;
    height: 2px;
    position: absolute;
    background: #656464;
    bottom: 0;
    left: 0;
    transition: 0.4s;
  }
  &:hover {
    color: #656464;
    &:after {
      width: 100%;
    }
  }
`;
const PostItemT = (item) => <PostItem data={item} key={item.id} />;

const PostItems = ({ items }) => items.map(PostItemT);

const ResentPosts = ({
  data,
  handleLoadMore,
}) => {
  const posts = data && data.Posts;
  return (
    <div>
      <PostsContainer>
        {data.loading
          ? [...Array(9)].map(() => (
            <CardLoader key={`${Math.random()}-resent-posts`} />
          ))
          : posts && <PostItems items={posts} />}
      </PostsContainer>
      <ShowMoreContainer>
        <ShowMore onClick={handleLoadMore}>
          Show More
        </ShowMore>
      </ShowMoreContainer>
    </div>
  );
};

export default resentPostsEnhancer(ResentPosts);
