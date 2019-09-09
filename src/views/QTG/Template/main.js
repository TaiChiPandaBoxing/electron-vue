function getHeaderDom (options) {
  const {num} = options
  const headerDom = document.createElement('div')
  headerDom.innerHTML = `
  <div>${num}</div>
  `
  return headerDom
}
function wPrint () {
  window.print()
}
document.body.appendChild(getHeaderDom(2))