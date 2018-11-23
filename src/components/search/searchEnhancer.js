/* eslint object-curly-newline: 0 */
import { compose, withStateHandlers, lifecycle, withProps } from 'recompose'
import searchQuery from 'graphql/searchQuery.graphql'
import document from 'global/document'
import { loadDataAsync } from '../../hocs'

export default compose(
  withStateHandlers(
    () => ({
      value: '',
    }),
    {
      handleSubmit: () => e => {
        if (e.key === 'Enter') {
          return {
            value: e.target.value,
          }
        }
        return true
      },
      toggle: () => (e, toggleSearch) => {
        if (e.key === 'Escape') {
          toggleSearch()
        }
      },
    },
  ),
  loadDataAsync({
    query: searchQuery,
    config: {
      skip: props => !props.value,
      options: props => ({
        variables: {
          perPage: 5,
          Page: 1,
          filter: { search: props.value },
        },
      }),
    },
  }),
  withProps(props => ({
    escape: e => props.toggle(e, props.toggleSearch),
  })),
  lifecycle({
    componentDidMount() {
      document.addEventListener('keydown', this.props.escape)
    },
    componentWillUnmount() {
      document.removeEventListener('keydown', this.props.escape)
    },
  }),
)
