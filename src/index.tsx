import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GlobalStyle from './global/GlobalStyle';
import MainHeaderProvider from './contexts/providers/MainHeaderProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <MainHeaderProvider>
        <App />
      </MainHeaderProvider>
    </BrowserRouter>
  </React.StrictMode>
);
