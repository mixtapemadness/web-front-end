/* eslint no-unused-vars: 0 */
/* eslint indent: 0 */

import { compose } from 'recompose';
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
          page: 1,
          perPage: window.innerWidth > 550 ? 17 : 9,
          filter: { categories: 'VIDEOS' },
        },
      }),
    },
  }),
);
