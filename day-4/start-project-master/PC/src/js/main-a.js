'use strict';

// 3rd-party dependencies
import $ from 'jquery';
import Swiper from 'swiper';
import Header from './components/header-a';
import Main from './components/main-a';

window.$ = $;
window.jQuery = $;

// Shortcut
// const $doc = $(document);
// const $win = $(window);

const defaults = {};

class Galleria {
  constructor(options) {
    const settings = Object.assign({}, defaults, options);
    const header = new Header();
    const main = new Main();

    const swiper = new Swiper('.swiper-container-main', {
      on: {
        init: function() {
          $('.swiper-slide-text1').addClass('is-active');
        },
        slideChange: function() {
          const slideTextSelector = '.swiper-slide-text';
          let slideIndex = this.realIndex + 1;

          if ($(slideTextSelector + slideIndex)) {
            $(slideTextSelector).removeClass('is-active');
            $(slideTextSelector + slideIndex).addClass('is-active');
          }
        },
      },
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    });

    const swiperOneclick = new Swiper('.swiper-container-oneclick', {
      loop: true,
      spaceBetween: 234,
      slidesPerView: 3
    });

    // Gate
    $('.btn-gate').on('click', () => header.openGate());
    $('.btn-gate-close, .mask').on('click', () => header.closeGate());

    // Search
    $('.btn-header-search').on('click', () => header.openSearch());
    $('.btn-header-search-close').on('click', () => header.closeSearch());

    // Gnb
    $('.header-gnb').on('mouseenter', () => header.openGnb());
    $('.header-group-active').on('mouseleave', () => header.closeGnb());

    // OneClick
    $('.btn-oneclick').on('click', () => main.openOneclick());
    $('.btn-oneclick-close').on('click', () => main.closeOneclick());

    Object.assign(this, {
      settings,
      header,
      main,
      swiper,
      swiperOneclick
    });
  }
}

$(() => {
  const App = new Galleria();
  window.App = App;
  console.log(App);
});
