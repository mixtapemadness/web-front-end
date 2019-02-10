/* eslint no-unused-vars: 0 */
/* eslint indent: 0 */
/* eslint camelcase: 0 */

import { compose, withStateHandlers, lifecycle } from 'recompose';
import { withRouter } from 'react-router-dom';
import getPosts from 'graphql/getPosts.graphql';
import { loadDataAsync } from 'hocs';
import window from 'global/window';

export default compose(
  withRouter,
  loadDataAsync({
    query: getPosts,
    config: {
      options: props => ({
        variables: {
          filter: { categories: 'EVENTS' },
          page: 1,
          perPage: 6,
        },
      }),
    },
  }),
);
