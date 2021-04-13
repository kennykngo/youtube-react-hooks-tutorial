import React, { useState } from 'react';

function HookCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementHandler = () => setCount((num) => num + 1);
  const decrementHandler = () => setCount((num) => num - 1);

  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
    </div>
  );
}

export default HookCounterTwo;
