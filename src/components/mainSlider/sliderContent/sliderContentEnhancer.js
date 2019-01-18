/* eslint no-unused-vars: 0 */
/* eslint indent: 0 */
/* eslint no-unneeded-ternary: 0 */
/* eslint object-curly-newline: 0 */

import { compose, withStateHandlers, branch } from 'recompose';
import { withRouter } from 'react-router-dom';
import { loadDataAsync, withMedia, withTags, withCategory } from 'hocs';

export default compose(
  withStateHandlers(
  ),
  withRouter,
  branch(({ data }) => (!!data), withMedia),
  branch(({ data }) => (!!data), withTags),
  branch(({ data }) => (!!data), withCategory),
);
