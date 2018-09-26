/* eslint no-unused-vars: 0 */
/* eslint indent: 0 */
/* eslint camelcase: 0 */

import { compose, withStateHandlers, lifecycle } from 'recompose'
import { withRouter } from 'react-router-dom'
import getPosts from 'graphql/getPosts.graphql'
import { loadDataAsync } from 'hocs'

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
  loadDataAsync({
    query: getPosts,
    config: {
      options: props => ({
        variables: {
          filter: { categories: 'EVENTS' },
          page: 1,
          perPage: 4,
        },
      }),
    },
  }),
)
