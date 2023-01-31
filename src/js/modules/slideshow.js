import classes from '../utilities/classes'
import Swiper from 'swiper'

const components = document.querySelectorAll('[data-component=slideshow]')

export default {
  init
}

function init () {
  if (components.length > 0) {
    return bindEvents()
  }
}

function bindEvents () {
  for (const slideshow of components) {
    // eslint-disable-next-line no-unused-vars
    const SwiperInstance = new Swiper(slideshow.querySelector('[data-role=slideshow-slides]'), {
      loop: true,
      navigation: {
        nextEl: slideshow.querySelector('[data-role=slideshow-next]'),
        prevEl: slideshow.querySelector('[data-role=slideshow-prev]')
      },
      pagination: {
        clickable: true,
        el: slideshow.querySelector('[data-role=slideshow-pagination]'),
        bulletClass: classes.bullet,
        bulletActiveClass: classes.active,
        renderBullet: (index, className) => {
          const i = index + 1
          return `<button class=${className}><span class="sr-only"${i}</span></button>`
        }
      }
    })
  }
}
