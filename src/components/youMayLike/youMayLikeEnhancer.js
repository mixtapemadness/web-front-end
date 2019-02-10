/* eslint operator-linebreak: 0 */
import {
  compose,
  branch,
  withProps,
} from 'recompose';
import { withRouter } from 'react-router-dom';
import { REFETCH_USER } from '../../eventTypes';
import { loadDataAsync, refetchOn } from '../../hocs';
import getPosts from '../../graphql/getPosts.graphql';
import getPostsByTags from '../../graphql/getPostsByTags.graphql';
import {
  CATEGORY_KEYS,
} from '../../constants';

export default compose(
  withRouter,
  loadDataAsync({
    query: getPosts,
    config: {
      options: props => ({
        variables: {
          page: 1,
          perPage: 3,
          filter: { categories: CATEGORY_KEYS[props.match.params.category.toUpperCase()] },
        },
      }),
    },
  }),

  branch(
    props => !!props.tags,
    loadDataAsync({
      name: 'postsWithTags',
      query: getPostsByTags,
      config: {
        options: props => ({
          variables: {
            tags: props.tags,
            perPage: 5,
          },
        }),
      },
    }),
  ),
  refetchOn(REFETCH_USER),
  withProps(props => {
    const postsFromTags =
      props.postsWithTags &&
      props.postsWithTags.Posts &&
      props.postsWithTags.Posts;
    const postsFromTagsLoading =
      props.postsWithTags &&
      props.postsWithTags.loading &&
      props.postsWithTags.loading;

    return { postsFromTags, postsFromTagsLoading };
  }),
);
