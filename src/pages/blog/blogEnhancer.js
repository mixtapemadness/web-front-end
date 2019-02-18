/* eslint no-unused-vars: 0 */
/* eslint object-curly-newline: 0 */
/* global googletag */
import {
  compose,
  withStateHandlers,
  lifecycle,
  withProps,
  withHandlers,
} from 'recompose';
import { loadDataAsync, refetchOn } from 'hocs';
import getPosts from 'graphql/getPosts.graphql';
import { CLOSE_MEGAMENU } from 'constants';
import window from 'global/window';
import getEmitter from '../../eventEmitter';

const eventEmitter = getEmitter();

export default compose(
  withStateHandlers(
    () => ({
      newsFilter: 'NEWS',
      sort: 'DATE_DESC',
      page: 1,
      perPage: 9,
      Posts: [],
    }),
    {
      handleSetPage: ({ page }) => () => ({ page: page + 1 }),
    },
  ),
  loadDataAsync({
    query: getPosts,
    name: 'data',
    config: {
      options: props => ({
        notifyOnNetworkStatusChange: true,
        variables: {
          page: 1,
          perPage: 11,
          filter: { categories: props.match.params.filter.toUpperCase() },
          sort: props.sort,
        },
      }),
    },
  }),
  withHandlers({
    handleLoadMore: props => () => {
      props.handleSetPage();
      props.data.fetchMore({
        variables: {
          page: props.page + 1,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => ({
          ...previousResult,
          Posts: [...previousResult.Posts, ...fetchMoreResult.Posts],
        }),
      });
    },
  }),
  lifecycle({
    componentWillReceiveProps(nextProps) {
      if (nextProps.location.pathname !== this.props.location.pathname) {
        window.scrollTo(0, 0);
      }
    },
    componentDidMount() {
      eventEmitter.emit(CLOSE_MEGAMENU);
      window.scrollTo(0, 0);
    },
  }),
  withProps(({ count, data }) => {
    const postCount = count && count.count && count.count.count;
    const Data = data.Posts && postCount && data.Posts.length > 0 && data.Posts;
    if (Data && postCount <= Data.length + 1) {
      return { isMoreData: false };
    }
    return { isMoreData: true };
  }),
);
