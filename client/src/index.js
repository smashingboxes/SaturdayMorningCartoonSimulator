// Libs
import React from 'react';
import { render } from 'react-dom';
import { createStore, compose } from 'redux';
// import { autoRehydrate } from 'redux-persist';
import { persistStore, autoRehydrate } from 'redux-persist-immutable';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers';
import routes from './router';

// CSS
import './css/style.css';

// const store = createStore(reducer);
const store = compose(autoRehydrate())(createStore)(reducer);
console.log('store', store.getState());
persistStore(store);//

// Render
render(
  <Provider store={store}>
    { routes }
  </Provider>,
  document.getElementById('root')
);
