/* eslint no-unneeded-ternary: 0 */
import { compose, branch } from 'recompose';
import { withRouter } from 'react-router-dom';
import getMediaById from 'graphql/getMediaById.graphql';
import { loadDataAsync } from 'hocs';

export default compose(
  branch(
    props => (props.id),
    loadDataAsync({
      query: getMediaById,
      skip: props => !props.id,
      config: {
        options: props => ({
          variables: {
            id: props.id && props.id,
          },
        }),
      },
    }),
  ),
  withRouter,
);
