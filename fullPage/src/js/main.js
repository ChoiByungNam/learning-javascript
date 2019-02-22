'use strict';

// Polyfills
import 'babel-polyfill';

// 3rd-party dependencies
import $ from 'jquery';
import 'jquery-ui/ui/effect';
import WheelMotion from './components/wheelMotion';

window.$ = $;
window.jQuery = $;

// Shortcut
// const $doc = $(document);
// const $win = $(window);

const defaults = {};

class FullPage {
  constructor(options) {
    const settings = Object.assign({}, defaults, options);
    const wheelMotion = new WheelMotion();

    window.onload = wheelMotion.move();
    window.onload = wheelMotion.pagination();

    Object.assign(this, {
      settings,
      wheelMotion
    });
  }
}

$(() => {
  const App = new FullPage();
  window.App = App;
  console.log(App);
});
