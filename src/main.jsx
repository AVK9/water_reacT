import React from 'react';
import { Global } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import GlobalStyles from './assets/styles/GlobalStyles.jsx';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import '../i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/water_reacT">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Global styles={GlobalStyles} />
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
