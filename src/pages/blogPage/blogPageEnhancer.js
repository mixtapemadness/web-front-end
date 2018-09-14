import { compose, withStateHandlers, lifecycle } from 'recompose'
import { withRouter } from 'react-router-dom'

import loadDataAsync from '../../hocs'
import getPosts from '../../graphql/getPosts.graphql'

export default compose(
  loadDataAsync({
    query: getPosts,
    config: {
      options: props => ({
        variables: {
          filter: { slug: props.match.params.slug },
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
