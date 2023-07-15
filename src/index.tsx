import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './pages/App';
import './styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);

root.render(
   <>
   <BrowserRouter>
      <App />
   </BrowserRouter>
   <h1>test</h1>
   </>
);

