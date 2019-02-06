import React from 'react';
import Helmet from 'react-helmet';
import window from 'global';
import { TWITTER_HANDLE, SEO } from '../../constants';

const BlogPageMetaTags = ({
  description = SEO.description, postTitle, keywords = [], type = 'website', url, image = '',
}) => (
  <Helmet>
    <title>{`Mixtape Madness ${
      postTitle ? `| ${postTitle} ` : ''
    }`}
    </title>
    <meta property="og:image" content={image} />
    <meta property="og:type" content={type} />
    <meta property="og:locale" content="en_UK" />
    <meta
      property="og:url"
      content={url || (window.location ? window.location.href : '')}
    />
    <meta
      property="og:title"
      content={`${postTitle}`}
    />
    <meta
      property="og:description"
      content={`${description}`}
    />
    <link rel="canonical" href={url || (window.location ? window.location.href : '')} />
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

  </Helmet>
);

export default BlogPageMetaTags;
