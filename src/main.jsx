import React from 'react';
import { Global } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import GlobalStyles from './assets/styles/GlobalStyles.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global styles={GlobalStyles} />
    <BrowserRouter basename="/water_reacT">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
