import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import Context from './Context';

ReactDOM.render(
  <Context>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context>,
  document.getElementById('root')
);

reportWebVitals();
