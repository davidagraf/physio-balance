import React from 'react';
import ReactDOM from 'react-dom/client';

import 'normalize.css/normalize.css';
import './styles/main.scss';
import './utils/mobile.js';

import Root from './components/Root.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root/>);
