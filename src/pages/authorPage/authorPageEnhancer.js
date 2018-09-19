/* eslint no-unused-vars: 0 */
import { compose, withStateHandlers, lifecycle } from 'recompose'
import { loadDataAsync } from '../../hocs'
import getUserBySlug from '../../graphql/getUserBySlug.graphql'

export default compose(
  loadDataAsync({
    query: getUserBySlug,
    config: {
      options: props => ({
        variables: {
          page: 1,
          // perPage: props.perPage,
          // filter: { categories: props.match.params.filter.toUpperCase() },
          // sort: props.sort,
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
