import { compose, withStateHandlers, lifecycle } from 'recompose'
import { withRouter } from 'react-router-dom'
import { REFETCH_USER } from '../../eventTypes'
import { loadDataAsync, refetchOn } from '../../hocs'
import getEventEmitter from '../../eventEmitter'
import getPosts from '../../graphql/getPosts.graphql'

export default compose(
  withRouter,
  loadDataAsync({
    query: getPosts,
    config: {
      options: props => ({
        variables: {
          page: 1,
          perPage: 5,
          filter: { categories: props.match.params.category.toUpperCase() },
        },
      }),
    },
  }),
  refetchOn(REFETCH_USER),
  withStateHandlers(
    () => ({
      width: window.innerWidth,
    }),
    {
      updateWidth: () => () => ({ width: window.innerWidth }),
      handleRefetch: () => () => {
        getEventEmitter.emit(REFETCH_USER)
      },
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
)
