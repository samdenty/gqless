import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'

ReactDOM.unstable_createRoot(document.getElementById('app')).render(
  <React.Suspense fallback="loading app">
    <App />
  </React.Suspense>
)
// ReactDOM.render(
//   <React.Suspense fallback="loading app">
//     <App />
//   </React.Suspense>,
//   document.getElementById('app')
// )
