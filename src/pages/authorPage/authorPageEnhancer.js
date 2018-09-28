/* eslint no-unused-vars: 0 */
/* eslint indent: 0 */

import { compose, withStateHandlers, lifecycle } from 'recompose'
import { withRouter } from 'react-router-dom'
import getUserBySlug from 'graphql/getUserBySlug.graphql'
import { loadDataAsync } from '../../hocs'

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
      window.scrollTo(0, 0)
      window.addEventListener('resize', this.props.updateWidth)
    },
    componentDidUpdate() {
      window.scrollTo(0, 0)
    },
    componentWillUnmount() {
      window.removeEventListener('resize', this.props.updateWidth)
    },
  }),
  withRouter,
  loadDataAsync({
    query: getUserBySlug,
    config: {
      options: props => ({
        variables: {
          slug: props.match.params.slug,
          // filter: { categories: props.match.params.filter.toUpperCase() },
          // sort: props.sort,
        },
      }),
    },
  }),
)
