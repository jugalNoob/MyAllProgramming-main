import React, { useState, useEffect } from 'react';
import Home from "./Home";

function Hash() {
  const [Hashing, setHashing] = useState();

  useEffect(() => {
    let intervalId = setInterval(() => {
      let arr = ["jugal", "skaran", "anku", "lion", "tiger"];
      let arr1 = ["usa", "indian", "japan", "south africa", 'brazil'];
      let arr2 = [10, 20, 30, 60, 50, 40, 60];
      let arr3 = [10.0, 20.7, 58.5, 69.780];

      // Create an array containing references to the four arrays
      let arrayOfArrays = [arr, arr1, arr2, arr3];

      // Pick a random array from arrayOfArrays
      const randomArrayIndex = Math.floor(Math.random() * arrayOfArrays.length);
      const randomArray = arrayOfArrays[randomArrayIndex];
      
      // Set the selected array in the state
      setHashing(randomArray);
// console.log(randomArray)
      // Stop the interval after the first execution
     
    }, 10000);

    // Clean up the interval when the component unmounts
  
  }, []);

  return (
    <div>
      <Home state={Hashing} />
    </div>
  );
}

export default Hash;
