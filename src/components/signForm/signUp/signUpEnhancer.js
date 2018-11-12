import { withHandlers, compose, withStateHandlers } from 'recompose'
import mutation from 'hocs/mutation'

import signUpMutation from './signUp.graphql'

export default compose(
  mutation(signUpMutation),
  withStateHandlers(
    {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: '',
    },
    {
      handleInput: () => e => ({ [e.target.name]: e.target.value }),
      handleRoleChange: () => value => ({ role: value }),
    },
  ),
  withHandlers({
    submitHandler: ({
      name,
      email,
      password,
      confirmPassword,
      role,
      signUp,
    }) => async () => {
      try {
        if (password !== confirmPassword) {
          throw new Error('Invalid data')
        }
        const {
          data: { signUp: signUpRes },
        } = await signUp({
          email,
          password,
          role,
          name,
        })
        // const res = await signUp({ email, password, role, name })

        if (!signUpRes) {
          throw new Error('Invalid data')
        }

        window.location.href = '/thanks'
      } catch (e) {
        console.log('errrr', e)
      }
    },
  }),
)
