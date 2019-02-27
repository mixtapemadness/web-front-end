/* eslint no-unused-vars: 0 */
import { compose, withStateHandlers, lifecycle } from 'recompose';
import window from 'global/window';

import { loadDataAsync } from 'hocs';
import { withRouter } from 'react-router-dom';
import { CLOSE_MEGAMENU } from 'constants';
import getEmitter from '../../eventEmitter';

const eventEmitter = getEmitter();

export default compose(
  withRouter,
  withStateHandlers(
    () => ({
      width: window.innerWidth,
    }),
  ),
  lifecycle({
    componentDidUpdate(prevProps, prevState) {
      eventEmitter.emit(CLOSE_MEGAMENU);
    },
  }),
);
