import React from 'react';

function Thrott() {
  let counter = 0;

  // Define the getData function
  const getData = () => {
    console.log(`Debounced: ${counter++}`);
  };

  const myDebounce = (getData, delay) => {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);
      setTimeout(() => {
        getData();
      }, delay);
    };
  };

  const better = myDebounce(getData, 1000);

  return (
    <div>
      <input type="text" name="" id="" onKeyUp={getData} />
      <br />
      <input type="text" name="" id="" onKeyUp={better} />
    </div>
  );
}

export default Thrott;


// import React, { useState } from 'react';
// import debounce from 'lodash.debounce';

// function DebouncedSearch() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
  
//   // Debounce the search function with a delay of 500 milliseconds
//   const debouncedSearch = debounce(async (term) => {
//     // Perform your search logic here, e.g., fetch data from an API
//     // Simulate an API call with a setTimeout in this example
//     setTimeout(() => {
//       const results = fakeAPISearch(term);
//       setSearchResults(results);
//     }, 1000); // Adjust the debounce delay as needed
//   }, 500); // Adjust the debounce delay as needed

//   const handleInputChange = (event) => {
//     const term = event.target.value;
//     setSearchTerm(term);

//     // Call the debounced search function with the updated term
//     debouncedSearch(term);
//   };

//   // Simulated API search function
//   const fakeAPISearch = (term) => {
//     // Simulate search results based on the input term
//     return [
//       `Result 1 for "${term}"`,
//       `Result 2 for "${term}"`,
//       `Result 3 for "${term}"`,
//     ];
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={handleInputChange}
//       />
//       <ul>
//         {searchResults.map((result, index) => (
//           <li key={index}>{result}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default DebouncedSearch;



// import React, { useState } from 'react';
// import throttle from 'lodash.throttle';

// function ThrottledComponent() {
//   const [count, setCount] = useState(0);

//   const throttledIncrement = throttle(() => {
//     setCount(count + 1);
//   }, 1000); // Adjust the delay as needed (e.g., 1000 milliseconds)

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={throttledIncrement}>Increment Count (Throttled)</button>
//     </div>
//   );
// }

// export default ThrottledComponent;
