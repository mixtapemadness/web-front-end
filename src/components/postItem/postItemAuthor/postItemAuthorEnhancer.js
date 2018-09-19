import { compose, withStateHandlers, lifecycle } from 'recompose'

import { loadDataAsync } from '../../../hocs'
import getUserById from '../../../graphql/getUserById.graphql'

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
  loadDataAsync({
    query: getUserById,
    config: {
      options: props => ({
        variables: {
          id: parseInt(props.id, 10),
        },
      }),
    },
  }),
)
