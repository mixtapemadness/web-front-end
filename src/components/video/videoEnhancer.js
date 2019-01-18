/* eslint no-unused-vars: 0 */
/* eslint indent: 0 */
/* eslint no-unneeded-ternary: 0 */
/* eslint object-curly-newline: 0 */

import { compose, branch } from 'recompose';
import { withRouter } from 'react-router-dom';
import { loadDataAsync, withMedia, withTags, withCategory, withAuthor } from 'hocs';

export default compose(
  withRouter,
  branch(({ data }) => (!!data), withMedia),
  branch(({ data }) => (!!data), withTags),
  branch(
    ({ data: { categories } }) => (!!categories),
    withCategory,
    withAuthor,
  ),
);
