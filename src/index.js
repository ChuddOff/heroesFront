import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './components/app/App';
import store from './store';

import './styles/index.scss';

// Use createRoot for rendering
const rootElement = document.getElementById('root');
if (rootElement) {
 createRoot(rootElement).render(
      <Provider store={store}>
        <App />
      </Provider>
 );
}
