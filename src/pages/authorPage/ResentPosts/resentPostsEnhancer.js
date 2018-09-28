/* eslint no-unused-vars: 0 */
/* eslint indent: 0 */

import { compose, withStateHandlers, lifecycle } from 'recompose'
import { withRouter } from 'react-router-dom'
import getPostsByAuthorId from 'graphql/getPostsByAuthorId.graphql'
import { loadDataAsync } from 'hocs'

export default compose(
  withStateHandlers(
    () => ({
      width: window.innerWidth,
      perPage: 9,
      page: 1,
      perPageMobile: 4,
      Mobilepage: 1,
    }),
    {
      updateWidth: () => () => ({ width: window.innerWidth }),
      increacePagination: ({ Mobilepage }) => () => ({
        Mobilepage: Mobilepage + 1,
      }),
      decreacePagination: ({ Mobilepage }) => () => ({
        Mobilepage: Mobilepage - 1,
      }),
    },
  ),
  lifecycle({
    componentDidMount() {
      console.log('Mobilepage', this.props.Mobilepage)
      window.addEventListener('resize', this.props.updateWidth)
    },
    componentDidUpdate(prevProps, prevState) {
      window.scrollTo(0, 0)
    },
    componentWillUnmount() {
      window.removeEventListener('resize', this.props.updateWidth)
    },
  }),
  withRouter,
  loadDataAsync({
    query: getPostsByAuthorId,
    config: {
      options: props => ({
        variables: {
          id: props.id,
          page: props.width > 550 ? 1 : props.Mobilepage,
          perPage: props.width > 550 ? props.perPage : props.perPageMobile,
        },
      }),
    },
  }),
)
