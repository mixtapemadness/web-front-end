/* eslint no-unused-vars: 0 */
/* eslint camelcase: 0 */
/* eslint object-curly-newline: 0 */
/* eslint no-unneeded-ternary: 0 */

import {
  compose,
  withStateHandlers,
  lifecycle,
  branch,
  withProps,
} from 'recompose'

import { loadDataAsync, withMedia, withCategory } from 'hocs'
import getMediaById from 'graphql/getMediaById.graphql'

export default compose(
  withStateHandlers(
    () => ({
      width: window.innerWidth,
    }),
    {
      updateWidth: () => () => ({ width: window.innerWidth }),
    },
  ),
  lifecycle({
    componentDidMount() {
      window.addEventListener('resize', this.props.updateWidth)
    },
    componentWillUnmount() {
      window.removeEventListener('resize', this.props.updateWidth)
    },
  }),
  branch(
    ({ data: { categories } }) => (categories ? true : false),
    withCategory,
  ),
  branch(({ data }) => (data ? true : false), withMedia),
)
