import { EventEmitter } from 'fbemitter'

let emitter = null

const getEmitter = () => {
  if (!emitter) {
    emitter = new EventEmitter()
  }
  return emitter
}

export default getEmitter
