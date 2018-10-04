import React from 'react'
import ReactDOM from 'react-dom'

import App from './App/App.jsx'

const s50_react_root = document.getElementById('root')

if (s50_react_root) {
    ReactDOM.render(React.createElement(App), s50_react_root)
} else {
    console.warn('Missing React root element')
}