/* eslint no-unused-vars: 0 */
/* eslint indent: 0 */
/* eslint no-unneeded-ternary: 0 */
/* eslint object-curly-newline: 0 */

import { compose, withStateHandlers, lifecycle, branch } from 'recompose'
import { withRouter } from 'react-router-dom'
import getPosts from 'graphql/getPosts.graphql'
import { loadDataAsync, withMedia, withTags, withCategory } from 'hocs'

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
      window.addEventListener('resize', this.props.updateWidth)
    },
    componentWillUnmount() {
      window.removeEventListener('resize', this.props.updateWidth)
    },
  }),
  withRouter,
  branch(({ data }) => (data ? true : false), withMedia),
  branch(({ data }) => (data ? true : false), withTags),
  branch(({ data }) => (data ? true : false), withCategory),
)
