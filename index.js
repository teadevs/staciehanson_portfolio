import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; //  main App component
import './style.css'; //

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import reportWebVitals from './reportWebVitals';
reportWebVitals();