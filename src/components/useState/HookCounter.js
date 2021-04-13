import React, { useState } from 'react';

function HookCounter() {
  const [count, setCount] = useState(0);

  const setCountHandler = () => setCount(count + 1);

  return (
    <div>
      <button onClick={setCountHandler}> Count {count}</button>
    </div>
  );
}

export default HookCounter;
