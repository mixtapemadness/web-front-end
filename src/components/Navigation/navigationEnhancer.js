import { compose } from 'recompose';
import { loadDataAsync } from 'hocs';
import getCategories from 'graphql/getCategories.graphql';

import { withRouter } from 'react-router-dom';

export default compose(
  withRouter,
  loadDataAsync({
    query: getCategories,
    name: 'categories',
  }),
);
