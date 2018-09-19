import { compose, withStateHandlers, lifecycle } from 'recompose'
import { withRouter } from 'react-router-dom'
import getPostBySlug from 'graphql/getPostBySlug.graphql'
import { loadDataAsync } from '../../hocs'

export default compose(
  loadDataAsync({
    query: getPostBySlug,
    config: {
      options: props => ({
        variables: {
          slug: props.match.params.slug,
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
