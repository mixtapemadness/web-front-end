import { compose } from 'recompose';
import getCategorysByPostId from 'graphql/getCategorysByPostId.graphql';
import loadDataAsync from './loadDataAsync';

const withCategory = compose(
  loadDataAsync({
    query: getCategorysByPostId,
    name: 'category',
    config: {
      options: props => ({
        variables: {
          id: parseInt(props.data.id, 10),
        },
      }),
    },
  }),
);

export default withCategory;
