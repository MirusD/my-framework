export function capitalize(string) {
  if (typeof string !== 'string') {
    return ''
  }
  return string.replace(/^(\w)/, (m, p) => p.toUpperCase())
}
