/* eslint no-unused-vars: 0 */
/* eslint indent: 0 */

import { compose, withStateHandlers, lifecycle } from 'recompose'
import { withRouter } from 'react-router-dom'
import getPosts from 'graphql/getPosts.graphql'
import getPostsByAuthorId from 'graphql/getPostsByAuthorId.graphql'
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
          id: props.id,
          page: 1,
          perPage: window.innerWidth > 550 ? 18 : 9,
          filter: { categories: 'REVIEWS' },
        },
      }),
    },
  }),
)
