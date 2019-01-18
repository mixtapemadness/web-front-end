import { compose } from 'recompose';
import getPostsCount from 'graphql/getPostsCount.graphql';
import loadDataAsync from './loadDataAsync';

const withCount = compose(
  loadDataAsync({
    query: getPostsCount,
    name: 'count',
    config: {
      options: props => ({
        variables: {
          filter: { author: props.id },
        },
      }),
    },
  }),
);

export default withCount;
