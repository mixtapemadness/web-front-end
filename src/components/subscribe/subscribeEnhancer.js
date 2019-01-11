/* eslint object-curly-newline: 0 */

import { compose, withStateHandlers, lifecycle, withHandlers } from 'recompose';
import { mutation } from 'hocs';
import subscribeMutation from 'graphql/subscribe.graphql';
import window from 'global/window';

export default compose(
  mutation(subscribeMutation),
  withStateHandlers(
    () => ({
      width: window.innerWidth,
      email: '',
      res: '',
    }),
    {
      handleInput: () => e => ({ email: e.target.value }),
      handleRes: res => () => ({ res }),
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

  withHandlers({
    handleSubscribe: ({
      subscribeToMailchimp,
      handleRes,
      email,
    }) => async () => {
      // event.preventDefault()
      const res = await subscribeToMailchimp({ email_address: email });
      // const res = { email_address: email }

      handleRes(res);
    },
  }),
);
