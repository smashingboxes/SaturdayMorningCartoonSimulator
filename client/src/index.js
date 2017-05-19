// Libs
import React from 'react';
import { render } from 'react-dom';
import { createStore, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist-immutable';
import { Provider } from 'react-redux';
import reducer from './reducers';
import routes from './router';

// CSS
import './css/style.css';

// const store = createStore(reducer);
const store = compose(autoRehydrate())(createStore)(reducer);
persistStore(store);//

// Render
render(
  <Provider store={store}>
    { routes }
  </Provider>,
  document.getElementById('root')
);
