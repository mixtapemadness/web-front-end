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
      options: ({
 id, category = '', perPage = 6, page = 1,
}) => ({
        variables: {
          page,
          perPage,
          filter: { categories: category.toUpperCase() },
        },
      }),
    },
  }),
);
