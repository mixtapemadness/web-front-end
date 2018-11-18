/* eslint object-curly-newline: 0 */
/* eslint no-unneeded-ternary: 0 */
/* eslint no-unused-vars: 0 */
/* eslint implicit-arrow-linebreak: 0 */
/* eslint operator-linebreak: 0 */

import {
  compose,
  withStateHandlers,
  lifecycle,
  branch,
  withProps,
} from 'recompose'
import { withRouter } from 'react-router-dom'
import getPostBySlug from 'graphql/getPostBySlug.graphql'
import { loadDataAsync, withAuthor, withMedia } from 'hocs'
import getNextPost from 'graphql/getNextPost.graphql'
import getPreviousPost from 'graphql/getPreviousPost.graphql'
import getPrevPostByAuthorId from 'graphql/getPrevPostByAuthorId.graphql'
import getNextPostByAuthorId from 'graphql/getNextPostByAuthorId.graphql'
import window from 'global/window'

export default compose(
  withRouter,
  loadDataAsync({
    query: getPostBySlug,
    config: {
      options: props => ({
        variables: {
          slug: props.match.params.slug,
        },
      }),
    },
  }),
  branch(
    ({ data }) =>
      data && data.Post && data.Post.featured_media ? true : false,
    withMedia,
  ),
  withProps(props => console.log('propsebiieee', props)),
  withStateHandlers(
    () => ({
      width: window.innerWidth,
      fetchPrev: false,
      fetchNext: false,
      date: '',
      category: '',
    }),
    {
      updateWidth: () => () => ({ width: window.innerWidth }),
      handlePrev: ({ fetchPrev }) => date => ({ fetchPrev: true, date }),
      handleNext: ({ fetchNext }) => date => ({ fetchNext: true, date }),
    },
  ),
  branch(
    ({ location }) =>
      location &&
      location.state &&
      location.state.prevPath &&
      location.state.prevPath.split('/')[1] === 'author'
        ? true
        : false,
    loadDataAsync({
      query: getNextPostByAuthorId,
      name: 'getNextPostByAuthorId',
      config: {
        options: props => ({
          variables: {
            page: 1,
            perPage: 1,
            date:
              props.data &&
              props.data.Post &&
              props.data.Post.date &&
              props.data.Post.date,
            id:
              props.location.state.prevPath.authorId &&
              props.location.state.prevPath.authorId,
          },
        }),
      },
    }),
    loadDataAsync({
      query: getNextPost,
      name: 'getNextPost',
      config: {
        options: props => ({
          variables: {
            page: 1,
            perPage: 1,
            date:
              props.data &&
              props.data.Post &&
              props.data.Post.date &&
              props.data.Post.date,
            filter: { categories: props.match.params.category.toUpperCase() },
          },
        }),
      },
    }),
  ),

  branch(
    ({ location }) =>
      location &&
      location.state &&
      location.state.prevPath &&
      location.state.prevPath.split('/')[1] === 'author'
        ? true
        : false,
    loadDataAsync({
      query: getPrevPostByAuthorId,
      name: 'getPrevPostByAuthorId',
      config: {
        options: props => ({
          variables: {
            page: 1,
            perPage: 1,
            date:
              props.data &&
              props.data.Post &&
              props.data.Post.date &&
              props.data.Post.date,
            id:
              props.location.state.prevPath.authorId &&
              props.location.state.prevPath.authorId,
          },
        }),
      },
    }),
    loadDataAsync({
      query: getPreviousPost,
      name: 'getPrevPost',
      config: {
        options: props => ({
          variables: {
            page: 1,
            perPage: 1,
            date:
              props.data &&
              props.data.Post &&
              props.data.Post.date &&
              props.data.Post.date,
            filter: { categories: props.match.params.category.toUpperCase() },
          },
        }),
      },
    }),
  ),
  branch(
    ({ location }) =>
      location &&
      location.state &&
      location.state.prevPath &&
      location.state.prevPath.split('/')[1] === 'author'
        ? true
        : false,
    withProps(props => ({
      nextRoute:
        props.getNextPostByAuthorId &&
        props.getNextPostByAuthorId.getNextPostByAuthorId &&
        props.getNextPostByAuthorId.getNextPostByAuthorId.slug,
      prevRoute:
        props.getPrevPostByAuthorId &&
        props.getPrevPostByAuthorId.getPrevPostByAuthorId &&
        props.getPrevPostByAuthorId.getPrevPostByAuthorId[0] &&
        props.getPrevPostByAuthorId.getPrevPostByAuthorId[0].slug,
    })),
    withProps(props => ({
      nextRoute:
        props.getNextPost &&
        props.getNextPost.getNextPost &&
        props.getNextPost.getNextPost.slug,
      prevRoute:
        props.getPrevPost &&
        props.getPrevPost.getPrevPost &&
        props.getPrevPost.getPrevPost[0] &&
        props.getPrevPost.getPrevPost[0].slug,
    })),
  ),

  lifecycle({
    componentDidMount() {
      window.scrollTo(0, 0)
      window.addEventListener('resize', this.props.updateWidth)
    },
    componentDidUpdate(prevProps, prevState) {
      console.log('prevProps', prevProps)
      window.scrollTo(0, 0)
    },
    componentWillUnmount() {
      window.removeEventListener('resize', this.props.updateWidth)
    },
  }),
  branch(
    ({ data }) => (data && data.Post && data.Post.author ? true : false),
    withAuthor,
  ),
)
