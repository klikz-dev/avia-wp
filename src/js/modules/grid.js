import axios from 'axios'
import classes from '../utilities/classes'
import SmoothScroll from 'smooth-scroll'

const closeSelector = '[data-role=grid-close]'
const groupSelector = '[data-role=grid-group]'

const components = document.querySelectorAll('[data-component=grid]')
const triggers = document.querySelectorAll('[data-role=grid-trigger]')

export default {
  init
}

function init () {
  if (components.length > 0) {
    return bindEvents()
  }
}

function bindEvents () {
  listen()
}

function listen () {
  for (let i = 0; i < triggers.length; i++) {
    triggers[i].addEventListener('click', manage)
  }
}

function manage () {
  const self = this
  const id = self.dataset.id
  const target = self.closest(groupSelector)
  if (!self.classList.contains(classes.active) &&
      !self.classList.contains(classes.disabled)) {
    self.classList.add(classes.active)
    request(id, target)
  }
}

function request (id, target) {
  return axios.get(`/wp-json/wp/v2/person/${id}`)
    .then((response) => {
      disable()
      instantiate(response.data.content.rendered, target)
    })
    .catch((error) => {
      console.log(error)
    })
}

function instantiate (data, target) {
  const outer = document.createElement('div')
  outer.addEventListener('click', (event) => {
    reset()
    if (event.target.matches(closeSelector) ||
        event.target.parentNode.matches(closeSelector)) {
      const scroll = new SmoothScroll()
      scroll.animateScroll(outer.previousSibling)
      outer.parentNode.removeChild(outer)
    }
  })
  render(data, target, outer)
}

function render (data, target, outer) {
  const template =
    `<div data-component="modal" class="wysiwyg relative bg-blue-100 px-20 py-48 md:px-40 md:py-40">
      <button class="absolute right-0 top-0 border-solid border-2 border-blue-400 p-8 mt-12 mr-12" data-role="grid-close">
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 1.712L14.389 0 8 6.788 1.611 0 0 1.712 6.389 8.5 0 15.288 1.611 17 8 10.212 14.389 17 16 15.288 9.611 8.5 16 1.712z" fill="#273953"/>
        </svg>
      </button>
      ${data}
    </div>`
  outer.innerHTML = template
  insertAfter(outer, target)
}

// Remove active or disabled state from all triggers
function reset () {
  for (let i = 0; i < triggers.length; i++) {
    triggers[i].classList.remove(classes.disabled)
    triggers[i].classList.remove(classes.active)
  }
}

// Disable all triggers that are not currently active
function disable () {
  for (let i = 0; i < triggers.length; i++) {
    if (!triggers[i].classList.contains(classes.active)) {
      triggers[i].classList.add(classes.disabled)
    }
  }
}

function insertAfter (newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling)
  const scroll = new SmoothScroll()
  scroll.animateScroll(document.querySelector('[data-component=modal]'))
}
