/* eslint no-unused-vars: 0 */

import { compose, withStateHandlers, lifecycle } from 'recompose'
import getUserBySlug from 'graphql/getUserBySlug.graphql'
import { loadDataAsync } from 'hocs'

export default compose(
  loadDataAsync({
    query: getUserBySlug,
    config: {
      options: props => ({
        variables: {
          id: 20,
        },
      }),
    },
  }),

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
