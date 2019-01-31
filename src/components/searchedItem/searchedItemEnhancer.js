/* eslint no-unused-vars: 0 */
/* eslint object-curly-newline: 0 */
/* eslint no-unneeded-ternary: 0 */

import { compose, withStateHandlers, lifecycle, branch } from 'recompose';
import { loadDataAsync, withMedia, withTags, withCategory } from 'hocs';

export default compose(
  withStateHandlers(
    () => ({
      showAuthorBio: false,
    }),
    {
      handleShowAuthorBio: ({ showAuthorBio }) => () => ({
        showAuthorBio: !showAuthorBio,
      }),
    },
  ),
  branch(({ data }) => (data ? true : false), withMedia),
  branch(({ data }) => (data ? true : false), withTags),
  branch(({ data }) => (data ? true : false), withCategory),
);
