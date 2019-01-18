/* eslint no-unused-vars: 0 */
/* eslint indent: 0 */
/* eslint no-unneeded-ternary: 0 */
/* eslint object-curly-newline: 0 */

import { compose, withStateHandlers, lifecycle, branch } from 'recompose';
import { withRouter } from 'react-router-dom';
import getPosts from 'graphql/getPosts.graphql';
import { loadDataAsync, withMedia, withTags, withCategory } from 'hocs';
import window from 'global/window';

export default compose(
  withRouter,
  branch(({ data }) => (data ? true : false), withMedia),
  branch(({ data }) => (data ? true : false), withTags),
  branch(({ data }) => (data ? true : false), withCategory),
);
