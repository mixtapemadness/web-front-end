import { compose, withStateHandlers, lifecycle } from 'recompose'
import { withRouter } from 'react-router-dom'
import { loadDataAsync } from '../../../hocs'
import getBlogPage from '../../../graphql/getBlogPage.graphql'

export default compose(
  loadDataAsync({
    query: getBlogPage,
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
