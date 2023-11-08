// App.js
import React from 'react';
import { Impone, messages,array,fuck } from "./Impone"

function Imptwo({user}) {
    console.log(messages);
    console.log(array[0])
    console.log(fuck())


    return (
        <div>
            <h1>{user}</h1>
            <h1>My React App</h1>
            <Impone />

            
        </div>
    );
}

export default Imptwo;
