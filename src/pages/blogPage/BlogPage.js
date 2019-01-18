/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint operator-linebreak: 0 */
/* eslint no-unused-vars: 0 */
/* eslint indent: 0 */
/* eslint object-curly-newline: 0 */
/* eslint no-unneeded-ternary: 0 */
/* eslint implicit-arrow-linebreak: 0 */
/* eslint react/jsx-closing-tag-location: 0 */

import React from 'react';
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
  RESPONSIVE_BREAKPOINTS,
  TWITTER_HANDLE,
  ROUTES,
} from '../../constants';
import truncate from '../../helpers/textHelpers';
import Shimmer from '../../components/loaders/shimmer/Shimmer';
import IconButton from '../../components/IconButton';

const Container = styled.div`
  width: 100%;
  display: flex;
  max-width: 1200px;
  margin: auto;
  flex-direction: column;
`;

const Heading = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

const PagingArrows = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 850px) {
    justify-content: center;
    margin-bottom: 20px;
  }
`;

const ForwardArrow = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    color: #ffa019;
  }
`;

const BackArrow = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 20px;
  &:hover {
    color: #ffa019;
  }
`;

const ArrowText = styled.div`
  margin: 0 10px;
  font-size: 14px;
`;

const TitleContainer = styled.div`
  text-align: center;
  padding: 10px 20px;
`;

const BlogTitle = styled.h1`
  font-size: 26px;
  color: #010101;
  font-weight: 800;
  margin-bottom: 20px;
  @media only screen and (min-width: ${RESPONSIVE_BREAKPOINTS.tablet}) {
    font-size: 36px;
  }
`;

const BlogSubTitle = styled.h3`
  color: #666666;
  font-size: 14px;
  margin-bottom: 20px;
  font-weight: 500;
  line-height: 32px;
  @media only screen and (min-width: ${RESPONSIVE_BREAKPOINTS.tablet}) {
    font-size: 18px;
  }
`;

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

const BlogContent = styled.div`
  max-width: 100%;
  padding 0 20px;
  margin: 40px auto;
 iframe {
  max-width: 100%;
 }
  @media only screen and (min-width: ${RESPONSIVE_BREAKPOINTS.tablet}) {
    width: 900px;
    padding: 0;
    
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

const BlogArticleContent = styled.div`
  font-size: 18px;
  p {
    img {
      margin: 5px 0;
    }
  }
`;

const CategoryLink = styled(Link)`
  color: #ff9600;
  font-weight: bold;
  text-transform: capitalize;
`;

const pathname = window.location ? window.location.pathname : '';

const BlogPage = ({
  width,
  data,
  user,
  match,
  nextRoute,
  prevRoute,
  location,
  showSpinner,
}) => {
  const userName = user && user.user && user.user.name && user.user.name;
  const userSlug = user && user.user && user.user.slug && user.user.slug;
  const postData = data && data.Post ? data.Post : {};
  const Excerpt = data && data.Post && truncate(data.Post.excerpt, 180);
  const postTitle = postData && postData.title;
  const noHTML = /(<([^>]+)>)/gi;
  const Description =
    data &&
    data.Post &&
    data.Post.excerpt &&
    data.Post.excerpt.replace(noHTML, '');
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
      <React.Fragment>
        <Container>
          <TitleContainer>
            <Shimmer mt={12} size={14} fullWidth />
            <Shimmer mt={12} size={12} fullWidth />
            <Shimmer size={400} mt={15} fullWidth />
            <Shimmer mt={12} size={14} fullWidth />
            <Shimmer mt={12} size={12} fullWidth />
            <Shimmer mt={12} size={14} fullWidth />
            <Shimmer mt={12} size={12} fullWidth />
            <Shimmer mt={12} size={14} fullWidth />
            <Shimmer mt={12} size={12} fullWidth />
          </TitleContainer>
        </Container>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Container>
        <Helmet>
          <title>{`Mixtape Madness ${
            postTitle !== undefined ? `| ${postTitle.replace(noHTML, '')} ` : ''
          }`}</title>
          <meta
            property="og:url"
            content={window.location ? window.location.href : ''}
          />
          <meta
            property="og:title"
            content={`${postTitle && postTitle.replace(noHTML, '')}`}
          />
          <meta
            property="og:description"
            content={`${Description && Description}`}
          />
          <meta property="og:type" content="website" />
          <meta name="twitter:title" content={`${postTitle && postTitle}`} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content={`${TWITTER_HANDLE}`} />
          <meta
            name="twitter:description"
            content={`${Description && Description}`}
          />
          <meta name="twitter:creator" content={`${TWITTER_HANDLE}`} />
        </Helmet>
        <Heading>
          <PagingArrows>
            <BackArrow
              isdisabled={disablePrev.toString()}
              to={{
                pathname: `/blog/${match.params.category}/${prevRoute &&
                  prevRoute}`,
                state: {
                  prevPath:
                    location.state && location.state.prevPath
                      ? location.state.prevPath
                      : pathname,
                  authorId:
                    location.state && location.state.authorId
                      ? location.state.authorId
                      : pathname,
                },
              }}
            >
              <IconButton iconClassName="fas fa-chevron-left" />
              <ArrowText>Previous Post</ArrowText>
            </BackArrow>
            <ForwardArrow
              to={{
                pathname: `/blog/${match.params.category}/${nextRoute &&
                  nextRoute}`,
                state: {
                  prevPath:
                    location.state && location.state.prevPath
                      ? location.state.prevPath
                      : pathname,
                  authorId:
                    location.state &&
                    location.state.authorId &&
                    location.state.authorId,
                },
              }}
            >
              <ArrowText> Next Post</ArrowText>
              <IconButton iconClassName="fas fa-chevron-right" />
            </ForwardArrow>
          </PagingArrows>

          <TitleContainer>
            <CategoryLink to={ROUTES.categories[match.params.category]}>
              {match.params.category}
            </CategoryLink>
            <BlogTitle dangerouslySetInnerHTML={{ __html: postData.title }} />
            <BlogSubTitle
              dangerouslySetInnerHTML={{
                __html:
                  Excerpt &&
                  Excerpt.replace(noHTML, '').replace('[&#038;hellip', ' '),
              }}
            />
            <PostContentHeading
              date={PostDate}
              userName={userName}
              userSlug={userSlug}
            />
            <div className="addthis_inline_share_toolbox" />
          </TitleContainer>
        </Heading>
        <BlogImageWrapper>
          {renderVideo && (
            <BlogPageVideo
              dangerouslySetInnerHTML={{ __html: Video && Video }}
            />
          )}
          <BlogPageImg renderVideo={renderVideo} id={postData.featured_media} />
        </BlogImageWrapper>
        <BlogContent>
          <BlogArticleContent
            dangerouslySetInnerHTML={{ __html: postData.content }}
          />
        </BlogContent>
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
      </Container>
    </React.Fragment>
  );
};

export default blogPageEnhancer(BlogPage);
