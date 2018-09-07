import { compose, withStateHandlers } from 'recompose'

export default compose(
  withStateHandlers(
    () => ({
      dotsMenu: false,
    }),
    {
      toggleDotsMenu: ({ dotsMenu }) => () => ({ dotsMenu: !dotsMenu }),
    },
  ),
)
