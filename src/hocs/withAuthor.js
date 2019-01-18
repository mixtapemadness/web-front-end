/*  eslint operator-linebreak: 0 */

import { compose } from 'recompose';
import getAuthorById from 'graphql/getAuthorById.graphql';
import loadDataAsync from './loadDataAsync';

const withAuthor = compose(
  loadDataAsync({
    query: getAuthorById,
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
);

export default withAuthor;
