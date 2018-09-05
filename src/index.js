import React from 'react'
import { hydrate } from 'react-dom'
// import { BrowserRouter } from 'react-router-dom'

import Router from './router'
import App from './App'

import 'resources/assets/scss/main.scss'

const supportsHistory = 'pushState' in window.history

hydrate(
  <Router forceRefresh={!supportsHistory}>
    <App />
  </Router>,
  document.querySelector('#root'),
)
