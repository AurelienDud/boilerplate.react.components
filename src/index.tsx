import React from 'react'
import { render } from 'react-dom'
import reportWebVitals from './services/webvitals'

// render app
render((
  <React.StrictMode>
    <p>Hello</p>
  </React.StrictMode>
), document.getElementById('root'))

// performance measures
reportWebVitals(console.log)