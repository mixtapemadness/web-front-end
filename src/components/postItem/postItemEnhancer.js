/* eslint camelcase: 0 */
/* eslint no-unneeded-ternary: 0 */
/* eslint object-curly-newline: 0 */

import { compose, withStateHandlers, lifecycle, branch } from 'recompose'
import { withCategory, withMedia, withUser } from 'hocs'
import { withRouter } from 'react-router-dom'
// import getCategoryById from 'graphql/getCategoryById.graphql'

export default compose(
  withStateHandlers(
    () => ({
      width: window.innerWidth,
    }),
    {
      updateWidth: () => () => ({ width: window.innerWidth }),
    },
  ),
  withRouter,
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
  branch(
    ({ data: { featured_media } }) => (featured_media ? true : false),
    withMedia,
  ),
  branch(({ data }) => (data ? true : false), withUser),

  // withCategory,
  // withCategory,
  // withProps(props => console.log('propssssssssssss', props)),
)
