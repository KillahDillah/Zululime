import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { GiftProvider } from './GiftContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GiftProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GiftProvider>
  </React.StrictMode>
);
