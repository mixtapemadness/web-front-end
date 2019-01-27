/* eslint no-unused-vars: 0 */

import { compose, withStateHandlers, lifecycle } from 'recompose';
import getAuthorBySlug from 'graphql/getAuthorBySlug.graphql';
import { loadDataAsync } from 'hocs';
import window from 'global/window';

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
);
