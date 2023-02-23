import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import axios from 'axios';
import { CookiesProvider } from 'react-cookie';
const root = createRoot(document.getElementById("root"));


root.render(
    <CookiesProvider>
           <App />
    </CookiesProvider>
);
