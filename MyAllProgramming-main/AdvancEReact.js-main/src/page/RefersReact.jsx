import React, { useRef } from 'react';

function MyComponent() {
  // Create a ref using the useRef hook
  const myRef = useRef(null);

  const handleClick = () => {
    // Access the DOM element using myRef.current
    alert(`Input value: ${myRef.current.value}`);
  };

  return (
    <div>
      <input type="text" ref={myRef} />
      <button onClick={handleClick}>Alert Input Value</button>
    </div>
  );
}

export default MyComponent;
