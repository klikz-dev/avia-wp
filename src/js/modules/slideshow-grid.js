import Swiper from 'swiper'

const components = document.querySelectorAll('[data-grid-slideshow]')

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
    const SwiperInstance = new Swiper(slideshow.querySelector('[data-grid-slideshow-slides]'), {
      grabCursor: true,
      slidesPerView: 'auto',
      freeMode: true,
      spaceBetween: 30,
      mousewheel: true
    })
  }
}
