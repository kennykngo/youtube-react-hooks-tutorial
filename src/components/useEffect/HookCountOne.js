import React, { useEffect, useState } from 'react';

function HookCountOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    console.log('useEffect - updating document title');
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount((num) => num + 1)}>
        Click {count} times!
      </button>
    </div>
  );
}

export default HookCountOne;
