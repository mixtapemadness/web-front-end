/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint operator-linebreak: 0 */
/* eslint no-unused-vars: 0 */
/* eslint indent: 0 */
/* eslint object-curly-newline: 0 */
/* eslint no-unneeded-ternary: 0 */
/* eslint implicit-arrow-linebreak: 0 */
/* eslint react/jsx-closing-tag-location: 0 */

import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import window from 'global/window';


import ReactDisqusComments from 'react-disqus-comments';
import YouMayLike from 'components/youMayLike';

import { Link } from 'react-router-dom';
import blogPageEnhancer from './blogPageEnhancer';
import BlogPageImg from './blogPageImg';
import PostContentHeading from './postContentHeading';
import Tag from './Tag';
import {
  DISQUS_SHORTNAME,
  ROUTES,
} from '../../constants';
import truncate, { decodeHtml } from '../../helpers/textHelpers';
import Shimmer from '../../components/loaders/shimmer/Shimmer';
import BlogPageMetaTags from './BlogPageMetaTags';

const BlogPageVideo = styled.div`
  width: 100%;
  height: auto
  background-image: url(${props => props.src});
  background-position: center center;
  background-size: cover;

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

class BlogPage extends Component {
  componentDidMount() {}

  render() {
    const {
      data,
      user,
      match,
      prevRoute,
      showSpinner,
    } = this.props;
    const userName = user && user.user && user.user.name && user.user.name;
    const userSlug = user && user.user && user.user.slug && user.user.slug;
    const postData = data && data.Post ? data.Post : null;
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
    const renderVideo = !!(data && !data.loading && isVideo && Video);
    const postUrl = `/${ROUTES.blog}${match.params.category}`;

    // if (showSpinner || !data || !Description || !categories || !postData) {
    //   return (
    //     <div className="container">
    //       <Shimmer mt={12} size={14} fullWidth />
    //       <Shimmer mt={12} size={12} fullWidth />
    //       <Shimmer size={400} mt={15} fullWidth />
    //       <Shimmer mt={12} size={14} fullWidth />
    //       <Shimmer mt={12} size={12} fullWidth />
    //       <Shimmer mt={12} size={14} fullWidth />
    //       <Shimmer mt={12} size={12} fullWidth />
    //       <Shimmer mt={12} size={14} fullWidth />
    //       <Shimmer mt={12} size={12} fullWidth />
    //     </div>
    //   );
    // }

    if (postData) {
      return (
        <Fragment>
          <BlogPageMetaTags description={Excerpt.replace(noHTML, '')} postTitle={postTitle} canonical={postUrl} type="article" />
          {/* <PostPagination {...this.props} /> */}

          <div className="post container">
            <header className="post__heading">
              <Link className="post__category-link" to={postUrl}>
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
            <div className="post__image">
              {renderVideo && (
                <BlogPageVideo
                  dangerouslySetInnerHTML={{ __html: Video && Video }}
                />
              )}
              <BlogPageImg renderVideo={renderVideo} id={postData.featured_media} />
            </div>
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
    }

    return (
      <div className="container">
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
}

export default blogPageEnhancer(BlogPage);
