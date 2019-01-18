import { compose, withStateHandlers } from 'recompose';
import { withRouter } from 'react-router-dom';

export default compose(
  withRouter,
  withStateHandlers(
    () => ({
      dotsMenu: false,
    }),
    {
      toggleDotsMenu: ({ dotsMenu }) => () => ({ dotsMenu: !dotsMenu }),
    },
  ),
);
