import React from 'react';

const FruitStand = ({ fruits, addApple, addOrange, clearFruit }) => (
  <div>
    <p>My fruits:</p>

    <ul>
      {fruits.map((fruit, idx) => <li key={idx}>{fruit}</li>)}
    </ul>

    <button onClick={addApple}>Add orange</button>
    <button onClick={addOrange}>Add apple</button>
    <button onClick={clearFruit}>Clear</button>
  </div>
);

export default FruitStand;
