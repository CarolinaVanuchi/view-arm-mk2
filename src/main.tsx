import React from 'react';
import ReactDOM from 'react-dom';
import '../src/style/global.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
