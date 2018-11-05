/* eslint object-curly-newline: 0 */
/* eslint no-unneeded-ternary: 0 */
/* eslint no-unused-vars: 0 */
/* eslint operator-linebreak: 0 */
/* eslint consistent-return: 0 */
/* eslint implicit-arrow-linebreak: 0 */

import {
  compose,
  withStateHandlers,
  lifecycle,
  branch,
  withProps,
} from 'recompose'
import { withRouter } from 'react-router-dom'
import getPostBySlug from 'graphql/getPostBySlug.graphql'
import getPosts from 'graphql/getPosts.graphql'
import getPostsByAuthorId from 'graphql/getPostsByAuthorId.graphql'
import { loadDataAsync, withUser } from 'hocs'
import { redirect } from 'helpers'
import { CLOSE_SEARCH } from 'constants'

import getEmitter from '../../eventEmitter'

const eventEmitter = getEmitter()

export default compose(
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
  withRouter,
  withStateHandlers(
    () => ({
      page: 1,
      perPage: 9,
    }),
    {
      handlePage: () => () => {},
      handlePerPage: ({ perPage }) => () => {
        console.log('perPage', perPage)
        return { perPage: perPage + 9 }
      },
    },
  ),
  lifecycle({
    componentDidMount() {
      eventEmitter.emit(CLOSE_SEARCH)
      window.scrollTo(0, 0)
      window.addEventListener('resize', this.props.updateWidth)
    },
    componentWillReceiveProps(nextProps) {
      if (
        nextProps &&
        nextProps.PostsByAuthor &&
        nextProps.PostsByAuthor.posts &&
        this.props.PostsByAuthor &&
        this.props.PostsByAuthor.posts &&
        nextProps.PostsByAuthor.posts.length ===
          this.props.PostsByAuthor.posts.length
      ) {
        window.scrollTo(0, 0)
      }
    },
    componentWillUnmount() {
      window.removeEventListener('resize', this.props.updateWidth)
    },
  }),

  branch(
    ({ data }) => (data && data.Post && data.Post.author ? true : false),
    withUser,
  ),
  branch(
    props =>
      props.location &&
      props.location.state &&
      props.location.state.prevPath &&
      props.location.state.prevPath.split('/')[1] === 'author'
        ? true
        : false,
    loadDataAsync({
      query: getPostsByAuthorId,
      name: 'PostsByAuthor',
      config: {
        options: props => ({
          variables: {
            id: props.location.state.authorId,
            page: 1,
            perPage: props.perPage,
          },
        }),
      },
    }),
    loadDataAsync({
      query: getPosts,
      name: 'PostsByCategory',
      config: {
        options: props => ({
          variables: {
            page: 1,
            perPage: props.perPage,
            filter: {
              categories: props.location.state.category.toUpperCase(),
            },
          },
        }),
      },
    }),
  ),
  branch(
    props =>
      props.PostsByAuthor &&
      props.PostsByAuthor.posts &&
      props.PostsByAuthor.posts.length === props.perPage
        ? true
        : false,
    withProps(props => {
      eventEmitter.emit(CLOSE_SEARCH)
      if (props.PostsByAuthor && props.PostsByAuthor.posts) {
        const arrOfSlugs = props.PostsByAuthor.posts.map(item => item.slug)
        const index = arrOfSlugs.indexOf(props.match.params.slug)
        if (index === -1 || index >= arrOfSlugs.length - 3) {
          props.handlePerPage()
        } else {
          const nextUrl = arrOfSlugs[index + 1]
          const prevUrl = arrOfSlugs[index - 1]
          return { nextUrl, prevUrl, index }
        }
      }
    }),
  ),
  branch(
    props =>
      props.PostsByCategory &&
      props.PostsByCategory.Posts &&
      props.PostsByCategory.Posts.length === props.perPage
        ? true
        : false,
    withProps(props => {
      // eventEmitter.emit(CLOSE_SEARCH)
      if (props.PostsByCategory && props.PostsByCategory.Posts) {
        const arrOfSlugs = props.PostsByCategory.Posts.map(item => item.slug)
        const index = arrOfSlugs.indexOf(props.match.params.slug)
        console.log('index', index)
        if (index === -1 || index >= arrOfSlugs.length - 3) {
          console.log('arrOfSlugs', arrOfSlugs)
          props.handlePerPage()
        } else {
          const nextUrl = arrOfSlugs[index + 1]
          const prevUrl = arrOfSlugs[index - 1]
          return { nextUrl, prevUrl, index }
        }
      }
    }),
  ),
  withProps(props => {
    if (props.location.state.prevPath.split('/')[1] === 'author') {
      return { isLoading: props.PostsByAuthor.loading }
    }
    return { isLoading: props.PostsByCategory.loading }
  }),
)
