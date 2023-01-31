import classes from './classes'

export default {
  open (data) {
    data.trigger.classList.add(classes.active)
    data.viewport.classList.add(classes.active)
    this.ariaExpanded(data)
  },
  close (data) {
    if (data.trigger && data.viewport) {
      data.trigger.classList.remove(classes.active)
      data.viewport.classList.remove(classes.active)
    } else if (data.trigger) {
      data.trigger.classList.remove(classes.active)
    } else if (data.viewport) {
      data.viewport.classList.remove(classes.active)
    }
    this.ariaHidden(data)
  },
  ariaHidden (data) {
    if (data.trigger && data.viewport) {
      data.trigger.setAttribute('aria-expanded', 'false')
      data.viewport.setAttribute('aria-hidden', 'true')
    } else if (data.trigger) {
      data.trigger.setAttribute('aria-expanded', 'false')
    } else if (data.viewport) {
      data.viewport.setAttribute('aria-hidden', 'true')
    }
  },
  ariaExpanded (data) {
    if (data.trigger && data.viewport) {
      data.trigger.setAttribute('aria-expanded', 'true')
      data.viewport.setAttribute('aria-hidden', 'false')
    } else if (data.trigger) {
      data.trigger.setAttribute('aria-expanded', 'false')
    } else if (data.viewport) {
      data.viewport.setAttribute('aria-hidden', 'false')
    }
  }
}
