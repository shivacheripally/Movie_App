import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {BrowerRouter,Routes,Route} from 'react-router-dom';
import Movies from './reducers';
import {createStore} from 'redux';
import App from './components/App';

const store = createStore(Movies);
console.log('store',store);
console.log('state',store.getState());

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
