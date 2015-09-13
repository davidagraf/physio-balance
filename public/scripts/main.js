import 'styles/main.scss';
import 'locales/de.l20n';
import 'l20n/dist/webcompat/l20n.js';
import 'imgs/headerimg.png';

const jquery = require('jquery');
window.jQuery = jquery;
window.$ = jquery;
require('bootstrap-sass');

//import 'bootstrap-sass';

jquery('#nav').affix({
  offset: {
    top: function() {
      return jquery('#headerimg').height();
    }
  }
});
