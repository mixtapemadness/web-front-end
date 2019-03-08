/* eslint no-unused-vars: 0 */
/* eslint indent: 0 */
/* eslint no-unneeded-ternary: 0 */
/* eslint object-curly-newline: 0 */

import { compose, withStateHandlers, lifecycle } from 'recompose';
import { withRouter } from 'react-router-dom';
import getPosts from 'graphql/getPosts.graphql';
import { loadDataAsync, withMedia, withTags, withCategory } from 'hocs';
import window from 'global/window';

export default compose(
  withStateHandlers(
    () => ({
      width: window.innerWidth,
    }),
    {
      updateWidth: () => () => ({ width: window.innerWidth }),
    },
  ),
  withRouter,
  loadDataAsync({
    query: getPosts,
    config: {
      options: props => ({
        variables: {
          page: 1,
          perPage: 5,
          filter: { categories: 'VIDEOS' },
        },
      }),
    },
  }),
);
