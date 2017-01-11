import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { addOrange, addApple, clearFruit } from './actions';

window.store = store; // just for testing
window.addOrange = addOrange;
window.clearFruit = clearFruit;

const App = () => (
  <div>
    Hello, world!
  </div>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
});
