import { compose, withStateHandlers } from 'recompose'
import loadDataAsync from '../../hocs'
import getPosts from '../../graphql/getPosts.graphql'

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
    query: getPosts,
    config: {
      skip: props => !props.value,
      options: props => ({
        variables: {
          perPage: 5,
          filter: { search: props.value },
        },
      }),
    },
  }),
)
