import { compose, withStateHandlers } from 'recompose'
import searchQuery from 'graphql/searchQuery.graphql'
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
)
