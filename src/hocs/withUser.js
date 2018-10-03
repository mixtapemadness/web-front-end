/*  eslint operator-linebreak: 0 */

import { compose } from 'recompose'
import getUserById from 'graphql/getUserById.graphql'
import loadDataAsync from './loadDataAsync'

const withUser = compose(
  loadDataAsync({
    query: getUserById,
    name: 'user',
    config: {
      options: props => ({
        variables: {
          id:
            parseInt(props.data.author, 10) ||
            parseInt(props.data.Post.author, 10),
        },
      }),
    },
  }),
)

export default withUser
