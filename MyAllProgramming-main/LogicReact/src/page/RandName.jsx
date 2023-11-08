import React,{useEffect , useState} from 'react'

import sha256 from 'crypto-js/sha256';

function RandName() {
  const [loding , setLoding]=useState()
  const Randomes=()=>{
    setLoding(true)
    setTimeout(()=>{
      setLoding(false)
      const names = ["Alice", "Bob", "Charlie", 
      "David", "Eve", "Frank", 
      "Grace", "Hank", "Ivy",
       "Jack" , "jugal" , "karan" , "anku"];
    
      const randomName = names[Math.floor(Math.random() * names.length)];
      let randes=randomName
    console.log(randes , ":RandName")
     const hashedSecret = sha256(randes).toString();
      console.log(hashedSecret , ":randHash")
    },500)
  }
  return (
    <div>

      <button disabled={loding} onClick={ Randomes}>{loding ? "Adding..." : "Submit"}</button>
    </div>
  )
}

export default RandName



// function generateRandomName(length) {
//   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
//   let randomName = '';
//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * characters.length);
//     randomName += characters.charAt(randomIndex);
//   }

//   return randomName;
// }

// const randomNames = generateRandomName(6); // Change the length as needed
// console.log(randomNames);
