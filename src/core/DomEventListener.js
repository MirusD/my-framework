import { capitalize } from './utils'

export class DomEventListener {
  constructor(listeners = []) {
    this.listeners = listeners
  }

  initDOMListeners() {
    this.listeners = this.listeners.map(listener => {
      const methodName = getMethodName(listener)
      if (!this[methodName]) {
        const error = `
        Method ${methodName} is not implemented in ${this.name} Component`
        throw new Error(error)
      }
      const method = this[methodName].bind(this)
      return this.$root.on(listener, method)
    })
  }

  removeDOMListeners() {
    this.listeners.forEach((listenerRemove) => {
      listenerRemove()
    })
  }
}

function getMethodName(eventName) {
  return 'on' + capitalize(eventName)
}
