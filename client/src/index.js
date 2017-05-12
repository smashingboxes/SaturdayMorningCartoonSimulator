// Libs
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers';
import routes from './router';

// CSS
import './css/style.css';


const store = createStore(reducer);

// Render
render(
  <Provider store={store}>
    { routes }
  </Provider>,
  document.getElementById('root')
);
