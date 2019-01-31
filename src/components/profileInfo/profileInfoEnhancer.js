/* eslint no-unused-vars: 0 */

import { compose, withStateHandlers, lifecycle } from 'recompose';
import { loadDataAsync } from 'hocs';

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
