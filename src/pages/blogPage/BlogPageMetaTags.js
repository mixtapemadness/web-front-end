import React from 'react';
import Helmet from 'react-helmet';
import window from 'global';
import PropTypes from 'prop-types';
import { TWITTER_HANDLE, SEO } from '../../constants';

const BlogPageMetaTags = ({
  description = SEO.description, postTitle, keywords = '', type = 'website', url, image = '',
}) => (
  <Helmet>
    <title>{`Mixtape Madness ${
      postTitle ? `| ${postTitle} ` : SEO.title
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
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="og:image:type" content="image/png" />

    {image && <meta property="og:image" content={image} />}
    {image && <meta property="og:image:url" content={image} />}
    {image && <meta property="og:image:secure_url" content={image} />}
    {image && <meta name="twitter:image" content={image} />}
    {image && <meta name="twitter:image:src" content={image} />}
  </Helmet>
);

BlogPageMetaTags.propTypes = {
  description: PropTypes.string,
  postTitle: PropTypes.string,
  keywords: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string,
};

export default BlogPageMetaTags;
