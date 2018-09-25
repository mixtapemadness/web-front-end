/* eslint no-unused-vars: 0 */
import { compose, withStateHandlers, lifecycle } from 'recompose'

import { loadDataAsync } from 'hocs'
import getPosts from 'graphql/getPosts.graphql'

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
    query: getPosts,
    config: {
      options: props => ({
        variables: {
          page: 1,
          perPage: 3,
        },
      }),
    },
  }),
)
