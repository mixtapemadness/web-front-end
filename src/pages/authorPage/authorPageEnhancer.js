/* eslint no-unused-vars: 0 */
/* eslint indent: 0 */

import { compose, lifecycle } from 'recompose';
import { withRouter } from 'react-router-dom';
import getAuthorBySlug from 'graphql/getAuthorBySlug.graphql';
import window from 'global/window';
import { loadDataAsync } from '../../hocs';

export default compose(

  lifecycle({
    componentDidMount() {
      window.scrollTo(0, 0);
    },
    componentDidUpdate() {
      window.scrollTo(0, 0);
    },
  }),
  withRouter,
  loadDataAsync({
    query: getAuthorBySlug,
    config: {
      options: props => ({
        variables: {
          slug: props.match.params.slug,
        },
      }),
    },
  }),
);
