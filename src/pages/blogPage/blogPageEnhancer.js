import { compose, withProps } from 'recompose'
import { withRouter } from 'react-router-dom'

export default compose(
  withRouter,
  withProps(props => ({
    x: console.log(props),
  })),
)
