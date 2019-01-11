/* eslint no-unused-vars: 0 */
/* eslint object-curly-newline: 0 */
/* eslint no-unneeded-ternary: 0 */

import { compose, withStateHandlers, lifecycle, branch } from 'recompose';
import { loadDataAsync, withMedia, withTags, withCategory } from 'hocs';
import window from 'global/window';
import getPosts from 'graphql/getPosts.graphql';

export default compose(
  withStateHandlers(
    () => ({
      width: window.innerWidth,
    }),
    {
      updateWidth: () => () => ({ width: window.innerWidth }),
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
  branch(({ data }) => (data ? true : false), withMedia),
  branch(({ data }) => (data ? true : false), withTags),
  branch(({ data }) => (data ? true : false), withCategory),
);
