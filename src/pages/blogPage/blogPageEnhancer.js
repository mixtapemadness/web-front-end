/* eslint object-curly-newline: 0 */
/* eslint no-unneeded-ternary: 0 */
/* eslint no-unused-vars: 0 */

import {
  compose,
  withStateHandlers,
  lifecycle,
  branch,
  withProps,
} from 'recompose'
import { withRouter } from 'react-router-dom'
import getPostBySlug from 'graphql/getPostBySlug.graphql'
import { loadDataAsync, withMedia, withTags, withCategory } from '../../hocs'

export default compose(
  loadDataAsync({
    query: getPostBySlug,
    config: {
      options: props => ({
        variables: {
          slug: props.match.params.slug,
        },
      }),
    },
  }),
  withRouter,
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
      window.scrollTo(0, 0)
      window.addEventListener('resize', this.props.updateWidth)
    },
    componentDidUpdate() {},
    componentWillUnmount() {
      window.removeEventListener('resize', this.props.updateWidth)
    },
  }),

  withProps(props => console.log('proooops', props)),
  // branch(({ data: { featured_media } }) => (featured_media ? true : false), withMedia),
  // branch(({ data }) => (data ? true : false), withTags),
  // branch(({ data }) => (data ? true : false), withCategory),
)
