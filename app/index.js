import React from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

import App from './components/App';

const container = document.querySelector('#root');
const root = createRoot(container);

root.render(
    <HelmetProvider>
        <App />
    </HelmetProvider>
);
