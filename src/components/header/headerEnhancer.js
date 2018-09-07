import { compose, withStateHandlers, lifecycle } from 'recompose'

export default compose(
  withStateHandlers(
    () => ({
      dotsMenu: false,
      width: window.innerWidth,
      burgerOpen: false,
    }),
    {
      toggleDotsMenu: ({ dotsMenu }) => () => ({ dotsMenu: !dotsMenu }),
      toggleBurgerOpen: ({ burgerOpen }) => () => ({ burgerOpen: !burgerOpen }),
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
