import { compose } from 'recompose';

import { loadDataAsync } from 'hocs';
import getCategoryById from 'graphql/getCategoryById.graphql';

export default compose(
  loadDataAsync({
    query: getCategoryById,
    config: {
      options: props => ({
        variables: {
          id: parseInt(props.categoryId[0], 10),
        },
      }),
    },
  }),
);
