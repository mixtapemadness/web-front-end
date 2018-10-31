/* eslint no-unused-vars: 0 */
/* eslint object-curly-newline: 0 */

import { compose, lifecycle } from 'recompose'

export default compose(
  lifecycle({
    componentDidMount() {
      window.scrollTo(0, 0)
    },
  }),
)
