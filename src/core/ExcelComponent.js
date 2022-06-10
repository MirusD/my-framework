import { DomEventListener } from '@core/DomEventListener'

export class ExcelComponent extends DomEventListener {
  constructor($root, options = {}) {
    super(options.listeners)
    if (!$root) throw new Error('No provided $root in ExcelComponent')
    this.$root = $root
    this.name = options.name || ''
  }

  toHTML() {
    return ''
  }

  init() {
    this.initDOMListeners()
  }

  destroy() {
    this.removeDOMListeners()
  }
}
