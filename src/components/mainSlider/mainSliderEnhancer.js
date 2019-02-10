import { compose, branch } from 'recompose';
import { withRouter } from 'react-router-dom';
import getPosts from 'graphql/getPosts.graphql';
import {
  loadDataAsync, withMedia, withTags, withCategory,
} from 'hocs';

export default compose(
  withRouter,
  loadDataAsync({
    query: getPosts,
    config: {
      options: props => ({
        variables: {
          id: props.id,
          page: 1,
          perPage: 4,
        },
      }),
    },
  }),

  branch(({ data }) => !!(data), withMedia),
  branch(({ data }) => !!(data), withTags),
  branch(({ data }) => !!(data), withCategory),
);
