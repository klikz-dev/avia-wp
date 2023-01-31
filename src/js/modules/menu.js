import classes from '../utilities/classes'
import state from '../utilities/state'

const component = document.querySelector('[data-component=menu]')

const dropdownTriggerSelector = '[data-role=menu-dropdown-trigger]'
const dropdownSelector = '[data-role=menu-dropdown]'
const dropdownOuterSelector = '[data-role=menu-dropdown-trigger-outer]'

const trigger = document.querySelector('[data-role=menu-trigger]')
const triggerText = document.querySelector('[data-role=menu-trigger-text]')
const viewport = document.querySelector('[data-role=menu-viewport]')

const dropdownTriggers = document.querySelectorAll(dropdownTriggerSelector)
const mobileDropdownTriggers = document.querySelectorAll('[data-role=menu-dropdown-trigger-mobile]')

export default {
  init
}

function init () {
  if (component) {
    return bindEvents()
  }
}

function bindEvents () {
  listenForDropdowns()
  listenForDrawer()
}

function listenForDropdowns () {
  for (let i = 0; i < dropdownTriggers.length; i++) {
    dropdownTriggers[i].addEventListener('mouseenter', manageDropdowns)
    dropdownTriggers[i].addEventListener('mouseleave', manageDropdowns)
  }
  for (let i = 0; i < mobileDropdownTriggers.length; i++) {
    mobileDropdownTriggers[i].addEventListener('click', manageMobileDropdowns)
  }
}

function listenForDrawer () {
  trigger.addEventListener('click', manageDrawer)
}

function manageDropdowns () {
  if (!component.classList.contains(classes.active)) {
    if (this.classList.contains(classes.active)) {
      state.close({
        trigger: this,
        viewport: this.querySelector(dropdownSelector)
      })
    } else {
      state.open({
        trigger: this,
        viewport: this.querySelector(dropdownSelector)
      })
    }
  }
}

function manageMobileDropdowns () {
  const parentDropdown = this.closest(dropdownTriggerSelector)
  const thisDropdown = parentDropdown.querySelector(dropdownSelector)
  const thisOuter = this.closest(dropdownOuterSelector)
  if (this.classList.contains(classes.active)) {
    state.close({
      trigger: this,
      viewport: thisDropdown
    })
    thisOuter.classList.remove(classes.active)
  } else {
    state.open({
      trigger: this,
      viewport: thisDropdown
    })
    thisOuter.classList.add(classes.active)
  }
}

function manageDrawer () {
  if (this.classList.contains(classes.active)) {
    triggerText.innerHTML = 'Menu'
    state.close({
      trigger: this,
      viewport: viewport
    })
    component.classList.remove(classes.active)
  } else {
    triggerText.innerHTML = 'Close'
    state.open({
      trigger: this,
      viewport: viewport
    })
    component.classList.add(classes.active)
  }
}
