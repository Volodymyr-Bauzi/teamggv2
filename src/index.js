import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import Navigation from './Navigation';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './components/translations/i18n';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
   <React.StrictMode>
      <BrowserRouter basename={window.location.pathname || ''}>
         <Routes>
            <Route path="/" element={<App />} />
            <Route path="*" element={<Navigation />} />
         </Routes>
      </BrowserRouter>
   </React.StrictMode>
);