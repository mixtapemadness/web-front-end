import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { loadDataAsync } from '../../hocs';
import getBlogPage from '../../graphql/getBlogPage.graphql';

export default compose(
  loadDataAsync({
    query: getBlogPage,
    config: {
      options: props => ({
        variables: {
          filter: { slug: props.match.params.slug },
        },
      }),
    },
  }),
  withRouter,
);
