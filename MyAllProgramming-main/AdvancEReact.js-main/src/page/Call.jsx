import React, { useState, useCallback, useMemo } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // Define a memoized callback function using useCallback
  const increment = useCallback(() => {
    setCount(count + 1); // Using the previous count value
  }, [count]); // Dependency array includes 'count'

  // Define a memoized computed value using useMemo
  const squaredCount = useMemo(() => {
    return count * count;
  }, [count]); // Dependency array includes 'count'


  

  return (
    <div>
      <p>Count: {count}</p>
      <p>Squared Count: {squaredCount}</p>
      <button onClick={increment}>Increment Count</button>
    </div>
  );
}

export default Counter;
