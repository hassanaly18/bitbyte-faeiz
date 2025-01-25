import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/bootstrap.css' // (If this is different custom styles)
import './assets/css/style.css'
import './assets/css/font-awesome.min.css'
import './assets/css/responsive.css'

// JavaScript
import $ from 'jquery'                // if you really need jQuery
import 'bootstrap/dist/js/bootstrap.bundle.min.js'  // bundle includes Popper
import './assets/js/custom.js'

// If you have separate local scripts you still need:
import './assets/js/jquery-3.4.1.min.js' // or remove if you want the one from npm?
// import './assets/js/bootstrap.js'; // remove if it's just a duplicate
// import 'popper.js'; // remove, since the bundle includes it

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
