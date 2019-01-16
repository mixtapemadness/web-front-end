import { compose, withStateHandlers } from 'recompose';
import { withRouter } from 'react-router-dom';
import getMediaById from 'graphql/getMediaById.graphql';
import { loadDataAsync } from 'hocs';
import window from 'global/window';

export default compose(
  loadDataAsync({
    query: getMediaById,
    config: {
      options: props => ({
        variables: {
          id: props.id && props.id,
        },
      }),
    },
  }),
  withRouter,
  withStateHandlers(
    () => ({
      width: window.innerWidth,
    }),
  ),
);
