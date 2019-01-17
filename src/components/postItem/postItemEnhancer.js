/* eslint camelcase: 0 */
/* eslint no-unneeded-ternary: 0 */
/* eslint object-curly-newline: 0 */

import { compose, branch } from 'recompose';
import { withCategory, withMedia, withAuthor } from 'hocs';

export default compose(
  branch(
    ({ data: { categories } }) => (!!categories),
    withCategory,
  ),
  branch(
    ({ data: { featured_media } }) => (!!featured_media),
    withMedia,
  ),
  branch(({ data }) => (!!data), withAuthor),
);
