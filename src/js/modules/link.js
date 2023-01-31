import SmoothScroll from 'smooth-scroll'

const component = document.querySelector('[data-component=link]')

export default {
  init
}

function init () {
  if (component) {
    return bindEvents()
  }
}

function bindEvents () {
  // eslint-disable-next-line no-unused-vars
  const scroll = new SmoothScroll('a[href*="#"]')
}
