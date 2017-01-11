import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import { addOrange, addApple, clearFruit } from './actions';
import FruitStandContainer from './components/fruit_stand_container.js'

window.store = store; // just for testing
window.addApple = addApple;
window.addOrange = addOrange;
window.clearFruit = clearFruit;

const App = () => (
  <Provider store={store}>
    <FruitStandContainer />
  </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
});
