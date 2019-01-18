/* eslint object-curly-newline: 0 */

import { compose, withStateHandlers, withHandlers } from 'recompose';
import { mutation } from 'hocs';
import subscribeMutation from 'graphql/subscribe.graphql';

export default compose(
  mutation(subscribeMutation),
  withStateHandlers(
    () => ({
      email: '',
      res: '',
    }),
    {
      handleInput: () => e => ({ email: e.target.value }),
      handleRes: res => () => ({ res }),
    },
  ),
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
