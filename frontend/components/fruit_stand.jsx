import React from 'react';

const FruitStand = props => (
  <div>
    <p>My fruits:</p>

    <ul>
      {props.fruits.map((fruit, idx) => <li key={idx}>{fruit}</li>)}
    </ul>
  </div>
);

export default FruitStand;
