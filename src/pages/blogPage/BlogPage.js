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
import document from 'global/document';


import ReactDisqusComments from 'react-disqus-comments';
import YouMayLike from 'components/youMayLike';
import LazyLoad from 'react-lazyload';

import { Link } from 'react-router-dom';
import blogPageEnhancer from './blogPageEnhancer';
import BlogPageImg from './blogPageImg';
import PostContentHeading from './postContentHeading';
import Tag from './Tag';
import {
  DISQUS_SHORTNAME,
  ROUTES, TWITTER,
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
`;

const DisqusContainer = styled.div`
  margin: auto;
  width: 100%;
  margin-top: 40px;
`;

const pathname = window.location ? window.location.pathname : '';

class BlogPage extends Component {
  componentWillMount() {
    const script = document.createElement('script');
    script.src = '//platform-api.sharethis.com/js/sharethis.js#property=5c64bf387056550011c4a0bc&product=inline-share-buttons';
    script.async = true;
    document.body.appendChild(script);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { data, match } = this.props;
    if (data && data.Post) {
      const { title, excerpt, slug } = data.Post;
      const postLink = `${ROUTES.base}/blog/${match.params.category}/${slug}`;
      this.updateShareThis(decodeHtml(title), excerpt, postLink);
    }
  }

  updateShareThis = (title, description, url) => {
    if (window && window.__sharethis__) {
      window.__sharethis__.load('inline-share-buttons', {
        id: 'share-inline-buttons',
        enabled: true,
        show_mobile_buttons: true,
        networks: ['facebook', 'twitter', 'whatsapp', 'email', 'sharethis'],
        use_native_counts: true,
        alignment: 'center',
        min_count: 0,
        labels: 'counts',
        font_size: 18,
        show_total: true,
        size: 40,
        url,
        title,
        description,
        username: TWITTER,
      });
    }
  }

  render() {
    const {
      data,
      user,
      match,
    } = this.props;
    const userName = user && user.user && user.user.name && user.user.name;
    const userSlug = user && user.user && user.user.slug && user.user.slug;
    const postData = data && data.Post ? data.Post : null;
    const noHTML = /(<([^>]+)>)/gi;
    const categories =
      postData && postData.categories && postData.categories;
    const isVideoArr =
      categories && categories.filter(item => parseInt(item, 10) === 15); // TODO: find a better was to detect if there is a video embed.
    const isVideo = isVideoArr && isVideoArr.length > 0;
    const PostDate = postData && postData.date && postData.date;
    const tags = postData && postData.tags && postData.tags;
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

    if (postData) {
      const Excerpt = truncate(decodeHtml(postData.excerpt), 180);
      const excerptText = Excerpt ? Excerpt.replace(noHTML, '') : truncate(postData.excerpt, 180).replace(noHTML, '');
      const postUrl = `${ROUTES.categories[match.params.category]}`;
      const postLink = `${ROUTES.base}/blog/${match.params.category}/${postData.slug}`;
      const renderVideo = !!(data && !data.loading && isVideo && Video);
      const postTitle = decodeHtml(postData.title);
      return (
        <Fragment>
          <BlogPageMetaTags description={excerptText} postTitle={postTitle} url={postLink} type="article" />
          <div className="post container">
            <header className="post__heading">
              <Link className="post__category-link" to={postUrl}>
                {match.params.category}
              </Link>
              <h1 className="post__title" dangerouslySetInnerHTML={{ __html: postData.title }} />
              <h2 className="post__excerpt" dangerouslySetInnerHTML={{ __html: excerptText }} />
              <PostContentHeading date={PostDate} userName={userName} userSlug={userSlug} />
              <div className="sharethis-inline-share-buttons" id="share-inline-buttons" />
            </header>
            <div className="post__image">
              {renderVideo && <BlogPageVideo dangerouslySetInnerHTML={{ __html: Video && Video }} />}
              <BlogPageImg renderVideo={renderVideo} id={postData && postData.featured_media} />
            </div>
            <div className="post__content" dangerouslySetInnerHTML={{ __html: renderVideo ? Content : postData.content }} />

            <TagsContainer>
              {postData &&
                postData.tags &&
                postData.tags.map(id => <Tag key={id} id={id} />)}
            </TagsContainer>
            <DisqusContainer>
              <ReactDisqusComments shortname={DISQUS_SHORTNAME} identifier={pathname} url={window.location ? window.location.href : ''} />
            </DisqusContainer>
            <LazyLoad height={1200} once offset={50}>
              <YouMayLike tags={tags} id={postData.id} />
            </LazyLoad>
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
