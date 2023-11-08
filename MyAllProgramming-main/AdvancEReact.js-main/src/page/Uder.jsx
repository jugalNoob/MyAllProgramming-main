import React from 'react';
import useStore from '../store';

function Uder() {
  const counter = useStore((state) => state.counter);
  const { increasecounter, dncreasecounter, restes } = useStore();

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increasecounter}>Add</button>
      <button onClick={dncreasecounter}>Des</button>
      <button onClick={restes}>Reset</button>
    </div>
  );
}

export default Uder;

//////////!SECTION
// const counter = useStore((state) => state.counter);
// // const increaseCounter = useStore((state) => state.increasecounter());
// const  inscre=useStore((state)=>state.increasecounter)
// const  insce=useStore((state)=>state.dncreasecounter)
// const  insc=useStore((state)=>state.restes)

// const {inscre ,insce ,insc}=





// import React, { useState } from 'react';

// const initialState = {
//   value: "jugal",
//   color: "black",
// };

// function Uder() {
//   const [state, setState] = useState(initialState);

//   const handleClick = (type) => {
//     setState({
//       ...state,
//       color: type === "INC" ? "blue" : type === "DEC" ? "red" : "green",
//     });
//   };

//   return (
//     <div>
//       <h1 style={{ color: state.color }}>{state.value}</h1>
//       <button onClick={() => handleClick("INC")}>Increment (blue)</button>
//       <button onClick={() => handleClick("DEC")}>Decrement (red)</button>
//       <button onClick={() => handleClick("MIN")}>Minus (green)</button>
//     </div>
//   );
// }

// export default Uder;

//UseReducer chnage color multiples link


// import React, { useReducer } from 'react';

// const initialState = {
//   value: "jugal",
//   color: "black", // Initial color
// };

// const reducer = (state, action) => {
//   let color;

//   if (action.type === "INC") {
//     color = "blue";
//   } else if (action.type === "DEC") {
//     color = "red";
//   } else if (action.type === "MIN") {
//     color = "green";
//   } else {
//     color = state.color; // Default to the current color
//   }

//   return {
//     ...state, // Spread the previous state
//     color, // Update the color
//   };
// };

// function User() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       <h1 style={{ color: state.color }}>{state.value}</h1>
//       <button onClick={() => dispatch({ type: "INC" })}>Increment (blue)</button>
//       <button onClick={() => dispatch({ type: "DEC" })}>Decrement (red)</button>
//       <button onClick={() => dispatch({ type: "MIN" })}>Minus (green)</button>
//     </div>
//   );
// }

// export default User;
