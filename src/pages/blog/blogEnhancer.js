/* eslint no-unused-vars: 0 */

import { compose, withStateHandlers, lifecycle } from 'recompose'
// import { withRouter } from 'react-router-dom'
import { loadDataAsync } from 'hocs'
import getPosts from 'graphql/getPosts.graphql'
import getCategoryById from 'graphql/getCategoryById.graphql'

export default compose(
  // withRouter,
  withStateHandlers(
    () => ({
      width: window.innerWidth,
      newsFilter: 'NEWS',
      sort: 'DATE_DESC',
      perPage: 9,
      Posts: [],
    }),
    {
      updateWidth: () => () => ({ width: window.innerWidth }),
      // handleLoadMore: ({ perPage, fetchMore }) => () => (
      //   fetchMore({
      //     variables: {
      //       perPage: perPage + 9,
      //     },
      //   })),
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
  loadDataAsync({
    query: getCategoryById,
    config: {
      options: props => ({
        variables: {
          id: parseInt(20, 10),
        },
      }),
    },
  }),

  loadDataAsync({
    query: getPosts,
    config: {
      options: props => ({
        variables: {
          page: 1,
          perPage: 9,
          filter: { categories: props.match.params.filter.toUpperCase() },
          sort: props.sort,
        },
      }),
    },
  }),
)
