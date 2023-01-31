import '../css/main.css'
import '../../node_modules/swiper/css/swiper.css'
import '../../node_modules/plyr/dist/plyr.css'

import filters from './modules/filters'
import grid from './modules/grid'
import link from './modules/link'
import menu from './modules/menu'
import slideshow from './modules/slideshow'
import slideshowGrid from './modules/slideshow-grid'
import slideshowTwoCol from './modules/slideshow-two-col'
import video from './modules/video'

const AVIA = {}

AVIA.filters = filters
AVIA.grid = grid
AVIA.link = link
AVIA.menu = menu
AVIA.slideshow = slideshow
AVIA.slideshowGrid = slideshowGrid
AVIA.slideshowTwoCol = slideshowTwoCol
AVIA.video = video

if (!window.namespace) {
  window.AVIA = AVIA
}

Object.keys(AVIA).forEach((key) => {
  AVIA[key].init()
})

// Polyfill for closest() covering IE
// https://gomakethings.com/a-native-vanilla-javascript-way-to-get-the-closest-matching-parent-element/

/* eslint-disable */
if (window.Element && !Element.prototype.closest) {
  Element.prototype.closest =
  function(s) {
      var matches = (this.document || this.ownerDocument).querySelectorAll(s),
          i,
          el = this;
      do {
          i = matches.length;
          while (--i >= 0 && matches.item(i) !== el) {};
      } while ((i < 0) && (el = el.parentElement));
      return el;
  };
}
/* eslint-enable no-alert */
