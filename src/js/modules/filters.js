import classes from '../utilities/classes'
import SmoothScroll from 'smooth-scroll'

const component = document.querySelector('[data-component=filters')

export default {
  init
}

function init () {
  if (component) {
    return bindEvents()
  }
}

function bindEvents () {
  setPosition()
  const controls = component.querySelectorAll('[data-role=filters-control')
  const form = component.querySelector('[data-role=filters-form]')
  for (let i = 0; i < controls.length; i++) {
    controls[i].addEventListener('change', () => {
      const data = [...component.querySelectorAll('input:checked')].map(e => e.value)
      const qs = data.join(',')
      const url = `${window.location.origin}${form.dataset.path}${qs}`
      window.location = url
    })
  }
}

function setPosition () {
  const target = '[data-role=filters-target]'
  if (component.classList.contains(classes.active)) {
    const scroll = new SmoothScroll()
    scroll.animateScroll(document.querySelector(target))
  }
}
