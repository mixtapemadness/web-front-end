import React from 'react';
import { Helmet } from 'react-helmet';
import window from 'global';
import { TWITTER_HANDLE } from '../../constants';

const BlogPageMetaTags = ({
  description, postTitle, keywords = [],
}) => (
  <Helmet>
    <title>{`Mixtape Madness ${
      postTitle ? `| ${postTitle} ` : ''
    }`}
    </title>
    <meta property="og:type" content="article" />

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
      content={`${description}`}
    />
    <link rel="canonical" href={window.location} />
    {keywords.map(word => <meta property="article:tag" key={word} content={word} />)}
    <meta name="twitter:title" content={postTitle} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content={TWITTER_HANDLE} />
    <meta name="twitter:creator" content={TWITTER_HANDLE} />
    <meta
      name="twitter:description"
      content={`${description}`}
    />
    <meta name="keywords" content={keywords} />
    <meta
      name="description"
      content={description}
    />
    <meta name="twitter:creator" content={`${TWITTER_HANDLE}`} />

  </Helmet>);

export default BlogPageMetaTags;
