import React from 'react';
import CookiesProvider from 'react-cookie/cjs/CookiesProvider';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./App.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <App />
    </CookiesProvider>

  </React.StrictMode>
);


