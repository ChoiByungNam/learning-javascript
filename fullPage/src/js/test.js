(function (window, $) {
  function ScrollMagic(element, options) {
    let _default = {
      section: '.section'
    }
    let inst = this;

    inst.settings = $.extend(_default, options);
    inst.rootElement = $(element);
    inst.init();
  }

  ScrollMagic.prototype.init = function () {
    let inst = this;

    console.log(inst.settings.section);
    window.addEventListener('mousewheel', function() {
      console.log(window.scrollY);
    });
  }

  let scrollMotion = new ScrollMagic();
})(this, this.jQuery);

/*
  스크롤
*/