import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleCounterIncrement = () => {
    setCounter(counter + 1);
  };
  const handleCounterDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <p>count: {counter}</p>
      <button onClick={handleCounterIncrement}>Increment</button>
      <button onClick={handleCounterDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
