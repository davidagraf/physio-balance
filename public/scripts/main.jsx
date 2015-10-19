import React from 'react';
import ReactDOM from 'react-dom';

import 'styles/main.scss';
import 'scripts/utils/mobile.js'
//import 'locales/de.l20n';
//import l20n from 'l20n/dist/webcompat/l20n.js';
//import 'scripts/schedule.js';

import Root from 'scripts/components/Root.jsx';

ReactDOM.render(<Root/>, document.getElementById('root'));
