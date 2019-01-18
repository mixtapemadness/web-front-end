/* eslint no-unused-vars: 0 */
/* eslint indent: 0 */

import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import getPostsByAuthorId from 'graphql/getPostsByAuthorId.graphql';
import { loadDataAsync } from 'hocs';

export default compose(
  withRouter,
  loadDataAsync({
    query: getPostsByAuthorId,
    config: {
      options: props => ({
        variables: {
          id: props.id,
          // perPage: props.perPage,
          // filter: { categories: props.match.params.filter.toUpperCase() },
          // sort: props.sort,
        },
      }),
    },
  }),
);
