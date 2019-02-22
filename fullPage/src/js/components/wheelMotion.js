// 3rd-party dependencies
import $ from 'jquery';

const defaults = {
  rootSelector: '.fullpage',
  sectionSelector: '.section'
};

export default class WheelMotion {
  constructor(options) {
    const settings = Object.assign({}, defaults, options);
    const rootElement = document.querySelector(settings.rootSelector);

    Object.assign(this, { settings, rootElement });
  }

  move() {
    const { settings } = this;

    $(defaults.sectionSelector).each(function() {
      $(this).on('mousewheel DOMMouseScroll', function(e) {
        let delta = 0;
        let flag = false;

        e.preventDefault();

        if ( e.originalEvent.detail ) {
          delta = e.originalEvent.detail * -40; // FF
        } else {
          delta = e.originalEvent.wheelDelta;
        }

        if ( delta < 0 && !flag ) {
          flag = true;
          console.log('Down', flag);
          if ( typeof $(this).next() != 'undefined' ) {
            delta = $(this).next().offset().top;
          }
        } else if ( delta > 0 && !flag ) {
          flag = true;
          console.log('Top', flag);
          if ( typeof $(this).prev() != 'undefined' ) {
            delta = $(this).prev().offset().top;
          }
        }
        $('html, body').stop().animate({
          scrollTop: delta + 'px'
          }, 300, function() {
            flag = false;
            console.log('animate', flag);
        });
      });
    });
  }

  pagination() {
    const { rootElement } = this;

    let sectionNumber = $(defaults.sectionSelector).length;
    let paginationHtml = $('<div>').addClass('nav');

    if ( sectionNumber > 1 ) {
      $(rootElement).after(paginationHtml);
      for ( let i = 1; i <= sectionNumber; i++ ) {
        $(paginationHtml).append('<button type="button">'+i+'</button>');
      }
    }
    console.log(this);
  }
}