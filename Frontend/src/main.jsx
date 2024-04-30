import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Fixed import
import App from './App.jsx';
import './index.css';
import StoreContext from './Context/StoreContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StoreContext>
      <App />
    </StoreContext>
  </BrowserRouter>
);


