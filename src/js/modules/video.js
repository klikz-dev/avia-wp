import classes from '../utilities/classes'

import Plyr from 'plyr'

const components = document.querySelectorAll('[data-component=video]')

export default {
  init
}

function init () {
  if (components.length > 0) {
    return bindEvents()
  }
}

function bindEvents () {
  for (let i = 0; i < components.length; i++) {
    const frame = components[i].querySelector('[data-role=video-frame')
    const player = new Plyr(frame)
    const play = components[i].querySelector('[data-role=video-play]')
    const playPlaceholder = components[i].querySelector('[data-role=video-placeholder]')
    play.addEventListener('click', () => {
      player.play()
      playPlaceholder.classList.add(classes.hidden)
    })
  }
}
