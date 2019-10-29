// @ts-ignore
window.__DEV__ = true

import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'

ReactDOM.render(
  <React.Suspense fallback="loading app">
    <App />
  </React.Suspense>,
  document.getElementById('app')
)
