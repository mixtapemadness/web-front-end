/* eslint no-unused-vars: 0 */
/* eslint camelcase: 0 */
/* eslint object-curly-newline: 0 */
/* eslint no-unneeded-ternary: 0 */

import {
  compose,
  withStateHandlers,
  lifecycle,
  branch,
  withProps,
} from 'recompose';
import window from 'global/window';
import { loadDataAsync, withMedia, withCategory } from 'hocs';
import getMediaById from 'graphql/getMediaById.graphql';

export default compose(
  branch(
    ({ data: { categories } }) => (categories ? true : false),
    withCategory,
  ),
  branch(({ data }) => (data ? true : false), withMedia),
);
