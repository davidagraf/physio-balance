import 'styles/main.scss';
import 'locales/de.l20n';
import l20n from 'l20n/dist/webcompat/l20n.js';
import 'imgs/headerimg.png';

const jquery = require('jquery');
window.jQuery = jquery;
window.$ = jquery;
require('bootstrap-sass');

//import 'bootstrap-sass';

jquery('#nav').affix({
  offset: {
    top: function() {
      return jquery('#headeraffix > .headerimg').height();
    }
  }
});

const scrollspy = jquery('body').scrollspy({
  target: '#navbar'
});

jquery(window).resize(() => scrollspy.scrollspy('refresh'));

jquery(window.document).on('DOMLocalized', () => {
  if (window.location.hash) {
    document.getElementById(window.location.hash.substring(1)).scrollIntoView();
  }
  scrollspy.scrollspy('refresh');
});

jquery('header').on('click', '#navbar.in a', () => {
  jquery('#nav .navbar-toggle').click();
});


if (!!('ontouchstart' in window)) {
  jquery('body').addClass('touch');
}
