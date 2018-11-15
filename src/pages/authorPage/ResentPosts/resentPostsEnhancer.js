/* eslint no-unused-vars: 0 */
/* eslint indent: 0 */
/* eslint object-curly-newline: 0 */
/* eslint no-unneeded-ternary: 0 */

import {
  compose,
  withStateHandlers,
  withHandlers,
  lifecycle,
  branch,
} from 'recompose'
import { withRouter } from 'react-router-dom'
import getPostsByAuthorId from 'graphql/getPostsByAuthorId.graphql'
import { loadDataAsync, withCount } from 'hocs'

export default compose(
  withStateHandlers(
    () => ({
      width: window.innerWidth,
      perPage: 9,
      page: 1,
      perPageMobile: 4,
      Mobilepage: 1,
      Posts: [],
    }),
    {
      increacePagination: ({ Mobilepage }) => () => ({
        Mobilepage: Mobilepage + 1,
      }),
      decreacePagination: ({ Mobilepage }) => () => ({
        Mobilepage: Mobilepage - 1,
      }),
      handleSetPage: ({ page }) => () => ({ page: page + 1 }),
      updateWidth: () => () => ({ width: window.innerWidth }),
      handleLoadMore: ({ perPage }) => () => ({ perPage: perPage + 3 }),
    },
  ),
  lifecycle({
    componentDidMount() {
      window.addEventListener('resize', this.props.updateWidth)
      window.scrollTo(0, 0)
    },
    componentDidUpdate(prevProps, prevState) {
      if (prevProps.page === this.props.page) {
        window.scrollTo(0, 0)
      }
    },
    componentWillUnmount() {
      window.removeEventListener('resize', this.props.updateWidth)
    },
  }),
  withRouter,
  loadDataAsync({
    query: getPostsByAuthorId,
    name: 'data',
    config: {
      options: props => ({
        variables: {
          id: props.id,
          page: props.width > 550 ? props.page : props.Mobilepage,
          perPage: props.width > 550 ? props.perPage : props.perPageMobile,
        },
      }),
    },
  }),
  withHandlers({
    handleLoadMore: props => () => {
      props.handleSetPage()
      props.data.fetchMore({
        variables: {
          page: props.page + 1,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => ({
          ...previousResult,
          Posts: [...previousResult.Posts, ...fetchMoreResult.Posts],
        }),
      })
    },
  }),

  branch(({ id }) => (id ? true : false), withCount),
)
