/* eslint no-unneeded-ternary: 0 */

import { compose, withStateHandlers, lifecycle } from 'recompose'
import { withRouter } from 'react-router-dom'
import getMediaById from 'graphql/getMediaById.graphql'
import { loadDataAsync } from 'hocs'
import window from 'global/window'

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
