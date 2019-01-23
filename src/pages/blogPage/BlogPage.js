/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint operator-linebreak: 0 */
/* eslint no-unused-vars: 0 */
/* eslint indent: 0 */
/* eslint object-curly-newline: 0 */
/* eslint no-unneeded-ternary: 0 */
/* eslint implicit-arrow-linebreak: 0 */
/* eslint react/jsx-closing-tag-location: 0 */

import React, { Fragment } from 'react';
import styled from 'styled-components';
import ReactDisqusComments from 'react-disqus-comments';
import YouMayLike from 'components/youMayLike';

import { Link } from 'react-router-dom';
import window from 'global/window';
import { Helmet } from 'react-helmet';
import blogPageEnhancer from './blogPageEnhancer';
import BlogPageImg from './blogPageImg';
import PostContentHeading from './postContentHeading';
import Tag from './Tag';
import {
  DISQUS_SHORTNAME,
  TWITTER_HANDLE,
  ROUTES,
} from '../../constants';
import truncate, { decodeHtml } from '../../helpers/textHelpers';
import Shimmer from '../../components/loaders/shimmer/Shimmer';
import PostPagination from '../../components/PostPagination';
import './_BlogPage.scss';

const BlogPageVideo = styled.div`
  width: 100%;
  height: auto
  background-image: url(${props => props.src});
  background-position: center center;
  background-size: cover;

`;
const BlogImageWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 25px;
  height: 0;
  embed,
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;
  justify-content: center;
  margin: auto;
  @media only screen and (max-width: 450px) {
    margin-top: 20px;
  }
`;

const DisqusContainer = styled.div`
  margin: auto;
  width: 100%;
  margin-top: 40px;
`;

const pathname = window.location ? window.location.pathname : '';

const BlogPage = (props) => {
  const {
    width,
    data,
    user,
    match,
    nextRoute,
    prevRoute,
    location,
    showSpinner,
  } = props;
  const userName = user && user.user && user.user.name && user.user.name;
  const userSlug = user && user.user && user.user.slug && user.user.slug;
  const postData = data && data.Post ? data.Post : {};
  const Excerpt = data && data.Post && truncate(decodeHtml(data.Post.excerpt), 180);
  const postTitle = postData && postData.title && decodeHtml(postData.title);
  const noHTML = /(<([^>]+)>)/gi;
  const Description =
    data &&
    data.Post &&
    data.Post.excerpt &&
    decodeHtml(data.Post.excerpt);
  const categories =
    data && data.Post && data.Post.categories && data.Post.categories;
  const isVideoArr =
    categories && categories.filter(item => parseInt(item, 10) === 15);
  const isVideo = isVideoArr && isVideoArr.length > 0;
  const PostDate = data && data.Post && data.Post.date && data.Post.date;
  const tags = data && data.Post && data.Post.tags && data.Post.tags;
  const Content =
    isVideo &&
    postData &&
    postData.content &&
    postData.content.replace(
      /(?:<iframe[^>]*)(?:(?:\/>)|(?:>.*?<\/iframe>))/,
      '',
    );
  const Video =
    isVideo &&
    postData &&
    postData.content &&
    postData.content.match(
      /(?:<iframe[^>]*)(?:(?:\/>)|(?:>.*?<\/iframe>))/,
      '',
    ) &&
    isVideo &&
    postData &&
    postData.content &&
    postData.content
      .match(/(?:<iframe[^>]*)(?:(?:\/>)|(?:>.*?<\/iframe>))/, '')
      .toString()
      .replace('iframe', 'embed');
  const disablePrev = !prevRoute;
  const renderVideo = data && !data.loading && isVideo && Video ? true : false;
  if (showSpinner || !data || !Description || !categories || !postData) {
    return (
      <div>
        <Shimmer mt={12} size={14} fullWidth />
        <Shimmer mt={12} size={12} fullWidth />
        <Shimmer size={400} mt={15} fullWidth />
        <Shimmer mt={12} size={14} fullWidth />
        <Shimmer mt={12} size={12} fullWidth />
        <Shimmer mt={12} size={14} fullWidth />
        <Shimmer mt={12} size={12} fullWidth />
        <Shimmer mt={12} size={14} fullWidth />
        <Shimmer mt={12} size={12} fullWidth />
      </div>
    );
  }

  return (
    <Fragment>
      <PostPagination {...props} />
      <div className="post container">
        <Helmet>
          <title>{`Mixtape Madness ${
            postTitle !== undefined ? `| ${postTitle} ` : ''
            }`}</title>
          <meta
            property="og:url"
            content={window.location ? window.location.href : ''}
          />
          <meta
            property="og:title"
            content={`${postTitle}`}
          />
          <meta
            property="og:description"
            content={`${Description && Description}`}
          />
          <meta property="og:type" content="website" />
          <meta name="twitter:title" content={`${postTitle}`} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content={`${TWITTER_HANDLE}`} />
          <meta
            name="twitter:description"
            content={`${Description && Description}`}
          />
          <meta name="twitter:creator" content={`${TWITTER_HANDLE}`} />
        </Helmet>
        <header className="post__heading">
          <Link className="post__category-link" to={`${ROUTES.blog}/${match.params.category}`}>
            {match.params.category}
          </Link>
          <h1
            className="post__title"
            dangerouslySetInnerHTML={{ __html: postData.title }}
          />
          <h2
            className="post__excerpt"
            dangerouslySetInnerHTML={{
              __html:
                Excerpt &&
                Excerpt.replace(noHTML, ''),
            }}
          />
          <PostContentHeading
            date={PostDate}
            userName={userName}
            userSlug={userSlug}
          />
          <div className="addthis_inline_share_toolbox" />
        </header>
        <BlogImageWrapper>
          {renderVideo && (
            <BlogPageVideo
              dangerouslySetInnerHTML={{ __html: Video && Video }}
            />
          )}
          <BlogPageImg renderVideo={renderVideo} id={postData.featured_media} />
        </BlogImageWrapper>
        <div
          className="post__content"
          dangerouslySetInnerHTML={{ __html: postData.content }}
        />
        <TagsContainer>
          {postData.tags && postData.tags.map(id => <Tag key={id} id={id} />)}
        </TagsContainer>
        <DisqusContainer>
          <ReactDisqusComments
            shortname={DISQUS_SHORTNAME}
            identifier={pathname}
            url={window.location ? window.location.href : ''}
          />
        </DisqusContainer>
        <YouMayLike tags={tags} />
      </div>
    </Fragment>
  );
};

export default blogPageEnhancer(BlogPage);
