import React from 'react'
import { render } from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'

import { App } from './App'

const root = document.querySelector('#main')

if (root) {
  render(<App />, root)
}
