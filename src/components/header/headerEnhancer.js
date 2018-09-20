import { compose, withStateHandlers, lifecycle } from 'recompose'
import { withRouter } from 'react-router-dom'

export default compose(
  withRouter,
  withStateHandlers(
    () => ({
      dotsMenu: false,
      width: window.innerWidth,
    }),
    {
      toggleDotsMenu: ({ dotsMenu }) => () => ({ dotsMenu: !dotsMenu }),
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
)
