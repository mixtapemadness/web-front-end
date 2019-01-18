/* eslint no-unused-vars: 0 */
/* eslint indent: 0 */

import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import getPosts from 'graphql/getPosts.graphql';
import { loadDataAsync } from 'hocs';

export default compose(
  withRouter,
  loadDataAsync({
    query: getPosts,
    config: {
      options: props => ({
        variables: {
          id: props.id,
          page: 1,
          perPage: 18,
          filter: { categories: 'REVIEWS' },
        },
      }),
    },
  }),
);
