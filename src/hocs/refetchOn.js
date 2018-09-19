/* eslint array-callback-return: 0 */

import { compose, lifecycle } from 'recompose'
import getEmitter from '../eventEmitter'

const eventEmitter = getEmitter()

const arrayfy = src => (Array.isArray(src) ? src : [src])

const refetchOn = (names, key = 'data') => {
  const listener = []

  return compose(
    lifecycle({
      componentDidMount() {
        arrayfy(names).map(name => {
          listener.push(
            eventEmitter.addListener(name, (...args) => {
              console.log(`event emitted - ${name}: ${args}`)
              this.props[key].refetch()
            }),
          )
        })
      },
      componentWillUnmount() {
        listener.map(l => l.remove())
      },
    }),
  )
}

export default refetchOn
