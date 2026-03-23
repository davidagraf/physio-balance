import 'normalize.css/normalize.css';
import 'font-awesome/css/font-awesome.css';
import './styles/main.scss';
import './utils/mobile.js';

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Root from './components/Root.jsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)

