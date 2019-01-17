import { compose, withStateHandlers, lifecycle } from 'recompose';
import { loadDataAsync } from 'hocs';
import getAuthorById from 'graphql/getAuthorById.graphql';

export default compose(
  withStateHandlers(),
  lifecycle({
  }),
  loadDataAsync({
    query: getAuthorById,
    config: {
      options: props => ({
        variables: {
          id: parseInt(props.id, 10),
        },
      }),
    },
  }),
);
