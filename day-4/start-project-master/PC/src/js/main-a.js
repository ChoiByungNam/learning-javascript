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
          let slideTextSelector = '.swiper-slide-text';
          let slideIndex = this.realIndex + 1;

          if ($(slideTextSelector + slideIndex)) {
            $(slideTextSelector).removeClass('is-active');
            $(slideTextSelector + slideIndex).addClass('is-active');
          }

          $(slideTextSelector + slideIndex).find('.title').textillate({
            in: {
              effect: 'fadeIn',
              delayScale: 2,
              delay: 40,
              loop: false
            }
          });

          $(slideTextSelector + slideIndex).find('.description > p').textillate({
            in: {
              effect: 'fadeIn',
              delayScale: 1.5,
              delay: 20,
              loop: false
            }
          });
        },
      },
      // autoplay: {
      //   delay: 3000,
      // },
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
    });

    const swiperOneclick = new Swiper('.swiper-container-oneclick', {
      initialSlide: 2,
      loop: true,
      spaceBetween: 234,
      slidesPerView: 3,
      centeredSlides: true
    });

    const swiperBanner = new Swiper('.swiper-container-banner', {
      speed: 600,
      direction: 'vertical',
      simulateTouch: false,
      autoHeight: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function(index, className) {
          return '<span class="' + className + '">' + 0 + (index + 1) + '</span>';
        }
      },
      fadeEffect: {
        crossFade: true
      },
      effect: 'fade'
    });

    window.onload = header.gnbPos();
    window.addEventListener('scroll', (e) => header.gnbPos());

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
      swiperOneclick,
      swiperBanner
    });
  }
}

$(() => {
  const App = new Galleria();
  window.App = App;
  console.log(App);
});
