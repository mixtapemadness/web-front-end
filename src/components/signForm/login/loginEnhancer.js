import { withHandlers, compose, withStateHandlers } from 'recompose'
import mutation from 'hocs/mutation'

import { setToken } from 'services/auth'
import signInMutation from './signIn.graphql'

export default compose(
  mutation(signInMutation),
  withStateHandlers(
    {
      email: '',
      password: '',
    },
    {
      handleInput: () => e => ({ [e.target.name]: e.target.value }),
    },
  ),
  withHandlers({
    submitHandler: ({ email, password, signIn }) => async () => {
      try {
        const {
          data: { signIn: signInRes },
        } = await signIn({ email, password })
        if (!signInRes) {
          throw new Error('Invalid credentials')
        }

        setToken(signInRes.accessToken)

        window.location.href = '/'
      } catch (e) {
        console.log('errrr', e)
      }
    },
  }),
)
