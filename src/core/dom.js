class Dom {
  constructor(selector) {
    this.$el = typeof selector === 'string'
      ? document.querySelector(selector)
      : selector
  }

  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html
      return this
    }

    return this.$el.outerHTML.trim()
  }

  clear() {
    this.html('')

    return this
  }

  on(eventType, callback) {
    this.$el.addEventListener(eventType, callback)

    return () => this.off(eventType, callback)
  }

  off(eventType, callback) {
    this.$el.removeEventListener(eventType, callback)
  }

  append(node) {
    node = node instanceof Dom ? node.$el : node
    Element.prototype.append
      ? this.$el.append(node)
      : this.$el.appendChild(node)

    return this
  }
}

export function $(selector) {
  return new Dom(selector)
}

$.create = (tagName, classes = '') => {
  const $el = document.createElement(tagName)
  classes && $el.classList.add(classes)
  return $($el)
}

