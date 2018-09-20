import { compose, withStateHandlers, lifecycle } from 'recompose'
import { withRouter } from 'react-router-dom'
import getMediaById from 'graphql/getMediaById.graphql'
import { loadDataAsync } from 'hocs'

export default compose(
  loadDataAsync({
    query: getMediaById,
    config: {
      options: props => ({
        variables: {
          id: props.id,
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
      window.addEventListener('resize', this.props.updateWidth)
    },
    componentWillUnmount() {
      window.removeEventListener('resize', this.props.updateWidth)
    },
  }),
)
