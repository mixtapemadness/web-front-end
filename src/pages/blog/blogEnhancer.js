import { compose, withStateHandlers, lifecycle } from 'recompose'
// import { withRouter } from 'react-router-dom'
import loadDataAsync from '../../hocs'
import getPosts from '../../graphql/getPosts.graphql'

export default compose(
  // withRouter,
  withStateHandlers(
    () => ({
      width: window.innerWidth,
      newsFilter: 'NEWS',
      sort: 'DATE_DESC',
      perPage: 9,
    }),
    {
      updateWidth: () => () => ({ width: window.innerWidth }),
      // handleLoadMore: ({ perPage }) => () => ({ perPage: perPage + 9 }),
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

  loadDataAsync({
    query: getPosts,
    config: {
      options: props => ({
        variables: {
          page: 1,
          perPage: props.perPage,
          filter: { categories: props.match.params.filter.toUpperCase() },
          sort: props.sort,
        },
      }),
    },
  }),
)
