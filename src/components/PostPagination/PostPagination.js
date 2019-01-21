import React from 'react';
import { Link } from 'react-router-dom';
import window from 'global';
import IconButton from '../IconButton';

const PostPagination = ({
  match,
  nextRoute,
  prevRoute,
  location,
}) => {
  const disablePrev = !prevRoute;
  const pathname = window.location;

  return (
    <div className="post-pagination">
      <div className="container">
        <Link
          className="post-pagination__nav"
          isdisabled={disablePrev.toString()}
          to={{
            pathname: `/blog/${match.params.category}/${prevRoute && prevRoute}`,
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
          <span>Previous Post</span>
        </Link>
        <Link
          className="post-pagination__nav"
          to={{
            pathname: `/blog/${match.params.category}/${nextRoute && nextRoute}`,
            state: {
              prevPath:
                location.state && location.state.prevPath
                  ? location.state.prevPath
                  : pathname,
              authorId:
                location.state && location.state.authorId && location.state.authorId,
            },
          }}
        >
          <span> Next Post</span>
          <IconButton iconClassName="fas fa-chevron-right" />
        </Link>
      </div>
    </div>
  );
};

export default PostPagination;
