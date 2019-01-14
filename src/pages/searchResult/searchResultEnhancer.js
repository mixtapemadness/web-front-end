import { compose, withStateHandlers } from 'recompose'
import searchQuery from 'graphql/searchQuery.graphql'
import { loadDataAsync } from 'hocs'
import { withRouter } from 'react-router-dom'

export default compose(
  withRouter,
  withStateHandlers(
    () => ({
      category: 'all',
      value: '',
    }),
    {
      chooseCategory: (state, props) => newCategory => {
        props.history.push(
          `/searchresult/${newCategory}/${props.match.params.key}`,
        )
        return { category: newCategory }
      },
      handleSubmit: (state, props) => e => {
        if (e.key === 'Enter') {
          props.history.push(
            `/searchresult/${state.category}/${e.target.value}`,
          )
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
      // skip: props => !props.value || !props.match.params.key,
      options: props => ({
        variables: {
          Page: 1,
          perPage: 10,
          filter: {
            search: props.value ? props.value : props.match.params.key,
            categories:
              props.category !== 'all' ? props.category.toUpperCase() : null,
          },
        },
      }),
    },
  }),
)
