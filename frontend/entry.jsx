import React from 'react';
import ReactDOM from 'react-dom';

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
