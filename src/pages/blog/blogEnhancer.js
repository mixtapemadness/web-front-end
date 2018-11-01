/* eslint no-unused-vars: 0 */
/* eslint object-curly-newline: 0 */

import { compose, withStateHandlers, lifecycle, withProps } from 'recompose'
// import { withRouter } from 'react-router-dom'
import { loadDataAsync, refetchOn } from 'hocs'
import getPosts from 'graphql/getPosts.graphql'
import getCategoryById from 'graphql/getCategoryById.graphql'
import { LOAD_MORE_POSTS, CLOSE_MEGAMENU } from 'constants'
import getEmitter from '../../eventEmitter'

const eventEmitter = getEmitter()

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
      eventEmitter.emit(CLOSE_MEGAMENU)
      window.scrollTo(0, 0)
      window.addEventListener('resize', this.props.updateWidth)
    },
    componentDidUpdate(prevProps, prevState) {
      eventEmitter.emit(LOAD_MORE_POSTS)
    },
    // WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
    componentWillReceiveProps(nextProps) {
      console.log('nextProps')
      console.log('this.props')
      if (nextProps.perPage === this.props.perPage) {
        window.scrollTo(0, 0)
      }
    },
    componentWillUnmount() {
      window.removeEventListener('resize', this.props.updateWidth)
    },
  }),
  loadDataAsync({
    query: getPosts,
    name: 'data',
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
  refetchOn(LOAD_MORE_POSTS, 'data'),
)
