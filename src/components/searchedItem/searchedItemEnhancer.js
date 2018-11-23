/* eslint no-unused-vars: 0 */
/* eslint object-curly-newline: 0 */
/* eslint no-unneeded-ternary: 0 */

import getAuthorBySlug from 'graphql/getAuthorBySlug.graphql'
import { compose, withStateHandlers, lifecycle, branch } from 'recompose'
import { loadDataAsync, withMedia, withTags, withCategory } from 'hocs'
import window from 'global/window'

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
      window.addEventListener('resize', this.props.updateWidth)
    },
    componentWillUnmount() {
      window.removeEventListener('resize', this.props.updateWidth)
    },
  }),
  branch(({ data }) => (data ? true : false), withMedia),
  branch(({ data }) => (data ? true : false), withTags),
  branch(({ data }) => (data ? true : false), withCategory),
)
