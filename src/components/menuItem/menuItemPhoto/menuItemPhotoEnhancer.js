/* eslint no-unused-vars: 0 */
import { compose, withStateHandlers, lifecycle } from 'recompose'
import window from 'global/window'

import { loadDataAsync } from 'hocs'
import getMediaById from 'graphql/getMediaById.graphql'

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
    query: getMediaById,
    config: {
      options: props => ({
        variables: {
          id: props.id && props.id,
        },
      }),
    },
  }),
)
