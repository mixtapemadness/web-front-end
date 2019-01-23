/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint indent: 0 */
/* eslint react/jsx-indent-props: 0 */
/* eslint react/jsx-indent: 0 */
/* eslint implicit-arrow-linebreak: 0 */
/* eslint operator-linebreak: 0 */
/* eslint no-unused-expressions: 0 */
/* eslint no-unused-vars: 0 */
/* eslint object-curly-newline: 0 */
/* eslint react/jsx-closing-tag-location: 0 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import moment from 'moment';
import window from 'global/window';
import ReactImageFallback from 'react-image-fallback';
import postItemEnhancer from './postItemEnhancer';
import placeholderImg from '../../resources/assets/img/placeholderImg.jpg';
import truncate from '../../helpers/textHelpers';
import { RESPONSIVE_BREAKPOINTS, ROUTES } from '../../constants';
import CardLoader from '../loaders/CardLoader';


const PostItemContainer = styled.div`
  height: 440px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin-bottom: 20px;
  @media only screen and (min-width: ${RESPONSIVE_BREAKPOINTS.tablet}) {
    width: 33.3%;
    padding: 0px 10px;
    flex: none;
  }
`;

const ContentContainer = styled.div`
  background-color: #f1f3f5;
  width: 100%;
  padding: 15px 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  height: 400px;
  @media only screen and (max-width: 1150px) {
    height: auto;
  }
`;

const Media = styled(Link)`
  width: 100%;
  height: 200px;
  transition: 0.8s;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PostTitle = styled(Link)`
  width: 100%;
  font-weight: 800;
  margin-bottom: 10px;
  font-size: 16px;
      display: block;
`;

const HoverLink = styled(Link)`
  color: #ff9600;
  margin: 0;
  cursor: pointer;
  font-size: 12px;
  &:hover{
  text-decoration: underline;
  }
`;
const ContentContainerBottom = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  color: #333;
`;

const DataContentContainer = styled.span`
  color: #333333;
  font-size: 14px;
  line-height: 26px;
`;

const CategoryContainer = styled.div`
  width: 100%;
  color: #000;
  margin-bottom: 10px;
`;

const Categories = ({ data }) => {
  let newData;
  data && data.length > 0
    ? (newData = data.map((item, index) => {
        if (index > 0) {
          return (
            <React.Fragment key={item.id}>
              , <HoverLink to={`/${ROUTES.blog}${item.slug}`}>
                {item.name}
              </HoverLink>
            </React.Fragment>
          );
        }
        return (
          <HoverLink key={item.id} to={`/${ROUTES.blog}${item.slug}`}>
            {item.name}
          </HoverLink>
        );
      }))
    : (newData = null);
  return newData;
};

const pathname = window.location ? window.location.pathname : '';

const PostItem = (props) => {
  const { media, category, user, data, postData } = props;
  const Image =
    media && media.img && media.img.featured_image && media.img.featured_image;
  const CategoriesData = category && category.category && category.category;
  const User = user && user.user && user.user;
  const postUrl = CategoriesData && `/blog/${CategoriesData[0].slug}/${data.slug}`;
  if (!data || !CategoriesData) {
    return <CardLoader />;
  }

  return (
    <PostItemContainer className="post-item">
      <Media
        to={{
          pathname: postUrl,
          state: {
            prevPath: pathname,
            authorId: User && User.id,
          },
        }}
      >
        <ReactImageFallback
          src={Image && Image}
          fallbackImage={placeholderImg}
          initialImage={placeholderImg}
        />
      </Media>
      <ContentContainer>
        <div>
          <CategoryContainer>
            <Categories data={CategoriesData} />
          </CategoryContainer>
          <PostTitle
            dangerouslySetInnerHTML={{ __html: truncate(data.title, 60) }}
            to={{
              pathname: postUrl,
              state: {
                prevPath: pathname,
                authorId: User && User.id,
              },
            }}
          />
          <DataContentContainer
            dangerouslySetInnerHTML={{ __html: truncate(data.excerpt, 90) }}
          />
        </div>
        <ContentContainerBottom>
          {User && (
            <HoverLink
              to={`/author/${User.slug}`}
            >{User.name}
            </HoverLink>
          )}
        </ContentContainerBottom>
      </ContentContainer>
    </PostItemContainer>
  );
};

export default postItemEnhancer(PostItem);
