import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {BrowerRouter,Routes,Route} from 'react-router-dom';
import Movies from './reducers';
import {createStore} from 'redux';
import App from './components/App';

const store = createStore(Movies);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App store={store}/>
  </StrictMode>
);
