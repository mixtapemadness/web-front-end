import { compose, withStateHandlers } from 'recompose';
import { loadDataAsync } from 'hocs';
import getCategories from 'graphql/getCategories.graphql';

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
  loadDataAsync({
    query: getCategories,
    name: 'categories',
  }),
);
