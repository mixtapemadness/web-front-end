/* eslint operator-linebreak: 0 */
import {
  compose,
  withStateHandlers,
  lifecycle,
  branch,
  withProps,
} from 'recompose';
import { withRouter } from 'react-router-dom';
import window from 'global/window';
import { REFETCH_USER } from '../../eventTypes';
import { loadDataAsync, refetchOn } from '../../hocs';
import getEventEmitter from '../../eventEmitter';
import getPosts from '../../graphql/getPosts.graphql';
import getPostsByTags from '../../graphql/getPostsByTags.graphql';

export default compose(
  withRouter,
  loadDataAsync({
    query: getPosts,
    config: {
      options: props => ({
        variables: {
          page: 1,
          perPage: 11,
          filter: { categories: props.match.params.category.toUpperCase() },
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
          },
        }),
      },
    }),
  ),
  refetchOn(REFETCH_USER),
  withStateHandlers(
    () => ({
      width: window.innerWidth,
    }),
    {
      updateWidth: () => () => ({ width: window.innerWidth }),
      handleRefetch: () => () => {
        getEventEmitter.emit(REFETCH_USER);
      },
    },
  ),
  lifecycle({
    componentDidMount() {
      window.addEventListener('resize', this.props.updateWidth);
    },
    componentWillUnmount() {
      window.removeEventListener('resize', this.props.updateWidth);
    },
  }),
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
