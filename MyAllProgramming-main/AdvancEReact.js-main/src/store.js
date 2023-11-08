import create from "zustand"

const useStore=create((set)=>({
    counter:0, // initialState values is =0
// increasecounter:()=>console.log("hello") , 
increasecounter:()=>set((state) =>({counter:state.counter+2})),
dncreasecounter:()=>set((state) =>({counter:state.counter-2})),
restes:()=>set((state) =>({counter:state.counter= 0})),

}))


export default useStore

// import create from "zustand";

// const useStore = create((set) => ({
//   counter: 0,
//   increasecounter: () => set((state) => ({ counter: state.counter + 2 })),
//   decreasecounter: () => set((state) => ({ counter: state.counter - 2 })),
//   reset: () => set({ counter: 0 }),
// }));

// const useColorStore = create((set) => ({
//   color: "red",
//   changeColor: () => set({ color: "blue" }),
// }));

// export { useStore, useColorStore };


// import React, { useState } from 'react';
// import { useStore, useColorStore } from './stora';

// function App() {
//   const { counter, increasecounter, decreasecounter, reset } = useStore();
//   const { color, changeColor } = useColorStore();

//   const h1Style = { color };
//   return (
//     <div >
//       <h1>Counter: {counter}</h1>
//       <h1 style={h1Style}>Text Color: {color}</h1>
//       <button onClick={increasecounter}>Increment</button>
//       <button onClick={decreasecounter}>Decrement</button>
//       <button onClick={reset}>Reset</button>
//       <button onClick={changeColor}>{h1Style  ? "red" :"blue"}</button>
  
//     </div>
//   );
// }

// export default App;
