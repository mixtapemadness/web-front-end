import { compose, withStateHandlers } from 'recompose'
import searchQuery from 'graphql/searchQuery.graphql'
import { loadDataAsync } from 'hocs'

export default compose(
  withStateHandlers(
    () => ({
      category: 'all',
    }),
    {
      chooseCategory: () => newCategory => ({ category: newCategory }),
    },
  ),
  loadDataAsync({
    query: searchQuery,
    config: {
      options: props => ({
        variables: {
          Page: 1,
          perPage: 10,
          filter: {
            search: props.match.params.key,
            categories:
              props.category !== 'all' ? props.category.toUpperCase() : null,
          },
        },
      }),
    },
  }),
)
