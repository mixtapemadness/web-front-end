import { compose } from 'recompose';
import getTagsByPostId from 'graphql/getTagsByPostId.graphql';
import loadDataAsync from './loadDataAsync';

const withMedia = compose(
  loadDataAsync({
    query: getTagsByPostId,
    name: 'tags',
    config: {
      options: props => ({
        variables: {
          id: parseInt(props.data.id, 10),
        },
      }),
    },
  }),
);

export default withMedia;
