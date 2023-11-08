import React, { useContext } from 'react';
import { Data} from '../App';

function One() {
  const  one = useContext(Data);

  // const handleButtonClick = () => {
  //   const updatedData = { name: 'knaika sharma', roll: 123 };
  //   updateOne(updatedData);
  // };

  return (
    <div>
    <h1>{one}</h1>
    </div>
  );
}

export default One;
