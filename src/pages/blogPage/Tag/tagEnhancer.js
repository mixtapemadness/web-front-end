import { compose, withStateHandlers, lifecycle } from 'recompose';
import { withRouter } from 'react-router-dom';
import getTagsById from 'graphql/getTagsById.graphql';
import { loadDataAsync } from 'hocs';
import window from 'global/window';

export default compose(
  loadDataAsync({
    query: getTagsById,
    config: {
      options: props => ({
        variables: {
          id: props.id,
        },
      }),
    },
  }),
  withRouter,
  withStateHandlers(
    () => ({
      width: window.innerWidth,
    }),
    {
      updateWidth: () => () => ({ width: window.innerWidth }),
    },
  ),
  lifecycle({
    componentDidMount() {
      window.addEventListener('resize', this.props.updateWidth);
    },
    componentWillUnmount() {
      window.removeEventListener('resize', this.props.updateWidth);
    },
  }),
);
