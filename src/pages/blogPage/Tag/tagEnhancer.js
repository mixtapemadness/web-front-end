import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import getTagsById from 'graphql/getTagsById.graphql';
import { loadDataAsync } from 'hocs';

export default compose(
  loadDataAsync({
    query: getTagsById,
    config: {
      options: props => ({
        variables: {
          id: props.id,
        },
      }),
    },
  }),
  withRouter,
);
