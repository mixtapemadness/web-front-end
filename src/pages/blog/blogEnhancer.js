/* eslint no-unused-vars: 0 */
/* eslint object-curly-newline: 0 */

import { compose, withStateHandlers, lifecycle, withProps } from 'recompose'
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
      page: 1,
      Posts: [],
    }),
    {
      updateWidth: () => () => ({ width: window.innerWidth }),
      handleLoadMore: ({ perPage }) => () => ({ perPage: perPage + 3 }),
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
  // loadDataAsync({
  //   query: getCategoryById,
  //   config: {
  //     options: props => ({
  //       variables: {
  //         id: parseInt(20, 10),
  //       },
  //     }),
  //   },
  // }),

  loadDataAsync({
    query: getPosts,
    config: {
      options: props => ({
        variables: {
          page: props.page,
          perPage: props.perPage,
          filter: { categories: props.match.params.filter.toUpperCase() },
          sort: props.sort,
        },
      }),
    },
  }),
  withProps(({ data, Posts }) => {
    Posts.push(data.Posts)
  }),
)
