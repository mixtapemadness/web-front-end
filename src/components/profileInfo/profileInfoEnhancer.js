/* eslint no-unused-vars: 0 */

import { compose, withStateHandlers, lifecycle } from 'recompose';
import getAuthorBySlug from 'graphql/getAuthorBySlug.graphql';
import { loadDataAsync } from 'hocs';
import window from 'global/window';

export default compose(
  withStateHandlers(
    () => ({
      width: window.innerWidth,
      showAuthorBio: false,
    }),
    {
      updateWidth: () => () => ({ width: window.innerWidth }),
      handleShowAuthorBio: ({ showAuthorBio }) => () => ({
        showAuthorBio: !showAuthorBio,
      }),
    },
  ),
  lifecycle({
    componentDidMount() {
      window.addEventListener('resize', this.props.updateWidth);
    },
    componentWillUnmount() {
      window.removeEventListener('resize', this.props.updateWidth);
    },
  }),
);
