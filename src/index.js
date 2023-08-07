// index.js
import React from 'react'
import ReactDOM from 'react-dom/client';

import App from './App';


const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)
// we render the App component using the ReactDOM package
root.render(<App />);